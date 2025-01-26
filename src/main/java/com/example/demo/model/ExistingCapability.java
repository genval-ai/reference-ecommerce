package com.example.demo.model;

public class ExistingCapability {
    private String name;
    private String proposedOperationName;
    private String reasoning;
    private double matchScore;

    public ExistingCapability(String name, String proposedOperationName, String reasoning, double matchScore) {
        this.name = name;
        this.proposedOperationName = proposedOperationName;
        this.reasoning = reasoning;
        this.matchScore = matchScore;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProposedOperationName() {
        return proposedOperationName;
    }

    public void setProposedOperationName(String proposedOperationName) {
        this.proposedOperationName = proposedOperationName;
    }

    public String getReasoning() {
        return reasoning;
    }

    public void setReasoning(String reasoning) {
        this.reasoning = reasoning;
    }

    public double getMatchScore() {
        return matchScore;
    }

    public void setMatchScore(double matchScore) {
        this.matchScore = matchScore;
    }
}