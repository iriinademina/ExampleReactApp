import React from "react";
import "./Ticket.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

export default props => (
  <Card className="Ticket-container">
    <div className="Ticket-price">
      <CardMedia image={props.carrier} title="Carrier" />
      <CardActions className="Ticket-price-buy">
        <Button
          className="Ticket-price-buy-button"
          variant="contained"
          color="secondary"
          size="large"
          onClick={props.onClick}
        >
          Купить за {props.price}
        </Button>
      </CardActions>
    </div>
    <CardContent className="Card-details">
      <div className="Ticket-details-departure">
        <Typography gutterBottom variant="h3" component="h2">
          {props.departureTime}
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          {props.origin}, {props.originName}
        </Typography>
        <Typography gutterBottom subtitle1="h6" color="textSecondary">
          {props.departureDate}
        </Typography>
      </div>
      <div className="Ticket-details-stops">
        <Typography gutterBottom variant="h6" component="h2" color="textSecondary">
          {props.stops} пересадка(ок)
        </Typography>
        <hr></hr>
      </div>
      <div className="Ticket-details-arrival">
        <Typography gutterBottom variant="h3" component="h2">
          {props.arrivalTime}
        </Typography>
        <Typography gutterBottom variant="h6" component="h5">
          {props.destination}, {props.destinationName}
        </Typography>
        <Typography gutterBottom subtitle1="h6" color="textSecondary">
          {props.arrivalDate}
        </Typography>
      </div>
    </CardContent>
  </Card>
);
