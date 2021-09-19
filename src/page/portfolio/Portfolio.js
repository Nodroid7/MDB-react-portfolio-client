import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBadge
} from "mdbreact";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import PortfolioList from '../../components/PortfolioList';
import PortfolioDetail from '../../components/PortfolioDetail';
import { viewProject, viewCancelProject, selectedProjects } from '../../actions/portfolioAction';
import { currentLanguage } from '../../actions/languageAction';
import TreeView from '../../components/treeView';
import { Grid } from '@material-ui/core';

class Portfolio extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalDetail: false,
      parent:'-1',
      parentName:'Root',
    }
    this.handleViewDetail = this.handleViewDetail.bind(this);
    this.checkLanguage = this.checkLanguage.bind(this);
  }

  componentDidMount(){
    this.props.currentLanguage();
  }  

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
    if(nr === 'Detail')
      this.props.viewCancelProject();
  };

  checkLanguage = (id, name) => () => {
    this.setState({ ['parent'] : id });
    this.setState({ ['parentName'] : name });
    if(id == '-1')
      this.props.currentLanguage();
    else
      this.props.selectedProjects(id);
  } 

  handleViewDetail = id => () => {
    this.props.viewProject(id);
    this.setState({
      ['modalDetail']: true
    });
  }

  render() {
    const {lang} = this.props;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <TreeView
              lang = {lang}
              checkLanguage = {this.checkLanguage}
            />
            <h1>
              <MDBBadge>{this.state.parentName}</MDBBadge>
            </h1>
          </MDBCol>
          <MDBCol md="12">
            <PortfolioList
              handleViewDetail = {this.handleViewDetail}
            />
          </MDBCol>
          <PortfolioDetail
          modalOpenState = {this.state.modalDetail}
          toggle = {this.toggle}
        />
        </MDBRow>
      </MDBContainer>
    );
  }
}

Portfolio.propTypes = {
  currentLanguage: PropTypes.func.isRequired,
  viewProject: PropTypes.func.isRequired,
  viewCancelProject: PropTypes.func.isRequired,
  selectedProjects: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

export default connect(mapStateToProps, {currentLanguage, viewProject, viewCancelProject,selectedProjects})(withRouter(Portfolio));