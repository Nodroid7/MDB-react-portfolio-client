import React from "react";
import { withRouter } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./Register.css";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authAction';
import { handleChange } from '../../helper/utils';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    }

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  componentDidMount() {
    document.querySelector("nav").style.height="65px";
  }
  componentWillUnmount() {
    document.querySelector("nav").style.height="auto";
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      // this.setState({errors: nextProps.errors});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    const { errors } = this.props;
    
    
    return (
      <div id="classicformpage">
       
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />
                        <form className="needs-validation was-validated" onSubmit={this.handleSubmit} noValidate>
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                          name = "name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          required
                        />
                         {errors && <div className="invalid-feedback">{errors.name}</div>}
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          name = "email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                        {errors && <div className="invalid-feedback">{errors.email}</div>}
                        {errors && <div className="invalid-feedback">{errors.error}</div>}
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          name = "password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          required
                        />
                        {errors && <div className="invalid-feedback">{errors.password}</div>}
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Confirm Password"
                          icon="lock"
                          type="password"
                          name = "password2"
                          value={this.state.password2}
                          onChange={this.handleChange}
                          required
                        />
                        {errors && <div className="invalid-feedback">{errors.password2}</div>}
                        <div className="text-center mt-4 black-text">
                          <MDBBtn type="submit" color="indigo">Sign Up</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

   
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
