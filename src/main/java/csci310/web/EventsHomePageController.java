package csci310.web;

import csci310.domain.Event;
import csci310.domain.PGD;
import csci310.payload.PreferencesRequest;
import csci310.payload.SetPreferencesRequest;
import csci310.service.EventsHomePageService;
import csci310.service.UserPreferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/app")
public class EventsHomePageController {
    @Autowired
    EventsHomePageService service;

    // future to past
    @GetMapping("/eventscalendar")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<Event> getEvents()
    {
        List<Event> result = service.getEvents();
        Collections.sort(result, new Comparator<Event>() {
            public int compare(Event e1, Event e2) {
                String[] dateParts1 = e1.getDate().split("/");
                String[] dateParts2 = e2.getDate().split("/");
                int yearResult = dateParts1[2].compareTo(dateParts2[2]);
                if (yearResult != 0) {
                    return -1 * yearResult;
                }
                int monthResult = dateParts1[0].compareTo(dateParts2[0]);
                if (monthResult != 0) {
                    return -1 * monthResult;
                }
                int dayResult = dateParts1[1].compareTo(dateParts2[1]);
                if (dayResult != 0) {
                    return -1 * dayResult;
                }
                return 0;
            }
        });
        return result;
    }

    // past to future
    @GetMapping("/eventscalendarreversed")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<Event> getEventsReverse()
    {
        List<Event> result = service.getEvents();
        Collections.sort(result, new Comparator<Event>() {
            public int compare(Event e1, Event e2) {
                String[] dateParts1 = e1.getDate().split("/");
                String[] dateParts2 = e2.getDate().split("/");
                int yearResult = dateParts1[2].compareTo(dateParts2[2]);
                if (yearResult != 0) {
                    return yearResult;
                }
                int monthResult = dateParts1[0].compareTo(dateParts2[0]);
                if (monthResult != 0) {
                    return monthResult;
                }
                int dayResult = dateParts1[1].compareTo(dateParts2[1]);
                if (dayResult != 0) {
                    return dayResult;
                }
                return 0;
            }
        });
        return result;
    }
}
