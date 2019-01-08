import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { redirectTo } from '../actions/common';
import { logout } from '../actions/auth';

class Header extends Component {
    logout() {
        this.props.logout();
    }

    redirectToHome() {
        this.props.redirect('/');
    }

    render() {
        const { currentUser } = this.props;
        if (!currentUser) return (<div></div>);

        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand onClick={(e) => this.redirectToHome(e)}>AWS Analytics</NavbarBrand>
                <NavbarToggler />
                <Nav className="ml-auto" navbar>
                    {currentUser && (
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>{currentUser.username}</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={(e) => this.logout()}>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    )}
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ currentUser: auth.user });

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: (url) => dispatch(redirectTo(url)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);