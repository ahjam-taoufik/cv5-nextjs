import { useRouter } from "next/router"
import EventSearch from "../../components/events/event-search"
import EventList from "../../components/events/EventList"
import {getFilteredEvents } from "../../dummy-data"

function FilteredEventsPage() {

  const route=useRouter()
  const filteredData=route.query.slug

  if (!filteredData) {
    return <p className="center">Loading . . .</p>
  }


  const year1=filteredData[0] 
  const month1=filteredData[1]

  const year=+year1
  const month=+month1


  if (isNaN(year) || isNaN(month)) {
    return <p className="center"> Invalid Filter . . .</p>
  }

  const filter=getFilteredEvents({
    year,
    month
  })

  if (!filter || filter.length===0) {
   return <p className="center">No events found for the chosen filter </p>
  }

    return (
      <div>
      {/* <EventSearch onSearchEvent={findEventHandler} /> */}
      <EventList featuredEvents={filter} />
      </div>
         
    )
  
}

export default FilteredEventsPage