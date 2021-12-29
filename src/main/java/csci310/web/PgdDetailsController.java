package csci310.web;

import csci310.domain.PGD;
import csci310.payload.PgdDetailsRequest;
import csci310.payload.PgdResponsesRequest;
import csci310.service.PgdDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/app")
public class PgdDetailsController {
    @Autowired
    PgdDetailsService service;

    @PostMapping("/pgddetails")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void setOptimalDate(@RequestBody PgdDetailsRequest request)
    {
        service.setOptimalEvent(request.getPgdId());
    }

    @GetMapping("/pgddetails")
    @PreAuthorize("hasRole('ROLE_USER')")
    public PGD getPgdDetails(@RequestBody PgdDetailsRequest request)
    {
        return service.getPgdDetails(request.getPgdId());
    }

    @GetMapping("/pgdresponses")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<List<Integer>> getPgdResponses(@RequestBody PgdResponsesRequest request)
    {
        return service.getPgdResponses(request.getPgdId(), request.getEventId());
    }
}
