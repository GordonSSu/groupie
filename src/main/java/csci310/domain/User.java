package csci310.domain;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;

@Entity
@Table( name = "Users" )
public class User {
    @Id
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    private String password;

    private String role;

    @ManyToMany(mappedBy = "blocked")
    private List<User> blockedBy;

    @ManyToMany
    private List<User> blocked;

    @ManyToMany(mappedBy = "invitedUsers")
    private List<PGD> invitedPgds;

    @ManyToMany(mappedBy = "invitedUsersNotResponded")
    private List<PGD> notRespondedPgds;

    @ManyToMany(mappedBy = "invitedUsersInProgress")
    private List<PGD> inProgressPgds;

    @ManyToMany(mappedBy = "invitedUsersSubmitted")
    private List<PGD> submittedButUnconfirmedPgds;

    @ManyToMany(mappedBy = "invitedUsersAttending")
    private List<PGD> confirmedPgds;

    @ManyToMany(mappedBy = "invitedUsersDeclinedOrCannotGo")
    private List<PGD> declinedOrCannotGoPgds;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() { return role; }
    public void setRoles(String role) { this.role = role; }

    public List<User> getBlockedBy() {
        return blockedBy;
    }

    public void setBlockedBy(List<User> blockedBy) {
        this.blockedBy = blockedBy;
    }

    public List<User> getBlocked() {
        return blocked;
    }

    public void setBlocked(List<User> blocked) {
        this.blocked = blocked;
    }

    public List<PGD> getNotRespondedPgds() {
        return notRespondedPgds;
    }

    public void setNotRespondedPgds(List<PGD> notRespondedPgds) {
        this.notRespondedPgds = notRespondedPgds;
    }

    public List<PGD> getInProgressPgds() {
        return inProgressPgds;
    }

    public void setInProgressPgds(List<PGD> inProgressPgds) {
        this.inProgressPgds = inProgressPgds;
    }

    public List<PGD> getSubmittedButUnconfirmedPgds() {
        return submittedButUnconfirmedPgds;
    }

    public void setSubmittedButUnconfirmedPgds(List<PGD> submittedButUnconfirmedPgds) {
        this.submittedButUnconfirmedPgds = submittedButUnconfirmedPgds;
    }

    public List<PGD> getConfirmedPgds() {
        return confirmedPgds;
    }

    public void setConfirmedPgds(List<PGD> confirmedPgds) {
        this.confirmedPgds = confirmedPgds;
    }

    public List<PGD> getInvitedPgds() {
        return invitedPgds;
    }

    public void setInvitedPgds(List<PGD> invitedPgds) {
        this.invitedPgds = invitedPgds;
    }

    public List<PGD> getDeclinedOrCannotGoPgds() {
        return declinedOrCannotGoPgds;
    }

    public void setDeclinedOrCannotGoPgds(List<PGD> declinedOrCannotGoPgds) {
        this.declinedOrCannotGoPgds = declinedOrCannotGoPgds;
    }
}