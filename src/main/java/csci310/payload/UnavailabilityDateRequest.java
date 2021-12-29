package csci310.payload;

import javax.validation.constraints.NotBlank;

public class UnavailabilityDateRequest {
    @NotBlank
    private String startDate;
    @NotBlank
    private String endDate;

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}