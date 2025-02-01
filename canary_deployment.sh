#!/bin/bash

# Canary Deployment Script

# Set variables
APP_NAME="myapp"
NEW_VERSION="v2"
CANARY_WEIGHT=20

# Start canary deployment
echo "Starting canary deployment for $APP_NAME"

# Update the canary deployment with the new version
kubectl set image deployment/$APP_NAME-canary $APP_NAME=$APP_NAME:$NEW_VERSION

# Scale up the canary deployment
kubectl scale deployment $APP_NAME-canary --replicas=1

# Update the service to send traffic to canary
kubectl set service $APP_NAME --selector app=$APP_NAME,version=$NEW_VERSION

# Gradually increase traffic to canary
for i in {1..5}
do
    WEIGHT=$((CANARY_WEIGHT * i))
    echo "Increasing canary weight to $WEIGHT%"
    kubectl set service $APP_NAME --selector app=$APP_NAME,version=$NEW_VERSION --weight $WEIGHT
    kubectl set service $APP_NAME --selector app=$APP_NAME,version=v1 --weight $((100 - WEIGHT))
    
    # Wait and monitor
    sleep 300 # 5 minutes
    
    # Check if canary is healthy
    if ! kubectl rollout status deployment/$APP_NAME-canary; then
        echo "Canary deployment failed. Rolling back."
        kubectl rollout undo deployment/$APP_NAME-canary
        kubectl set service $APP_NAME --selector app=$APP_NAME,version=v1 --weight 100
        exit 1
    fi
done

# If everything is okay, update the main deployment
echo "Canary deployment successful. Updating main deployment."
kubectl set image deployment/$APP_NAME $APP_NAME=$APP_NAME:$NEW_VERSION

# Scale down canary
kubectl scale deployment $APP_NAME-canary --replicas=0

# Set service back to main deployment
kubectl set service $APP_NAME --selector app=$APP_NAME --weight 100

echo "Canary deployment completed successfully."