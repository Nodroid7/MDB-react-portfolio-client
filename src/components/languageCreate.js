import React,  {Component} from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import {
MDBInput,
MDBBtn,
MDBIcon
} from 'mdbreact';
import { handleChange } from '../helper/utils';
import { addLanguage } from '../actions/languageAction';


class languageCreate extends Component {

    constructor(props) {
        super(props);
       
          this.state = {
              _id: "",
              name: "",
          }
          this.handleChange = handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e) {
        const newLanguage = {
            name: this.state.name
        }
        console.log(newLanguage);
        // this.props.addLanguage(newLanguage);
      };

  render() {
    
    return (
      <>
            <form className="needs-validation was-validated" onSubmit={this.handleSubmit} noValidate >  
                <MDBInput 
                    labelClass="labelBg" 
                    background label="Language name" 
                    type="text" 
                    name = "name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                />
                {errors && <div className="invalid-feedback">{errors.name}</div>}
                <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn outline color="info" type="submit">
                        Add <MDBIcon icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                </div>
            </form>
      </>

    );
  }
}

languageCreate.propTypes = {
    addLanguage : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps, { addLanguage })(withRouter(languageCreate));
