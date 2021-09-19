import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBSelect,
  MDBSelectOption,
  MDBSelectOptions,
  MDBSelectInput,
  MDBCollapseHeader,
  MDBCollapse,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBAnimation

} from "mdbreact";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Spinner from '../components/spinner';
import { allProjects } from '../actions/portfolioAction';

class PortfolioList extends Component {
  state = {
  };

  componentDidMount(){
    this.props.allProjects();
  }  
  

  render() {
    let {portfolio,handleViewDetail} = this.props;
    let portfolioLoading;
    let portfolioList;
    if(portfolio.isLoading || portfolio.projects === null){
      portfolioLoading = <Spinner/>;
      console.log('portfolio loading');
    } else {
      if (Object.keys(portfolio.projects).length > 0) {
          portfolioList = portfolio.projects && portfolio.projects.map((project,index) => (
            <MDBCol lg="3" md="12" className="mb-5" >
              <MDBAnimation
                    reveal
                    type="fadeInUp"
              >
              <MDBCard>
                <MDBCardImage
                  top
                  src={require(`../image/${project.photos[0]}`)}
                  overlay="white-slight"
                  hover
                  waves
                  alt="MDBCard image cap"
                />
                <MDBCardBody>
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <MDBIcon icon="share-alt" />
                  </a>
                  <MDBCardTitle>{project.name}</MDBCardTitle>
                  <hr />
                  <MDBCardText>
                    {project.description}
                  </MDBCardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                    onClick = {handleViewDetail(project._id)}
                  >
                    <h5>
                      Read more <MDBIcon icon="angle-double-right" />
                    </h5>
                  </a>
                </MDBCardBody>
              </MDBCard>
              </MDBAnimation>
            
            </MDBCol>
          ));
    }
    }
    return (
        <MDBRow className="mt-2">
          <MDBRow className="text-md-left">
              {portfolioLoading}
              {portfolio.isLoading ? '': 
                portfolioList
              }
          </MDBRow>
        </MDBRow>
    );
  }
}

PortfolioList.propTypes = {
  allProjects: PropTypes.func.isRequired,
  handleViewDetail: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
});

export default connect(mapStateToProps, {allProjects})(withRouter(PortfolioList));
