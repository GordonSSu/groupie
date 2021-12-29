package csci310.payload;

import csci310.domain.PGD;

import javax.validation.constraints.NotBlank;

public class PgdDetailsRequest {
    @NotBlank
    private long pgdId;

    public long getPgdId() {
        return pgdId;
    }

    public void setPgdId(long pgdId) {
        this.pgdId = pgdId;
    }
}