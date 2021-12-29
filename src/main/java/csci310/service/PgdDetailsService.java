package csci310.service;

import csci310.Algorithm;
import csci310.domain.*;
import org.openqa.selenium.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PgdDetailsService {
    @Autowired
    PGDRepository pgdRepository;
    @Autowired
    UserPreferenceRepository userPreferenceRepository;

    public void setOptimalEvent(long pgdId)
    {
        PGD pgd = pgdRepository.findById(pgdId).orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));

        Algorithm algorithm = new Algorithm();
        long confirmedEventId = algorithm.getOptimalEventId(pgd, userPreferenceRepository);

        pgd.setConfirmedEventId(confirmedEventId);

        List<User> usersSubmitted = pgd.getInvitedUsersSubmitted();
        List<User> invitedUsersDeclinedOrCannotGo = new ArrayList<>();
        List<User> invitedUsersAttending = new ArrayList<>();

        for (User u :usersSubmitted) {
            UserPreference up = userPreferenceRepository.findById(u.getUsername(), pgdId, confirmedEventId).orElseThrow(() -> new NotFoundException("UserPreference Not Found for user: " + u.getUsername()));

            if (up.getIsAvailable() != 0) {
                invitedUsersAttending.add(u);
            } else {
                invitedUsersDeclinedOrCannotGo.add(u);
            }
        }

        pgd.setInvitedUsersDeclinedOrCannotGo(invitedUsersDeclinedOrCannotGo);
        pgd.setInvitedUsersAttending(invitedUsersAttending);
    }

    public List<List<Integer>> getPgdResponses(long pgdId, long eventId)
    {
        PGD pgd = pgdRepository.findById(pgdId).orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));
        List<List<Integer>> pgdDetails = new ArrayList<>();
        List<User> userList = pgd.getInvitedUsersSubmitted();

        for (int i = 0; i < userList.size(); i++) {
            UserPreference currPref = userPreferenceRepository.findById(userList.get(i).getUsername(), pgdId, eventId)
                    .orElseThrow(() -> new NotFoundException("Event Preference Not Found with id: " + eventId));
            ArrayList<Integer> newPref = new ArrayList<Integer>(Arrays.asList(currPref.getIsAvailable(), currPref.getExcitement()));
            pgdDetails.set(i, newPref);
        }
        return pgdDetails;
    }

    public PGD getPgdDetails(long pgdId)
    {
        PGD pgd = pgdRepository.findById(pgdId).orElseThrow(() -> new NotFoundException("PGD Not Found with id: " + pgdId));
        return pgd;
    }
}
