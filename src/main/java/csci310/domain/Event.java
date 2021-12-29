package csci310.domain;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table( name = "Events" )
public class Event {
    @Id
    @NotBlank
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    private String eventName;

    @NotBlank
    private String date;

    @NotBlank
    private String location;

    @NotBlank
    private String ticketmasterLink;

    @ManyToMany(mappedBy = "events")
    private List<PGD> pgdList;

    public Event() {
    }

    public Event(String eventName, String date, String location, String ticketmasterLink) {
        this.eventName = eventName;
        this.date = date;
        this.location = location;
        this.ticketmasterLink = ticketmasterLink;
    }

    public long getId() {
        return id;
    }

    public void setId(long event_id) {
        this.id = event_id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTicketmasterLink() {
        return ticketmasterLink;
    }

    public void setTicketmasterLink(String ticketmasterLink) {
        this.ticketmasterLink = ticketmasterLink;
    }
}
