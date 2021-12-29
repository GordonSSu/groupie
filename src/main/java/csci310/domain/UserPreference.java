package csci310.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table( name = "UserPreferences" )
public class UserPreference {
    @Id
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    private long pgdId;

    @NotBlank
    private long eventId;

    private int isAvailable;

    private int excitement;

    @NotBlank
    private boolean isSubmitted;

    public UserPreference() {
    }

    public UserPreference(String username, long pgdId, long eventId, int excitement, int isAvailable, boolean isSubmitted) {
        this.username = username;
        this.pgdId = pgdId;
        this.eventId = eventId;
        this.excitement = excitement;
        this.isAvailable = isAvailable;
        this.isSubmitted = isSubmitted;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getPgdId() {
        return pgdId;
    }

    public void setPgdId(long pgdId) {
        this.pgdId = pgdId;
    }

    public long getEventId() {
        return eventId;
    }

    public void setEventId(long eventId) {
        this.eventId = eventId;
    }

    public int getExcitement() {
        return excitement;
    }

    public void setExcitement(int excitement) {
        this.excitement = excitement;
    }

    public int getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(int isAvailable) {
        this.isAvailable = isAvailable;
    }

    public boolean getIsSubmitted() {
        return isSubmitted;
    }

    public void setIsSubmitted(boolean isSubmitted) {
        this.isSubmitted = isSubmitted;
    }
}
