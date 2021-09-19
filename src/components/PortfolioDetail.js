import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBCollapseHeader,
  MDBCollapse,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdbreact";
import {withStyles} from '@material-ui/core';
const styles = theme => ({
  portfolioModal: {
      paddingLeft: '100px',
      paddingRight: '100px',
  }
});

class PortfolioDetail extends Component {
  state = {
    flipped: false,
    accordion: 1,
    name: '',
    detail: '',
    photos: '',
    description: '',
    price: '',
    propsState: false,
  };

  componentWillReceiveProps(nextProps){
    if(Object.keys(nextProps.portfolio.project).length > 0){
      let thisProject = nextProps.portfolio.project.project;
      this.state.name = thisProject.name;
      this.state.detail = thisProject.detail;
      this.state.description = thisProject.description;
      this.state.price = thisProject.price;
      this.state.photos = (
        <MDBCarousel
          activeItem={1}
          length={thisProject.photos.length}
          showControls={true}
          showIndicators={true}
          thumbnails
          className="z-depth-1"
        >
        <MDBCarouselInner>
          {thisProject.photos.map((photo, index) => (
            <MDBCarouselItem itemId={index+1}>
                <img
                  className="d-block w-100"
                  src={require(`../image/${photo}`)}
                />
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
       </MDBCarousel>
      );
    } else {
      this.state.name = '';
      this.state.detail = '';
      this.state.description = '';
      this.state.price = '';
      this.state.photos = '';
    }
  }

  onClick = number => () => {
     let state;
     if (this.state.accordion !== number) {
       state = number;
     } else {
       state = false;
     }
 
     this.setState({
       ...this.state,
       accordion: state
     });
  };

  render() {
    let { accordion } = this.state;
    let { modalOpenState, toggle, classes } = this.props
    console.log(this.state.photos); 
   
    
    return (
      
         <MDBModal
            size="fluid"
            isOpen={modalOpenState}
            toggle={toggle('Detail')}
            className = {classes.portfolioModal}
          >
            <MDBModalBody className="d-flex">
              <MDBCol size="6" lg="6">
                    {this.state.photos}
              </MDBCol>
              <MDBCol size="6" lg="6">
                <h2 className="h2-responsive product-name">
                  <strong>{this.state.name}</strong>
                </h2>
                <h4 className="h4-responsive">
                  <span className="green-text">
                    <strong>${this.state.price}</strong>
                  </span>
                  <span className="grey-text ml-1">
                    <small>
                      <s></s>
                    </small>
                  </span>
                </h4>
                {/* Accordion wrapper */}
                <div className="my-4">
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(1)}>
                      Description
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 1
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 1}>
                      <MDBCardBody>
                        {this.state.description}
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(2)}>
                      Detail
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 2
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 2}>
                      <MDBCardBody>
                        {this.state.detail}
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </div>
                <MDBRow className="justify-content-center">
                  <MDBBtn
                    color="secondary"
                    className="ml-4"
                    onClick={toggle('Detail')}
                  >
                    Close
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
            </MDBModalBody>
          </MDBModal>
     
    );
  }
}

PortfolioDetail.propTypes = {
  modalOpenState:  PropTypes.bool.isRequired,
  toggle : PropTypes.func.isRequired,
  
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio
});

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, {})(withRouter(PortfolioDetail)));