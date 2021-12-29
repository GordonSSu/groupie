Feature: Testing the Logout feature
  Scenario: Logout from the home page
    Given I am on the home page
    When I click the Logout button
    Then I should see the login page


