package csci310.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table( name = "UnavailabilityDate" )
public class UnavailabilityDate {
    @Id
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    private String unavailabilityStartDate;

    @NotBlank
    private String unavailabilityEndDate;

    public UnavailabilityDate() {
    }

    public UnavailabilityDate(String username, String unavailabilityStartDate, String unavailabilityEndDate) {
        this.username = username;
        this.unavailabilityStartDate = unavailabilityStartDate;
        this.unavailabilityEndDate = unavailabilityEndDate;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUnavailabilityStartDate() {
        return unavailabilityStartDate;
    }

    public void setUnavailabilityStartDate(String unavailabilityStartDate) {
        this.unavailabilityStartDate = unavailabilityStartDate;
    }

    public String getUnavailabilityEndDate() {
        return unavailabilityEndDate;
    }

    public void setUnavailabilityEndDate(String unavailabilityEndDate) {
        this.unavailabilityEndDate = unavailabilityEndDate;
    }
}
