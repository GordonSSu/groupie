package csci310.payload;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class PreferencesRequest {
    @NotBlank
    private long pgdId;

    public long getPgdId() {
        return pgdId;
    }

    public void setPgdId(long pgdId) {
        this.pgdId = pgdId;
    }
}