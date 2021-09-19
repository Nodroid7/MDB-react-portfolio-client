import React, { Component } from "react";
import PropTypes from 'prop-types';
import TreeView from '../components/treeView';
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBFileInput,
  MDBBadge,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBBtn,
  MDBModalFooter,
} from 'mdbreact';

class portfolioField  extends Component{

    render(){
        
    let {lang,name,price,parentName,modalCreate,checkLanguage,description,detail,toggle,fileInputHandler,handleCreate,errors,onChange} = this.props;

     return (
     
        <MDBModal
            isOpen={modalCreate}
            toggle={toggle('Create')}
            size="lg"
        >
            <MDBModalHeader toggle={toggle('Create')}>Create Project</MDBModalHeader>
            <form className="needs-validation was-validated" onSubmit={handleCreate} noValidate  encType="multipart/form-data">
            <MDBModalBody>
                <MDBRow  className="d-flex justify-content-center ">
                    <MDBCol md = '4'>
                        <h2>
                            <MDBBadge>{parentName}</MDBBadge>
                        </h2>
                        <TreeView
                            lang = {lang}
                            checkLanguage = {checkLanguage}
                        />
                        {errors && <div className="invalid-feedback">{errors.parent}</div>}
                    </MDBCol>
                    <MDBCol md = '8'>
                        <MDBRow>
                            <MDBCol md = '8'>
                                <MDBInput 
                                    labelClass="labelBg" 
                                    background label="Project name" 
                                    type="text" 
                                    name = "name" 
                                    value={name}
                                    onChange={onChange}
                                    required
                                />
                                {errors && <div className="invalid-feedback">{errors.name}</div>}
                            </MDBCol>
                            <MDBCol md = '4'>
                                <MDBInput 
                                    labelClass="labelBg" 
                                    background label="$" 
                                    type="number" 
                                    name = "price" 
                                    value={price}
                                    onChange={onChange}
                                    required
                                />
                                {errors && <div className="invalid-feedback">{errors.price}</div>}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput
                                    labelClass="labelBg"
                                    background
                                    onChange={onChange}
                                    value = {description}
                                    type="textarea"
                                    label="description"
                                    name = "description"
                                    rows="4"
                                />
                                {errors && <div className="invalid-feedback">{errors.description}</div>}
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput
                                    labelClass="labelBg"
                                    background
                                    onChange={onChange}
                                    value = {detail}
                                    type="textarea"
                                    name = "detail"
                                    label="detail"
                                    rows="4"
                                />
                                {errors && <div className="invalid-feedback">{errors.detail}</div>}
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow>
                    <MDBCol>
                        <MDBFileInput
                            getValue={fileInputHandler}
                            multiple
                            btnColor='info'
                            btn-size='sm'
                        />
                        {errors && <div className="invalid-feedback">{errors.photos}</div>}
                    </MDBCol>
                </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle('Create')}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" type="submit" >Submit</MDBBtn>
            </MDBModalFooter>
            </form>
          </MDBModal>
       
      );
     }
};

portfolioField.protoTypes = {
  _id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  parent : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  detail : PropTypes.string.isRequired,
  fileInputHandler : PropTypes.func.isRequired,
  errors : PropTypes.object.isRequired,
  onChange : PropTypes.func.isRequired,
  toggle : PropTypes.func.isRequired,
  checkLanguage : PropTypes.func.isRequired,
  handleCreate : PropTypes.func.isRequired,
  lang : PropTypes.object.isRequired, 
  parentName : PropTypes.string.isRequired, 
  modalCreate: PropTypes.bool.isRequired,
}

export default portfolioField;