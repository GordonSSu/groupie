package cucumber;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import static org.junit.Assert.assertTrue;

/**
 * Step definitions for Cucumber tests.
 */
public class StepDefinitions {
	private static final String ROOT_URL = "http://localhost:8080/build/#";
	private static final String LOGOUT_URL = "http://localhost:8080/build/#/userpage";

	private final WebDriver driver = new ChromeDriver();

	// CUCUMBER TESTS FOR THE LOGIN FEATURES
	//*********************************************************************************
	//entering an invalid credentials
	@Given("I am on the login page")
	public void i_am_on_the_login_page() {
		driver.get(ROOT_URL);
	}

	@When("I enter {string} as a username")
	public void i_enter_as_a_username(String inputUsername) {
		WebElement usernameBox = driver.findElement(By.xpath("//*[@id=\"username\"]"));
		usernameBox.sendKeys(inputUsername);
	}

	@When("I enter {string} as a password")
	public void i_enter_as_a_password(String inputPassword) {
		WebElement passwordInput = driver.findElement(By.xpath("//*[@id=\"password\"]"));
		passwordInput.sendKeys(inputPassword);
	}

	@When("I click {string}")
	public void i_click(String string) {
		if(string.equals("Login")) {
			WebElement loginButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/form/div/button"));
			loginButton.sendKeys(Keys.ENTER);
		}
		if (string.equals("Create User")) {
			WebElement create_user = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/form/div/button"));
			create_user.sendKeys(Keys.ENTER);
		}
		//throw new io.cucumber.java.PendingException();
	}
	@Then("I should see {string}")
	public void i_should_see(String string) {
		try {
			Thread.sleep(1000);
		} catch (Exception e) {
		}
		String expression = "//*[@id=\"invalidCredentials\"]";
		WebElement alert = driver.findElement(By.xpath(expression));
		assertEquals("Invalid credentials", alert.getText());
		//throw new io.cucumber.java.PendingExceptions();
	}

	@After()
	public void after() {
		driver.quit();
	}

	// signing up to the page
	@When("I enter {string} as new username")
	public void i_enter_as_username(String string) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter {string} as new password")
	public void i_enter_as_new_password(String string) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter {string} as new confirmed password")
	public void i_enter_as_new_confirmed_password(String string) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When ("I click the Sign Up button")
	public void i_click_the_sign_up_button() {
		WebElement signup = driver.findElement(By.xpath("//a[@href='#/register']"));
		signup.click();
	}

	@Then("I should reach the homepage and calendar")
	public void i_should_reach_the_homepage_and_calendar() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// typing an incorrect confirmed password
	@Then("I should return to the login page")
	public void i_should_return_to_the_login_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// logout cucumber tests
	@Given("I am on the home page")
	public void i_am_on_the_home_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	//CUCUMBER TESTS FOR THE LOGOUT FEATURES
	//***********************************************************************************

	@When("I click the Logout button")
	public void i_click_the_Logout_button() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should see the login page")
	public void i_should_see_the_login_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// CUCUMBER TESTS FOR THE PRIVACY FEATURES
	//**********************************************************************
	@Given("I am on the privacy page")
	public void i_am_on_the_privacy_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter {string} into the username field")
	public void i_enter_into_the_username_field(String string) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should see {string} in the {string}")
	public void i_should_see_in_the(String string, String string2) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click {string} next to {string}")
	public void i_click_next_to(String string, String string2) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should not see {string} in the {string}")
	public void i_should_not_see_in_the(String string, String string2) {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// CUCUMBER TEST FOR CALENDAR FUNCTIONS
	//*******************************************************************
	@Given("I am logged into the application")
	public void i_am_logged_into_the_application() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click the Calendar button on the navbar")
	public void i_click_the_calendar_button_on_the_navbar() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should view the Calendar")
	public void i_should_view_the_Calendar() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Given("I am on the calendar")
	public void i_am_on_the_calendar() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click on an event box")
	public void i_click_on_an_event_box() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should see the event details")
	public void i_should_see_the_event_details() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click on the month button")
	public void i_click_on_the_month_button() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should visualize events across the month")
	public void i_should_visualize_events_across_the_month() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click on the list button")
	public void i_click_on_the_list_button() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I should visualize events in one list")
	public void i_should_visualize_events_in_one_list() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// CUCUMBER TEST FOR PGD FUNCTIONS
	//*******************************************************************
	@Given("I am on the create pgd page")
	public void i_am_on_the_create_pgd_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter a PGD title")
	public void i_enter_a_pgd_title() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter a PGD location")
	public void i_enter_a_pgd_location() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I select the genre for example Music")
	public void i_select_the_genre_for_example_Music() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I enter keywords for example Taylor Swift")
	public void i_enter_keywords_for_example_Taylor_Swift() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I select a start date")
	public void i_select_a_start_date() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I select an end date")
	public void i_select_an_end_date() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click Find Events")
	public void i_click_find_events() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I will see a list of relevant events")
	public void i_will_see_a_list_of_relevant_events() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	// CUCUMBER TEST FOR AVAILABILITY FUNCTIONS
	//*******************************************************************
	@Given("I am on the ticketmaster events page")
	public void i_am_on_the_ticketmaster_events_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I select PGD events and invited users")
	public void i_select_pgd_events_and_invited_users() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click continue to submit")
	public void i_click_continue_to_submit() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I will see the events and invitees added to the current pgd")
	public void i_will_see_the_events_and_invitees_added_to_the_current_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Given("I am on the selected pgd page")
	public void i_am_on_the_selected_pgd_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I have selected the invited users and events and heuristics")
	public void i_have_selected_the_invited_users_and_events_and_heuristics() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click Send Proposal")
	public void i_click_send_proposal() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("I see a confirmation page of these pgd details")
	public void i_see_a_confirmation_page_of_these_pgd_details() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Given("I am on the pgd confirmation page")
	public void i_am_on_the_pgd_confirmation_page() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I have selected availability and excitement levels")
	public void i_have_selected_availability_and_excitement_levels() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I click 'Submit'")
	public void i_click_submit() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@When("I have submitted a pgd")
	public void i_have_submitted_a_pgd() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}
}
