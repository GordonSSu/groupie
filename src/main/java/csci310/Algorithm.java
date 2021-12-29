package csci310;

import csci310.domain.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class Algorithm {
//    @Autowired
//    UserPreferenceRepository userPreferenceRepository;

    public long getOptimalEventId(PGD proposedGroupDate, UserPreferenceRepository userPreferenceRepository) {
        List<PGDEvent> allPgdEvents = new ArrayList<>();
        long pgdId = proposedGroupDate.getId();

        // Convert each event to PGDEvent and add to list allPgdEvents
        for (Event event : proposedGroupDate.getEvents()) {
            long eventId = event.getId();
            long totalExcitement = 0;
            long numUsersAbleToAttend = 0;

            for (User user : proposedGroupDate.getInvitedUsers()) {
                Optional<UserPreference> userPreferenceOptional = userPreferenceRepository.findById(user.getUsername(), pgdId, eventId);
                UserPreference userPreference = userPreferenceOptional.get();

                if (userPreference.getIsSubmitted() && userPreference.getIsAvailable() != 0) {
                    totalExcitement += userPreference.getExcitement();
                    numUsersAbleToAttend++;
                }
            }
            allPgdEvents.add(new PGDEvent(eventId, totalExcitement, numUsersAbleToAttend));
        }

        // Sort PGDEvents in order of priority and return top pick
        Collections.sort(allPgdEvents, Collections.reverseOrder());
        return allPgdEvents.get(0).eventId;
    }

    /*
     * Comparable class for PGDEvents that compares based on total excitement first
     * and number of users available to attend second
     */
    class PGDEvent implements Comparable<PGDEvent> {
        long eventId;
        long totalExcitement;
        long numUsersAbleToAttend;

        PGDEvent(long eventId, long totalExcitement, long numUsersAbleToAttend) {
            this.eventId = eventId;
            this.totalExcitement = totalExcitement;
            this.numUsersAbleToAttend = numUsersAbleToAttend;
        }

        @Override
        public int compareTo(PGDEvent otherPgdEvent) {
            if (totalExcitement == otherPgdEvent.totalExcitement &&
                    numUsersAbleToAttend == otherPgdEvent.numUsersAbleToAttend) {
                return 0;
            } else if (totalExcitement > otherPgdEvent.totalExcitement ||
                    (totalExcitement == otherPgdEvent.totalExcitement &&
                            numUsersAbleToAttend > otherPgdEvent.numUsersAbleToAttend)) {
                return 1;
            } else {
                return -1;
            }
        }
    }
}
