Feature: Testing the login feature
  Scenario: Using an incorrect password
    Given I am on the login page
    When I enter "testrr" as a username
    And I enter "123" as a password
    And I click "Login"
    Then I should see "Invalid Email/Password"

  Scenario: Signing up to the page
    Given I am on the login page
    When I click 'Sign Up'
    And I enter 'test1' as new username
    And I enter 'password1' as new password
    And I enter 'password1' as new confirmed password
    And I click  'Create User'
    Then I should reach the homepage and calendar

  Scenario: Choosing to cancel the sign up
     Given I am on the login page
     When I click the Sign Up button
     And I click 'Cancel'
     Then I should return to the login page