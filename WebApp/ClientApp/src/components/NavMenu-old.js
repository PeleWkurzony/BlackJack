import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * Represents the navigation menu component.
 */
export class NavMenuOld extends Component {
    /**
     * The display name of the NavMenuOld component.
     */
    static displayName = NavMenuOld.name;

    /**
     * Constructs a new instance of NavMenuOld.
     * @param {object} props - The properties passed to the component.
     */
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    /**
     * Toggles the navbar collapsed state.
     */
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    /**
     * Renders the navigation menu.
     * @returns {JSX.Element} The JSX element representing the NavMenuOld component.
     */
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">BlackJack</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
