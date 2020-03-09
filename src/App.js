import React from "react";
import TicketList from "./components/TicketList/TicketList";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./hoc/Layout/Layout";

const App = props => (
  <Layout>
      <Sidebar />
      <TicketList />
  </Layout>
);
export default App;
