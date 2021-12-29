Feature: Users can visualize the proposals, responses, and time commitments
    Scenario: View the calendar page
      Given I am logged into the application
      And I click the Calendar button on the navbar
      Then I should view the Calendar

    Scenario: Visualize event details from the calendar page
       Given I am on the calendar
       And I click on an event box
       Then I should see the event details

    Scenario: Visualize events across a month
       Given I am on the calendar
       And I click on the month button
       Then I should visualize events across the month

    Scenario: Visualize events in a list format
       Given I am on the calendar
       And I click on the list button
       Then I should visualize events in one list

