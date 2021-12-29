package csci310;

import junit.framework.TestCase;
import org.json.simple.JSONArray;

import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;

public class TicketMasterInterfaceTest extends TestCase {

    @BeforeClass
    public void setUp() throws Exception {
        super.setUp();
    }

    @Test
    public void testSearchEvents() {
        TicketMasterInterface tm = new TicketMasterInterface();

        // our basic test to see if events are even being received
        JSONArray events = tm.searchEvents("concert", "music", "Los Angeles");
        int num_events = events.size();
        assertTrue(num_events>0);

        // test for null inputs in any field
        JSONArray events2 = tm.searchEvents(null, null, null);
        int num_events2 = events2.size();
        assertTrue((num_events2>0));

        // test for bad api call #1
        TicketMasterInterface tm2 = new TicketMasterInterface();
        StringBuilder sb = new StringBuilder("not a URL");
        tm2.EXTERNAL_API_CALL = sb;
        JSONArray events3 = tm2.searchEvents(null, null, null);
        assertEquals(events3, null);

        // test for bad api call #2
        TicketMasterInterface tm3 = new TicketMasterInterface();
        tm3.rc = 400;
        JSONArray events4 = tm3.searchEvents(null, null, null);
        assertEquals(events4, null);
    }
}
