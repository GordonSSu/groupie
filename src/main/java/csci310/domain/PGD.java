package csci310.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table( name = "PGD" )
public class PGD {
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @ManyToMany
    private List<Event> events;

    @NotBlank
    private String hostUsername;

    @NotBlank
    @ManyToMany
    private List<User> invitedUsers;

    @NotBlank
    private long confirmedEventId;

    @ManyToMany
    private List<User> invitedUsersNotResponded;

    @ManyToMany
    private List<User> invitedUsersInProgress;

    @ManyToMany
    private List<User> invitedUsersSubmitted;

    @ManyToMany
    private List<User> invitedUsersAttending;

    @ManyToMany
    private List<User> invitedUsersDeclinedOrCannotGo;

    public PGD() {
    }

    public PGD(List<Event> events, String hostUsername, List<User> invitedUsers) {
        this.events = events;
        this.hostUsername = hostUsername;
        this.invitedUsers = invitedUsers;
        this.confirmedEventId = -1;
    }

    public long getId() {
        return id;
    }

    public void setId(long pgd_id) {
        this.id = pgd_id;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public String getHostUsername() {
        return hostUsername;
    }

    public void setHostUsername(String hostUsername) {
        this.hostUsername = hostUsername;
    }

    public List<User> getInvitedUsers() {
        return invitedUsers;
    }

    public void setInvitedUsers(List<User> invitedUsers) {
        this.invitedUsers = invitedUsers;
    }

    public long getConfirmedEventId() {
        return confirmedEventId;
    }

    public void setConfirmedEventId(long confirmedEventId) {
        this.confirmedEventId = confirmedEventId;
    }

    public List<User> getInvitedUsersAttending() {
        return invitedUsersAttending;
    }

    public void setInvitedUsersAttending(List<User> invitedUsersAttending) {
        this.invitedUsersAttending = invitedUsersAttending;
    }

    public List<User> getInvitedUsersNotResponded() {
        return invitedUsersNotResponded;
    }

    public void setInvitedUsersNotResponded(List<User> invitedUsersNotResponded) {
        this.invitedUsersNotResponded = invitedUsersNotResponded;
    }

    public List<User> getInvitedUsersInProgress() {
        return invitedUsersInProgress;
    }

    public void setInvitedUsersInProgress(List<User> invitedUsersInProgress) {
        this.invitedUsersInProgress = invitedUsersInProgress;
    }

    public List<User> getInvitedUsersSubmitted() {
        return invitedUsersSubmitted;
    }

    public void setInvitedUsersSubmitted(List<User> invitedUsersSubmitted) {
        this.invitedUsersSubmitted = invitedUsersSubmitted;
    }

    public List<User> getInvitedUsersDeclinedOrCannotGo() {
        return invitedUsersDeclinedOrCannotGo;
    }

    public void setInvitedUsersDeclinedOrCannotGo(List<User> invitedUsersDeclinedOrCannotGo) {
        this.invitedUsersDeclinedOrCannotGo = invitedUsersDeclinedOrCannotGo;
    }
}
