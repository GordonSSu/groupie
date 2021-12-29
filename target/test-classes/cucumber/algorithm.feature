Feature: Choose Events optimally, based first on total excitement, then on the number of availbale users
  Scenario: Events are tied, so choose one arbitrarily
    Given I am on the PGD creation page
    When I create a PGD
    And I add events 1 and 2 to the PGD
    And I invite users 1 and 2
    And users 1 and 2 are both available for both events
    And user 1 assigns excitement 3 to event 1 and excitement 5 to event 2
    And user 2 assigns excitement 5 to event 1 and excitement 3 to event 2
    Then I should see that the Groupie algorithm selected either event 1 or 2 as the optimal event

  Scenario: Event 1 has a higher total excitement, so it will be chosen
    Given I am on the PGD creation page
    When I create a PGD
    And I add events 1, 2, and 3 to the PGD
    And I invite users 1 and 2
    And users 1 and 2 are both available for both events
    And user 1 assigns excitement 5 to event 1, excitement 3 to event 2, and excitement 1 to event 3
    And user 2 assigns excitement 5 to event 1, excitement 3 to event 2, and excitement 1 to event 3
    Then I should see that the Groupie algorithm selected event 1 as the optimal event

  Scenario: The events have equal total excitement, but event 1 has more available users to attend, so it will be chosen
    Given I am on the PGD creation page
    When I create a PGD
    And I add events 1 and 2 to the PGD
    And I invite users 1 and 2
    And users 1 is available for both events
    And user 2 is only available for event 1
    And user 1 assigns excitement 2 to event 1, excitement 5 to event 2
    And user 2 assigns excitement 3 to event 1
    Then I should see that the Groupie algorithm selected event 1 as the optimal event