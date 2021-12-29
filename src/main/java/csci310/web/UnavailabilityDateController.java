package csci310.web;

import csci310.payload.UnavailabilityDateRequest;
import csci310.service.UnavailabilityDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/app")
public class UnavailabilityDateController {
    @Autowired
    UnavailabilityDateService service;

    @PostMapping("/myavailability")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setUnavailabilityDate(@RequestBody UnavailabilityDateRequest request)
    {
        service.setUnavailabilityDate(request.getStartDate(), request.getEndDate());
    }

    @GetMapping("/myavailability")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<String> getUnavailabilityDate()
    {
        return service.getUnavailabilityDate();
    }
}
