Feature: Testing the login and registration features
  Scenario: Attempting login with invalid user credentials
    Given I am on the login page
    When I enter "testrr" as a username
    And I enter "123" as a password
    And I click "Login"
    Then I should see "Invalid Email/Password"

  Scenario: Registration of user and login with the valid user credentials
    Given I am on the login page
    When I click on "registre"
    And
    And I enter the randomly generated unique username as a username
    And I enter the randomly generated unique password as a password
    And I click "Login"
    Then I should be on the home page