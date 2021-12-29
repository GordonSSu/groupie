package csci310.web;

import csci310.payload.PreferencesRequest;
import csci310.payload.SetPreferencesRequest;
import csci310.service.UserPreferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/app")
public class UserPreferencesController {
    @Autowired
    UserPreferencesService service;

    @PostMapping("/userpreferences")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setPreferences(@RequestBody SetPreferencesRequest request)
    {
        service.setPreferences(request.getPgdId(), request.getPrefs());
    }

    @GetMapping("/userpreferences")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<List<Integer>> getPreferences(@RequestBody PreferencesRequest request)
    {
        return service.getPreferences(request.getPgdId());
    }

    @PostMapping("/submituserpreferences")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setSubmitted(@RequestBody PreferencesRequest request)
    {
        service.setSubmitted(request.getPgdId());
    }
}
