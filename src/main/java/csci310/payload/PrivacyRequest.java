package csci310.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class PrivacyRequest {
    @NotBlank
    private String username;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
}