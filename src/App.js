import React from "react";
import { Container } from "react-bootstrap";

import Menu from "./components/Menu.js";
import Modal from "./components/Modal.js";
import FormAddTweet from "./components/FormAddTweet.js";
import TweetsList from "./components/TweetsList.js";

//Redux
import store from "./store.js";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
        <TweetsList />
      </Container>
      <Modal>
        <FormAddTweet />
      </Modal>
    </Provider>
  );
}
