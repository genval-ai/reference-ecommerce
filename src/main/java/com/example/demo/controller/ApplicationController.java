package com.example.demo.controller;

import com.example.demo.model.Application;
import com.example.demo.model.ExistingCapability;
import com.example.demo.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long id) {
        Application application = applicationService.getApplicationById(id);
        if (application != null) {
            return ResponseEntity.ok(application);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Application createApplication(@RequestBody Application application) {
        return applicationService.saveApplication(application);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable Long id, @RequestBody Application applicationDetails) {
        Application updatedApplication = applicationService.updateApplication(id, applicationDetails);
        if (updatedApplication != null) {
            return ResponseEntity.ok(updatedApplication);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        if (applicationService.deleteApplication(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/discover-capabilities")
    public ResponseEntity<List<ExistingCapability>> discoverRelevantCapabilities(@PathVariable Long id) {
        // Mock implementation for now
        List<ExistingCapability> mockCapabilities = new ArrayList<>();
        mockCapabilities.add(new ExistingCapability("User Authentication", "Authenticate", "High relevance to user management", 0.95));
        mockCapabilities.add(new ExistingCapability("Data Storage", "Store Data", "Matches application's data persistence needs", 0.87));
        mockCapabilities.add(new ExistingCapability("Email Notification", "Send Notification", "Useful for user communication", 0.78));
        return ResponseEntity.ok(mockCapabilities);
    }
}