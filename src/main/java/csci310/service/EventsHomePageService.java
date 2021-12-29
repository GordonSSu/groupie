package csci310.service;

import csci310.domain.*;
import org.openqa.selenium.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class EventsHomePageService {
    @Autowired
    UserRepository ur;
    @Autowired
    PGDRepository pgdr;
    @Autowired
    EventRepository er;

    public List<Event> getEvents()
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        User user = ur.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        List<PGD> pgdList = user.getInvitedPgds();
        List<Event> ret = new ArrayList<>();
        for (int i = 0; i < pgdList.size(); i++) {
            PGD curr = pgdList.get(i);
            if (curr.getConfirmedEventId() == -1) {
                ret.addAll(curr.getEvents());
            } else {
                Event currEvent = er.findById(curr.getConfirmedEventId())
                        .orElseThrow(() -> new NotFoundException("Event Not Found with id: " + curr.getConfirmedEventId()));
                ret.add(currEvent);
            }
        }
        return ret;
    }
}
