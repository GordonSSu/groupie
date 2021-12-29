package csci310.payload;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class SetPreferencesRequest {
    @NotBlank
    private long pgdId;
    @NotBlank
    private List<List<Integer>> prefs;

    public long getPgdId() {
        return pgdId;
    }

    public void setPgdId(long pgdId) {
        this.pgdId = pgdId;
    }

    public List<List<Integer>> getPrefs() {
        return prefs;
    }

    public void setPrefs(List<List<Integer>> prefs) {
        this.prefs = prefs;
    }
}