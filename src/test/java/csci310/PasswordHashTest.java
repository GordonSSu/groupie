package csci310;

import org.junit.Assert;
import org.junit.jupiter.api.Test;

import java.security.NoSuchAlgorithmException;

public class PasswordHashTest {

	@Test
	public void testGetSHA() throws NoSuchAlgorithmException {
		PasswordHash h = new PasswordHash();
		String s1 = "GeeksForGeeks";
		Assert.assertEquals(h.getSHA(s1), "112e476505aab51b05aeb2246c02a11df03e1187e886f7c55d4e9935c290ade");
	}

}
