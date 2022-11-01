import EventItem from "./EventItem";

function EventList({featuredEvents}) {
  return (
    <ul>
      {featuredEvents.map((featuredEvent) => {
        return <EventItem key={featuredEvent.id} featuredEvent={featuredEvent}  />
        
      })}
    </ul>
  );
}

export default EventList;
