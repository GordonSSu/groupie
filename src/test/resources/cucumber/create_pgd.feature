Feature: Allowing users to create a pgd
  Scenario: View potential events for pgd
    Given I am on the create pgd page
    And I enter a PGD title
    And I enter a PGD location
    And I select the genre for example 'Music'
    And I enter keywords for example 'Taylor Swift'
    And I select a start date
    And I select an end date
    And I click Find Events
    Then I will see a list of relevant events

  Scenario: Add events and invited users to a pgd
    Given I am on the ticketmaster events page
    And I select PGD events and invited users
    And I click 'continue to submit'
    Then I will see the events and invitees added to the current pgd

  Scenario: See a confirmation page of pgd details before submitting pgd
     Given I am on the selected pgd page
     And I have selected the invited users and events and heuristics
     And I click 'Send Proposal'
     Then I see a confirmation page of these pgd details

  Scenario: Submit a pgd
    Given I am on the pgd confirmation page
    And I have selected availability and excitement levels
    And I click 'Submit'
    Then I have submitted a pgd