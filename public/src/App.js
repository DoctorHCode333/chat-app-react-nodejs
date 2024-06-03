import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import { createSignalProtocolManager, SignalServerStore } from "./signal/SignalGateway"
export default function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoggedIn: false,
  //     loggedInUserObj: {},
  //     dummySignalServer: new SignalServerStore(),
  //     signalProtocolManagerUser: undefined
  //   }
  //   this.setLoggedinUser = this.setLoggedinUser.bind(this)
  // }

  // setLoggedinUser(loggedInUserObj) {
  //   this.setState({ isLoggedIn: true, loggedInUserObj: { ...loggedInUserObj } }, () => {
  //     // Initializing signal server here
  //     createSignalProtocolManager(loggedInUserObj._id, loggedInUserObj.name, this.state.dummySignalServer)
  //       .then(signalProtocolManagerUser => {
  //         this.setState({ signalProtocolManagerUser: signalProtocolManagerUser })
  //       })
  //   })
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
