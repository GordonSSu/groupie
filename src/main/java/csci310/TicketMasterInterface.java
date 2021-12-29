package csci310;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class TicketMasterInterface {

    // TODO: MOVE THE API_KEY TO A SAFER LOCATION/STORAGE METHOD
    private static final String URL = "https://app.ticketmaster.com/discovery/v2/events.json?";
    private static final String DEFAULT_PARAMETER = ""; // no restriction
    private static final String API_KEY = "eEcUzdCicbCGDqE9YDZHINMVzuVVlBJO";
    // in case we want an external API call
    public StringBuilder EXTERNAL_API_CALL;
    public int rc = 200;

    /*
        @param keyword      keyword for searching ticketmaster events
        @param genre        genre for searching ticketmaster events
        @param city         city for searching ticketmaster events
     */
    public JSONArray searchEvents(String keyword, String genre, String city)  {
        // default to searching with no restrictions if no keyword
        if (keyword == null) {
            keyword = DEFAULT_PARAMETER;
        }

        if (genre == null) {
            genre = DEFAULT_PARAMETER;
        }

        if (city == null) {
            city = DEFAULT_PARAMETER;
        }

        //check whether we can encode the parameters
        try {
            keyword = java.net.URLEncoder.encode(keyword, "UTF-8");
            genre = java.net.URLEncoder.encode(genre, "UTF-8");
            city = java.net.URLEncoder.encode(city, "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
        }

        String api_query = String.format("apikey=%s&keyword=%s&classificationName=%s&city%s",
                API_KEY, keyword, genre, city);

        StringBuilder APICall = new StringBuilder(URL);
        APICall.append(api_query);

        if (EXTERNAL_API_CALL != null) {
            APICall = EXTERNAL_API_CALL;
        }

        try {
            URL ticketmaster_url = new URL(APICall.toString());
            HttpURLConnection conn = (HttpURLConnection) ticketmaster_url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            int response_code = conn.getResponseCode();
            if (rc == 400) {
                response_code = rc;
            }
            if (response_code != 200) {
                throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
            } else {
                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputline;
                StringBuilder response = new StringBuilder();
                while ((inputline = in.readLine()) != null) {
                    response.append(inputline);
                }
                in.close();
                conn.disconnect();
                String response_str = response.toString();
                JSONParser parser = new JSONParser();
                JSONObject json = (JSONObject) parser.parse(response_str);
                JSONObject events_embedded = (JSONObject) json.get("_embedded");
                JSONArray events = (JSONArray) events_embedded.get("events");
                return events;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}







