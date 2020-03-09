import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./Currency.css";
import { connect } from "react-redux";
import { fetchCurrentCourse } from "../../store/actions/currency";
import { finishCourse } from "../../store/actions/currency";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Currency extends Component {
  // COMMENT: постарайся хранить данные в одном месте, если есть redux то лучше в нем +++ move to redux
  
  componentDidMount() {
    this.props.fetchCurrentCourse();
  }

  changeColor(index) {
    this.setState({ activeButton: index });
  }

  clicked = event => {
    const activeIndex = Number(event.currentTarget.id)
    this.changeColor(activeIndex);
    this.props.finishCourse({ valute: event.target.textContent, activeButton :activeIndex});
  };

  render() {
    const textButton = ["RUB", "USD", "EUR"];
    return (
      <div className="Currency">
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            color="textSecondary"
            gutterBottom
          >
            Валюта
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
          >
            {textButton.map((elem, index) => (
              <Button
                variant="contained"
                color={
                  this.props.activeButton === index ? "secondary" : "default"
                }
                key={index.toString()}
                value={elem}
                id={index}
                onClick={this.clicked}
                size="large"
              >
                {elem}
              </Button>
            ))}
          </ButtonGroup>
        </CardActions>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeButton: state.currency.activeCurrency.activeButton
});

// COMMENT: () => dispatch(fetchCurrentCourse()) это можно вынести отедльный файл actions +++ docum

const mapDispatchToProps = ({
  fetchCurrentCourse,
  finishCourse 
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);


