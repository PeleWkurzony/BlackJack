import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from "./NavMenu/NavMenu";
import { profile } from "./Context/ProfileStore";
import { Provider } from "react-redux";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
          <Provider store={profile}>
              <NavMenu />
              <Container tag="main">
                  {this.props.children}
              </Container>
          </Provider>
  </div>
    );
  }
}
