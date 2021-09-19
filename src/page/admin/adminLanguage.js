import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBBadge
} from "mdbreact";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import SectionContainer from "../../components/sectionContainer";
import TreeView from '../../components/treeView';
import { handleChange } from '../../helper/utils';
import { addLanguage, currentLanguage, editLanguage, deleteLanguage } from '../../actions/languageAction';


class adminLanguage extends Component {
  constructor(props) {
      super(props);
     
        this.state = {
            _id: "-1",
            name: "",
            parent: "Root",
            editName:'Root',
            language: null,
            folderOpen: false
        }
        this.handleChange = handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.checkLanguage = this.checkLanguage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
  }


  componentDidMount() {
    this.props.currentLanguage();
  }

  componentWillReceiveProps(NextProp) {
    if(NextProp.lang.isRepeating) {
      console.log("isRepeating True");
      this.props.currentLanguage();
    }
  }

  handleSwitchChange = () => {
    console.log('switch');
    this.setState({
      folderOpen: !this.state.folderOpen
    });
  }

  checkLanguage = (id, name) => () => {
      this.setState({ _id: id});
      this.setState({ parent: name});
      this.setState({ editName: name});
  }

  handleCreate(e) {
    e.preventDefault();
    
    const newLanguage = {
        name: this.state.name,
        parent : this.state._id 
    }
    this.props.addLanguage(newLanguage);
  };

  handleEdit(e) {
    e.preventDefault();
    
    const editLanguage = {
        name: this.state.editName,
        id : this.state._id 
    }
    this.props.editLanguage(editLanguage);
  };

  handleDelete(e) {
    e.preventDefault();
    console.log(this.state._id);
    this.props.deleteLanguage(this.state._id);
    this.setState({_id: "-1"});
    this.setState({name: ""});
    this.setState({parent: "Root"});
    this.setState({editName:'Root'});
  }

  render() {
    const { errors, lang  } = this.props;

    return (
      <MDBContainer>
        <SectionContainer header="adminLanguage">
            <MDBRow> 
                <MDBCol md="4">
                  <TreeView
                    lang = {lang}
                    checkLanguage = {this.checkLanguage}
                  />
                </MDBCol>
                
                <MDBCol md = "8">
                  <h1>
                    <MDBBadge>{this.state.parent}</MDBBadge>
                    {errors && <div className="invalid-feedback">{errors.parent}</div>}
                  </h1>
                  <MDBRow> 
                    <MDBCol md = "6">
                      <form className="needs-validation was-validated" onSubmit={this.handleCreate} noValidate >  
                          <MDBInput 
                              labelClass="labelBg" 
                              background label="Language name create" 
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
                    </MDBCol>
                    <MDBCol md = "6">
                      <form className="needs-validation was-validated" onSubmit={this.handleEdit} noValidate >  
                          <MDBInput 
                              labelClass="labelBg" 
                              background label="Language name edit" 
                              type="text" 
                              name = "editName"
                              value={this.state.editName}
                              onChange={this.handleChange}
                              required
                          />
                          {errors && <div className="invalid-feedback">{errors.editName}</div>}
                          <div className="row my-3 d-flex justify-content-center">
                              <MDBBtn outline color="info" type="submit">
                                  Edit <MDBIcon icon="paper-plane" className="ml-1" />
                              </MDBBtn>
                          </div>
                      </form>
                    </MDBCol>
                    
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md = "12">
                      <div className="row my-3 d-flex justify-content-center">
                        <MDBBtn color="mdb-color" onClick = {this.handleDelete}>DELETE</MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
               
            </MDBRow>
        </SectionContainer>

      </MDBContainer>
    );
  }
}



adminLanguage.propTypes = {
    currentLanguage: PropTypes.func.isRequired,
    addLanguage : PropTypes.func.isRequired,
    editLanguage : PropTypes.func.isRequired,
    deleteLanguage : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    lang:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    lang: state.lang,
    errors: state.errors
});
export default connect(mapStateToProps, { addLanguage, currentLanguage, editLanguage, deleteLanguage })(withRouter(adminLanguage));