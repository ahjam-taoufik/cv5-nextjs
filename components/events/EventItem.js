import Link from "next/link";

function EventItem({ featuredEvent }) {
  const date=featuredEvent.date
  const readableDate=new Date(date).toLocaleDateString('fr-FR',{
     day:'numeric',
     month:'long',
     year:'numeric'
  });

  const formatAddress=featuredEvent.location.replace(', ','\n')
  const link=`/events/${featuredEvent.id}`

  return (
    <li key={featuredEvent.id}>
      <h1>{featuredEvent.title}</h1>
      <img src={featuredEvent.image} />
      <p>{featuredEvent.description}</p>
      <time>{readableDate}</time>
      <address>{formatAddress}</address>
      <Link href={link}>Explore Event</Link>
    </li>
  );
}

export default EventItem;
