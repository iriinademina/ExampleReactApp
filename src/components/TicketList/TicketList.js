import React, { Component } from "react";
import "./TicketList.css";
import Ticket from "../Ticket/Ticket";
import EmptyTicket from "../Ticket/EmptyTicket";
import moment from "moment";
import { connect } from "react-redux";
import { fetchTickets, filterTransfersAction } from "../../store/actions/ticket";
import { openModalForm ,closeModalForm, openSuccessModal, closeSuccessModal } from "../../store/actions/modal";
import { CircularProgress } from "@material-ui/core";
import FormModal from "../../shared/Modal/ModalForm";
import _ from "lodash";
import SuccessModal from "../../shared/Modal/ModalSuccess";
import SU from "../../shared/images/airline_2.jpg";
import TK from "../../shared/images/airline_1.jpg";
import BA from "../../shared/images/airline_3.jpg";
import S7 from "../../shared/images/S7.svg";


const dataTickets = {
  carrierImg: { SU, TK, BA, S7 },
  currencyIcon: { EUR: "€", USD: "$", RUB: "₽" }
};

const selectCheckboxes = (values) => {
  return Object.keys(values).filter(item => values[item] && item !=='all')
}


class TicketList extends Component {
  // COMMENT: постарайся хранить данные в одном месте, если есть redux то лучше в нем
  // +++ move to redux modal
  
  close = () => this.props.closeModalForm();
  open = () => this.props.openModalForm();
  success = () => this.props.openSuccessModal();
  closeSuccess = () => this.props.closeSuccessModal()

  getCount = (charCode, price) => {
    const currentcharCode = this.props.currency.filter(
      item => item.charCode === charCode
    );
    const count = price / currentcharCode[0].value;
    return `${count.toFixed()} ${
      dataTickets.currencyIcon[currentcharCode[0].charCode]
    }`;
  }

  renderPrice = price => {
    return this.props.activeCurrency.valute === "" || this.props.activeCurrency.valute === "RUB"
              ? `${price} ${dataTickets.currencyIcon.RUB}`
              : this.getCount(this.props.activeCurrency.valute, price)
   }
  
  renderTickets = (tickets) => {

    return tickets.length ? tickets.map((ticket, index) => {
      const {
        price,
        departure_time: departureTime,
        origin,
        origin_name: originName,
        departure_date: departureDate,
        stops,
        arrival_time: arrivalTime,
        destination,
        destination_name: destinationName,
        arrival_date: arrivalDate
      } = ticket;

      return (
        <Ticket
          key={index.toString()}
          // COMMENT: вынеси в отдельную переменную перед render        +++ отдельный метод
          price={this.renderPrice(price)}
          departureTime={departureTime}
          origin={origin}
          originName={originName}
          departureDate={moment(departureDate, "DD-MM-YYYY").format(
            "D MMMM YYYY"
          )}
          stops={stops}
          arrivalTime={arrivalTime}
          destination={destination}
          destinationName={destinationName}
          arrivalDate={moment(arrivalDate, "DD-MM-YYYY").format("D MMMM YYYY")}
          onClick={this.open}
          carrier={`${dataTickets.carrierImg[ticket.carrier]}`}
        />
      );
    }) : <EmptyTicket />
  }

  renderModalForm = () => {
    return (
        <FormModal
          onClose={this.close}
          onOpen={this.open}
          onSuccess={this.success}
        />
    );
  };

  renderSuccessModal = () => {
    return (
        <SuccessModal onClose={this.closeSuccess} />
    );
  };

  componentDidMount() {
    this.props.fetchTickets();
  }

  componentDidUpdate(prevProps, prevState) {
    const { tickets, values, filterTransfersAction} = this.props;
    if (!_.isEqual(prevProps.values, values)) {
      const checkboxes = selectCheckboxes(values)
      const res = tickets.filter(item =>
        checkboxes.includes(item.stops.toString())
      );
      filterTransfersAction(res)
  }
}

  render() {

    const { open, isSuccess,  } = this.props.modal
    return (
      <div className="TicketList">
        { this.props.loading ? (
          <CircularProgress color="secondary" />
        ) : (
          this.renderTickets(this.props.filterTickets)
        )}
         {open && this.renderModalForm()}
         {isSuccess && this.renderSuccessModal()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
  values: state.ticket.values,
  loading: state.ticket.loading,
  currency: state.currency.currencies,
  activeCurrency: state.currency.activeCurrency,
  filterTickets: state.ticket.filterTickets,
  modal: state.modalWindow
});

const mapDispatchToProps = {
  fetchTickets,
  openModalForm,
  closeModalForm,
  openSuccessModal,
  closeSuccessModal,
  filterTransfersAction 
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
