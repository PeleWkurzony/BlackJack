import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from "./NavMenu/NavMenu";
import { store } from "./Context/Store";
import { Provider } from "react-redux";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
          <Provider store={store}>
              <NavMenu />
              <Container tag="main">
                  {this.props.children}
              </Container>
          </Provider>
  </div>
    );
  }
}
