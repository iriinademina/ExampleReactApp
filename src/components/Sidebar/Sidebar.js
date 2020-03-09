import React from "react";
import Card from "@material-ui/core/Card";
import Currency from '../Currency/Currency'
import Filter from '../Filter/Filter'
import './Sidebar.css'

 
const Sidebar = props => (
  <Card className="Sidebar" >
      <Currency />
      <Filter />
  </Card>
);

export default Sidebar