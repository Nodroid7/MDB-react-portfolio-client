import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import TreeView from '../components/treeView';
import FileExists from 'file-exists';
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
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBIcon
} from 'mdbreact';
import { deletePhoto, viewProject } from '../actions/portfolioAction';

class portfolioFieldEdit  extends Component{

    componentWillReceiveProps(nextProps){
        // const {isPhotoDelete} = nextProps.portfolio;
        // if(isPhotoDelete)
            // this.props.viewProject();
    }

    render(){
        
    let {_id,lang,name,price,photos,parentName,modalEdit,checkLanguage,description,detail,toggle,fileInputHandler,handleEdit,errors,onChange,handleDeletePhoto} = this.props;

     return (
     
        <MDBModal
            isOpen={modalEdit}
            toggle={toggle('Edit')}
            size="lg"
        >
            <MDBModalHeader toggle={toggle('Edit')}>Edit Project</MDBModalHeader>
            <form className="needs-validation was-validated" onSubmit={handleEdit} noValidate  encType="multipart/form-data">
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
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    {photos.map((photo, index) => (
                        <MDBCol  className="d-flex justify-content-center " id = {photo}>
                            <MDBCard style={{ width: "10rem", marginBottom: '3rem' }}>
                                    <MDBCardImage
                                        className="img-fluid"
                                        src={require(`../image/${photo}`)}
                                        waves
                                        top
                                        hover
                                        overlay="white-slight"
                                    />
                                    <MDBBtn
                                        floating
                                        tag="a"
                                        className="ml-auto mr-1 lighten-10 mdb-coalor"
                                        action
                                        size="sm"
                                        color="red"
                                        onClick = {handleDeletePhoto(photo)}
                                        >
                                        <MDBIcon icon="trash-alt" /> 
                                    </MDBBtn>
                            </MDBCard>
                            
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggle('Edit')}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" type="submit" >Submit</MDBBtn>
            </MDBModalFooter>
            </form>
          </MDBModal>
       
      );
     }
};

portfolioFieldEdit.protoTypes = {
  _id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  parent : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  detail : PropTypes.string.isRequired,
  photos : PropTypes.array.isRequired,
  fileInputHandler : PropTypes.func.isRequired,
  errors : PropTypes.object.isRequired,
  onChange : PropTypes.func.isRequired,
  toggle : PropTypes.func.isRequired,
  checkLanguage : PropTypes.func.isRequired,
  handleEdit : PropTypes.func.isRequired,
  lang : PropTypes.object.isRequired, 
  parentName : PropTypes.string.isRequired, 
  modalEdit: PropTypes.bool.isRequired,
  deletePhoto : PropTypes.func.isRequired,
  viewProject : PropTypes.func.isRequired,
  handleDeletePhoto : PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio
});
  

export default connect(mapStateToProps, {deletePhoto, viewProject})(withRouter(portfolioFieldEdit));