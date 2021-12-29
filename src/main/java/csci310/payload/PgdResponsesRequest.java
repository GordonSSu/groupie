package csci310.payload;

import javax.validation.constraints.NotBlank;

public class PgdResponsesRequest {
    @NotBlank
    private long pgdId;

    @NotBlank
    private long eventId;

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
}