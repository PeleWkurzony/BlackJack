import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from "./NavMenu/NavMenu";
import { store } from "./Context/Store";
import { Provider } from "react-redux";

/**
 * Represents the layout component of the application.
 */
export class Layout extends Component {
    /**
     * The display name of the Layout component.
     */
    static displayName = Layout.name;

    /**
     * Renders the layout component.
     * @returns {JSX.Element} The JSX element representing the Layout component.
     */
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

