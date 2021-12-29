package csci310;

import csci310.domain.*;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class AlgorithmTest extends Mockito {

//    @Mock
//    UserPreferenceRepository mockedUserPreferenceRepository;

    @Test
    public void testGetOptimalEventId() {
        Algorithm a = new Algorithm();

        UserPreferenceRepository mockedUserPreferenceRepository = mock(UserPreferenceRepository.class);

        User user = new User("testUsername", "testPasswordHash");
//        userRepository.save(user);

        Event event1 = new Event("Test Event 1", "12/25/2021", "Los Angeles", "https://www.ticketmaster.com/");
        Event event2 = new Event("Test Event 2", "12/26/2021", "San Jose", "https://www.ticketmaster.com/");
//        eventRepository.save(event1);
//        eventRepository.save(event2);

        List<Event> eventsList = new ArrayList<>(Arrays.asList(event1, event2));
        List<User> invitedUsersList = new ArrayList<>(Arrays.asList(user));

        PGD testPgd = new PGD(eventsList, "testHostUsername", invitedUsersList);
//        pgdRepository.save(testPgd);

        UserPreference up1 = new UserPreference(user.getUsername(), testPgd.getId(), event1.getId(), 0, 1, true);
        UserPreference up2 = new UserPreference(user.getUsername(), testPgd.getId(), event2.getId(), 0, 0, true);
//        userPreferenceRepository.save(up1);
//        userPreferenceRepository.save(up2);

        when(mockedUserPreferenceRepository.findById(
                user.getUsername(),
                testPgd.getId(),
                event1.getId())).thenReturn(Optional.of(up1));
        when(mockedUserPreferenceRepository.findById(
                user.getUsername(),
                testPgd.getId(),
                event2.getId())).thenReturn(Optional.of(up2));
        Assert.assertEquals(event1.getId(), a.getOptimalEventId(testPgd, mockedUserPreferenceRepository));
    }
}