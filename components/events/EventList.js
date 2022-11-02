import EventItem from "./EventItem";
import classes from './event-list.module.css'

function EventList({featuredEvents}) {
  return (
    <ul className={classes.list}>
      {featuredEvents.map((featuredEvent) => {
        return <EventItem key={featuredEvent.id} image={featuredEvent.image} featuredEvent={featuredEvent}  />
        
      })}
    </ul>
  );
}

export default EventList;
