import { useRouter } from 'next/router'
import React from 'react'
import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistic from '../../components/event-detail/event-logistics'


function EventDetailPage() {
  const route=useRouter()
  const id=route.query.eventId

  const event=getEventById(id)
 

  if (!event) {
    return <p>  Event not found</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic date={event.date}  address={event.location} image={event.image} imageAlt={event.title} />
    </>
  )
}

export default EventDetailPage