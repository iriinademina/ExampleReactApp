import React from "react";
import "./Ticket.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


export default props => (
  <Card className="Ticket-container">
    <CardContent>
        <Typography gutterBottom variant="h4" component="h2" color="textSecondary">
            По вашему запросу билетов не найдено
        </Typography>
    </CardContent>
  </Card>
);
