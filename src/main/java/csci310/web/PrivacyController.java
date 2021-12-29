package csci310.web;

import csci310.domain.User;
import csci310.payload.PrivacyRequest;;
import csci310.service.PrivacyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/app")
public class PrivacyController {
    @Autowired
    PrivacyService service;

    @PostMapping("/block")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setNewBlocked(@RequestBody PrivacyRequest request)
    {
        service.setNewBlocked(request.getUsername());
    }

    @GetMapping("/block")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<User> getBlocked()
    {
        return service.getBlocked();
    }

    @PostMapping("/unblock")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setNewUnblocked(@RequestBody PrivacyRequest request)
    {
        service.setNewUnblocked(request.getUsername());
    }

}
