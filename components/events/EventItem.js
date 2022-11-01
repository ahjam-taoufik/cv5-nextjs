import Link from "next/link";
import Button from "../ui/Button";
import classes from "./event-item.module.css";
import Address from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import Right from "../icons/arrow-right-icon";
function EventItem({ featuredEvent }) {
  const date = featuredEvent.date;
  const readableDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = featuredEvent.location.replace(", ", "\n");
  const link = `/events/${featuredEvent.id}`;

  return (
    <li className={classes.item} key={featuredEvent.id}>
      <img src={featuredEvent.image} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{featuredEvent.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <Address />
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={link}>Explore Event</Link> */}
          <Button link={link}>
            Explore Event
            <span className={classes.icon}>
              <Right />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
