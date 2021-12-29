Feature: Testing privacy of interface
  Scenario: Block a user
    Given I am on the privacy page
    When I enter 'blocked' into the username field
    And I click 'add to blocked user list'
    Then I should see 'blocked' in the 'blocked user list'

  Scenario: Unblock a user
    Given I am on the privacy page
    When I enter 'blocked' into the username field
    And I click 'add to blocked user list'
    When I click 'Delete' next to 'blocked'
    Then I should not see 'blocked' in the 'blocked user list'
