import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { addProject, deleteProject, viewProject, viewCancelProject, editProject } from '../../actions/portfolioAction';
import { handleChange } from '../../helper/utils';
import PortfolioFieldCreat from '../../components/portfolioFieldCreat';
import PortfolioFieldEdit from '../../components/portfolioFieldEdit';
import PortfolioFieldList from '../../components/portfolioFieldList';
import { currentLanguage } from '../../actions/languageAction';
import PortfolioDetail from '../../components/PortfolioDetail';

class adminPortfolio extends Component {
  
  constructor(props) {
      super(props);
   
      this.state = {
          _id: "",
          name: "",
          price: "",
          description: "",
          detail: "",
          parent: "",
          parentName: "",
          photos: [],
          editPhotos: [],
          deletePhotos: [],

          modalCreate: false,
          modalDetail: false,
          modalEdit: false,
      }
      this.handleChange = handleChange.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.checkLanguage = this.checkLanguage.bind(this);
      this.handleViewDetail = this.handleViewDetail.bind(this);
      this.handleDeletePhoto = this.handleDeletePhoto.bind(this);
      this.handleViewEdit = this.handleViewEdit.bind(this);
      
    }


  componentDidMount(){
    this.props.currentLanguage();
  }

  componentWillReceiveProps(nextProps) {
    let {project} = nextProps.portfolio;
    // create Success
    if(nextProps.portfolio.success){
      this.setState({
        ['modalCreate']: false,
        ['modalEdit']: false
      });
    }
    if(Object.keys(project).length > 0){
      this.state._id = project.project._id;
      this.state.name = project.project.name;
      this.state.detail = project.project.detail;
      this.state.description = project.project.description;
      this.state.price = project.project.price;
      this.state.parent = project.project.language._id;
      this.state.parentName = project.project.language.name;
      this.state.editPhotos = project.project.photos;
    }
  }
  
  checkLanguage = (id, name) => () => {
    this.setState({ ['parent'] : id });
    this.setState({ ['parentName'] : name });
  } 

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
    if(nr === 'Detail')
      this.props.viewCancelProject();
  };


  fileInputHandler = files => {
    this.setState({
        ['photos'] : files
    });
  };

  handleCreate(e) {
    e.preventDefault();

    const newProject = {
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        detail: this.state.detail,
        parent: this.state.parent,
        photos: this.state.photos
    }
    let formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('price', this.state.price);
    formData.append('description', this.state.description);
    formData.append('detail', this.state.detail);
    formData.append('parent', this.state.parent);

    for(let idx in this.state.photos){
      let photo = this.state.photos[idx];
      formData.append('photos', photo);
    }
    this.props.addProject(formData);
  };

  handleEdit(e) {
    e.preventDefault();

    const newProject = {
        _id: this.state._id,
        name: this.state.name,
        price: this.state.price,
        description: this.state.description,
        detail: this.state.detail,
        parent: this.state.parent,
        photos: this.state.photos,
        deletePhotos: this.state.deletePhotos,
    }
    let formData = new FormData();
    formData.append('_id', this.state._id);
    formData.append('name', this.state.name);
    formData.append('price', this.state.price);
    formData.append('description', this.state.description);
    formData.append('detail', this.state.detail);
    formData.append('parent', this.state.parent);
    formData.append('deletePhotos', this.state.deletePhotos);

    for(let idx in this.state.photos){
      let photo = this.state.photos[idx];
      formData.append('photos', photo);
    }
    this.props.editProject(formData);
  };  

  handleDelete = id => () => {
    this.props.deleteProject(id);
  }

  handleViewEdit = id => () => {
    this.props.viewProject(id);
    this.setState({
      ['modalEdit']: true,
      ['deletePhotos']: []
    });
  }

  handleViewDetail = id => () => {
    this.props.viewProject(id);
    this.setState({
      ['modalDetail']: true
    });
    
  }

  handleDeletePhoto = (photo) => () => {
    let deletePhoto = this.state.deletePhotos;
    deletePhoto.push(photo);
    let editPhoto = [];
    for(let i = 0 ; i < this.state.editPhotos.length; i ++){
      if(this.state.editPhotos[i] !== photo){
        editPhoto.push(this.state.editPhotos[i]);
      }
    }
    this.setState({
      ['deletePhotos']: deletePhoto,
      ['editPhotos']: editPhoto
    });
  }
  render() {

    const { errors , lang } = this.props;
    return (
      
      <MDBContainer>
          <MDBBtn color="primary" onClick={this.toggle('Create')}>
            Create Project
          </MDBBtn>
          <PortfolioFieldCreat
            name = {this.state.name}
            price = {this.state.price}
            parentName = {this.state.parentName}
            description = {this.state.description}
            detail = {this.state.detail}
            fileInputHandler = {this.fileInputHandler}
            errors = {errors}
            onChange = {this.handleChange}
            lang = {lang}
            checkLanguage = {this.checkLanguage}
            toggle = {this.toggle}
            handleCreate = {this.handleCreate}
            modalCreate = {this.state.modalCreate}
          />

          <PortfolioFieldList
            handleViewDetail = {this.handleViewDetail}
            handleEdit = {this.handleViewEdit}
            handleDelete = {this.handleDelete}
          />
          <PortfolioDetail
            modalOpenState = {this.state.modalDetail}
            toggle = {this.toggle}
          />
          <PortfolioFieldEdit
                _id = {this.state._id}
                name = {this.state.name}
                price = {this.state.price}
                parentName = {this.state.parentName}
                description = {this.state.description}
                detail = {this.state.detail}
                photos = {this.state.editPhotos}
                fileInputHandler = {this.fileInputHandler}
                errors = {errors}
                onChange = {this.handleChange}
                lang = {lang}
                checkLanguage = {this.checkLanguage}
                toggle = {this.toggle}
                handleEdit = {this.handleEdit}
                modalEdit = {this.state.modalEdit}
                handleDeletePhoto = {this.handleDeletePhoto}
              />
      </MDBContainer>
    );
  }
}

adminPortfolio.propTypes = {
    addProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    viewProject: PropTypes.func.isRequired,
    editProject: PropTypes.func.isRequired,
    currentLanguage: PropTypes.func.isRequired,
    portfolio: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
    lang:PropTypes.object.isRequired,
    viewCancelProject : PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
    errors: state.errors,
    lang: state.lang,
    msg: state.msg,
});


export default connect(mapStateToProps, {viewCancelProject, addProject, deleteProject, viewProject, editProject, currentLanguage })(withRouter(adminPortfolio));
