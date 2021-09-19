import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from 'react-redux';
import {NotificationContainer} from 'react-notifications';
import { dataService } from '../../components/dataServices';
import Proptype from 'prop-types';

import { logoutUser } from '../../actions/authAction';


class Header extends Component {

    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps.msg.success){
        dataService.showNotification(nextProps.msg.msg.type, nextProps.msg.msg.content);
      }
    }
    

    state = {
      collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    closeCollapse = collapseID => () => {
        window.scrollTo(0, 0);
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    };

    
    handleLogoutClick() {
        this.props.logoutUser();
    }

    
    render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    const { isAuthenticated, user } = this.props.auth;

    const { msg } = this.props.msg;

    const authLinks = (
        <MDBNavItem>
            <MDBNavLink
                onClick={this.handleLogoutClick}
                to="/register"
            >
                <strong>Logout</strong>
            </MDBNavLink>
        </MDBNavItem>
      );
      const guestLinks = (
        <>
            <MDBNavItem>
                <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/register"
                >
                    <strong>Register</strong>
                </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
                <MDBNavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/login"
                >
                    <strong>Sign in</strong>
                </MDBNavLink>
            </MDBNavItem>
        </>
      );

    return (
     
        <>
        <NotificationContainer/>
            <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
              <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
                <strong className="align-middle">MDB React</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("mainNavbarCollapse")}
              />
              <MDBCollapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink
                      exact
                      to="/"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/css"
                    >
                      <strong>CSS</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/components"
                    >
                      <strong>Components</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/advanced"
                    >
                      <strong>Advanced</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/navigation"
                    >
                      <strong>Navigation</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/forms"
                    >
                      <strong>Forms</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/tables"
                    >
                      <strong>Tables</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/modals"
                    >
                      <strong>Modals</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/addons"
                    >
                      <strong>Addons</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  {/* PRO-START */}
                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/sections"
                    >
                      <strong>Sections</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  {/* PRO-END */}

                                    <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/home"
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/team"
                    >
                      <strong>Team</strong>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/portfolio"
                    >
                      <strong>Portfolio</strong>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      onClick = {this.closeCollapse("mainNavbarCollapse")}
                      to = "/adminPortfolio"
                    >
                      <strong>adminPortfolio</strong>
                    </MDBNavLink>
                  </MDBNavItem>
                  
                  <MDBNavItem>
                    <MDBNavLink
                      onClick = {this.closeCollapse("mainNavbarCollapse")}
                      to = "/adminLanguage"
                    >
                      <strong>adminLanguage</strong>
                    </MDBNavLink>
                  </MDBNavItem>

                  
                  {isAuthenticated ? authLinks : guestLinks}

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {collapseID && overlay}
            
         </>
  
    );
  }
}

Header.propTypes= {
    logoutUser : Proptype.func.isRequired,
    auth: Proptype.object.isRequired,
    msg: Proptype.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    msg: state.msg
})

export default connect(mapStateToProps, {logoutUser}) (Header);
