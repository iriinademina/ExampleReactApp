import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { setCheckboxValueAction } from "../../store/actions/ticket";
import _ from "lodash";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./Filter.css";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const checkboxes = [
  { name: "all", text: "Все" },
  { name: "0", text: "Без пересадок" },
  { name: "1", text: "1 пересадка" },
  { name: "2", text: "2 пересадки" },
  { name: "3", text: "3 пересадки" },
];

class Filter extends Component {
  // COMMENT: постарайся хранить данные в одном месте, если есть redux то лучше в нем
 
  // COMMENT: вынеси в редьюсер
  handleChange = event => {
    const { name, value, checked } = event.target;
    const { setCheckboxValueAction } = this.props
    setCheckboxValueAction ({name,checked})
  };

  render() {
    const { values } = this.props
    return (
      <CardActions>
        <FormControl component="fieldset">
          <FormLabel color="secondary">
            <Typography variant="subtitle1" component="h2">
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </Typography>
          </FormLabel>
          {checkboxes.map((item, index) => {
            const { name, text } = item;
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={values[name]}
                    value={name}
                    onChange={this.handleChange}
                    name={name}
                  />
                }
                label={text}
              ></FormControlLabel>
            );
          })}
        </FormControl>
      </CardActions>
    );
  }
}

const mapStateToProps = state => ({
  filterTickets: state.ticket.filterTickets,
  tickets: state.ticket.tickets,
  values: state.ticket.values
});

const mapDispatchToProps = {
  setCheckboxValueAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
