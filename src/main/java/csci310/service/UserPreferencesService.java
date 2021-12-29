package csci310.service;

import csci310.domain.*;
import org.openqa.selenium.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserPreferencesService {
    @Autowired
    UserRepository ur;
    @Autowired
    UserPreferenceRepository upr;
    @Autowired
    PGDRepository pgdr;

    public void setPreferences(long pgdId, List<List<Integer>> prefs)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        PGD curr = pgdr.findById(pgdId)
                .orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));
        List<Event> eventList = curr.getEvents();
        for (int i = 0; i < eventList.size(); i++) {
            long eventId = eventList.get(i).getId();
            UserPreference currPref = upr.findById(username, pgdId, eventId)
                    .orElseThrow(() -> new NotFoundException("Event Preference Not Found with id: " + username + ", " + eventId));
            currPref.setIsAvailable(prefs.get(i).get(0));
            currPref.setExcitement(prefs.get(i).get(1));
            upr.save(currPref);
        }
    }

    public List<List<Integer>> getPreferences(long pgdId)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        PGD curr = pgdr.findById(pgdId)
                .orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));
        List<Event> eventList = curr.getEvents();
        List<List<Integer>> ret = new ArrayList<>();
        for (int i = 0; i < eventList.size(); i++) {
            long eventId = eventList.get(i).getId();
            UserPreference currPref = upr.findById(username, pgdId, eventId)
                    .orElseThrow(() -> new NotFoundException("Event Preference Not Found with id: " + username + ", " + eventId));
            ArrayList<Integer> newPref = new ArrayList<Integer>(Arrays.asList(currPref.getIsAvailable(), currPref.getExcitement()));
            ret.set(i, newPref);
        }
        return ret;
    }

    public void setSubmitted(long pgdId)
    {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = ((UserDetailsImpl) auth.getPrincipal()).getUsername();
        PGD curr = pgdr.findById(pgdId)
                .orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));
        List<Event> eventList = curr.getEvents();
        for (int i = 0; i < eventList.size(); i++) {
            long eventId = eventList.get(i).getId();
            UserPreference currPref = upr.findById(username, pgdId, eventId)
                    .orElseThrow(() -> new NotFoundException("Event Preference Not Found with id: " + username + ", " + eventId));
            currPref.setIsSubmitted(true);
            upr.save(currPref);
        }
    }
}
