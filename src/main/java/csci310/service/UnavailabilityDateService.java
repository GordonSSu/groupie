package csci310.service;

import csci310.domain.UnavailabilityDate;
import csci310.domain.UnavailabilityDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UnavailabilityDateService {
    @Autowired
    UnavailabilityDateRepository udr;

    public void setUnavailabilityDate(String startDate, String endDate)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        UnavailabilityDate ud = new UnavailabilityDate(username, startDate, endDate);
        udr.save(ud);
    }

    public List<String> getUnavailabilityDate()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        UnavailabilityDate ud = udr.findByUsername(username);
        List<String> ret = new ArrayList<>();
        ret.add(ud.getUnavailabilityEndDate());
        ret.add(ud.getUnavailabilityEndDate());
        return ret;
    }
}
