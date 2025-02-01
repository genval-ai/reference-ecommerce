// Simple feature flag implementation

const featureFlags = {
  NEW_UI: false,
  BETA_FEATURE: false,
  PERFORMANCE_OPTIMIZATION: true,
};

function isFeatureEnabled(featureName) {
  return featureFlags[featureName] || false;
}

// Usage example
if (isFeatureEnabled('NEW_UI')) {
  // Render new UI
} else {
  // Render old UI
}

if (isFeatureEnabled('BETA_FEATURE')) {
  // Enable beta feature
}

if (isFeatureEnabled('PERFORMANCE_OPTIMIZATION')) {
  // Use optimized code path
}

// Function to update feature flags (could be called via API)
function updateFeatureFlag(featureName, isEnabled) {
  if (featureName in featureFlags) {
    featureFlags[featureName] = isEnabled;
    console.log(`Feature flag ${featureName} updated to ${isEnabled}`);
  } else {
    console.error(`Feature flag ${featureName} does not exist`);
  }
}

module.exports = {
  isFeatureEnabled,
  updateFeatureFlag,
};