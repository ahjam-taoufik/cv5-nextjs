import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const featuredEvents = getAllEvents();
  const route = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    route.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearchEvent={findEventHandler} />
      <EventList featuredEvents={featuredEvents} />
    </>
  );
}

export default AllEventsPage;
