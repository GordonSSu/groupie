Feature: Allowing users to set their availability
  Scenario: Set or change start date availability
    Given I am on the availability page
    When I click my cursor on start date
    And I select a date from the dropdown menu
    Then I will be able to set my start date availability

  Scenario: Set or change end date availability
     Given I am on the availability page
     When I click my cursor on end date
     And I select a date from the dropdown menu
     Then I will be able to set my end date availability

  Scenario: Set the date range availability
    Given I am on the availability page
    And I have selected both start dates and end dates
    When I click on Submit
    Then I will have updated my availability