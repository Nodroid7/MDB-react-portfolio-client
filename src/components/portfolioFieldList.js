import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBDataTable,
  MDBIcon,
} from "mdbreact";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'moment';
import { allProjects } from '../actions/portfolioAction';
import SectionContainer from "../components/sectionContainer";
import Spinner from '../components/spinner';

class PortfolioFeildList extends Component {
  
  componentDidMount(){
    this.props.allProjects();
  }

  componentWillReceiveProps(nextProps) {
    let {isRepeating} = nextProps.portfolio;
    // projects reloading
    if(isRepeating){
      this.props.allProjects();
    }
  }


  render() {

    const { portfolio, handleViewDetail, handleEdit, handleDelete } = this.props;
    
    let portfolioLoading;

    let data = ({
      columns: [
        { label: "Photo", field: "photo", attributes: { "aria-controls": "DataTable", "aria-label": "Name" } },
        { label: "Name", field: "name" },
        { label: "Language", field: "language" },
        { label: "Price", field: "price" },
        { label: "Create date", field: "createDate", sort: "asc" },
        { label: "View", field: "view", sort: "disabled" },
        { label: "Edit", field: "edit", sort: "disabled" },
        { label: "Delete", field: "delete", sort: "disabled"}
      ],
      rows: [
        // projects
      ]
    });
    if(portfolio.isLoading || portfolio.projects === null){

      portfolioLoading = <Spinner/>;
      console.log('portfolio loading');
      data.rows = [];
    }else{
      
      if (Object.keys(portfolio.projects).length > 0) {
          data.rows = portfolio.projects && portfolio.projects.map((project,index) => (
            {
              photo: (
                <center>
                  <img
                    className="d-block w-3"
                    src={require(`../image/${project.photos[0]}`)}
                    style = {{width: '50px'}}
                  />
                </center>
                ),
              name: project.name,
              language: project.language.name,
              price: project.price,
              createDate: Moment(project.createdAt).format('YYYY/MM/DD H:m:s'),
              view: (
                <MDBBtn floating color = "yellow"  size="sm" style = {{margin:'0px'}} onClick = {handleViewDetail(project._id)}>
                  <MDBIcon icon="eye"  />
                </MDBBtn>
              ),
              edit: (
                <MDBBtn floating color = "blue"  size="sm" style = {{margin:'0px'}}  onClick = {handleEdit(project._id)}>
                  <MDBIcon icon="pencil-alt"  />
                </MDBBtn>
              ),
              delete: (
                <MDBBtn color="red" floating size="sm" style = {{margin:'0px'}} onClick = {handleDelete(project._id)}>
                  <MDBIcon icon="trash-alt" />
                </MDBBtn>
                      ),
            }
          ));
      }
    }

    return (
      
      <MDBContainer>
        {portfolioLoading}
        {portfolio.isLoading ? '': 
        <MDBRow className="py-3">
          <MDBCol md="12">
            <SectionContainer title="Project Lists" noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={10}
                    pagesAmount={4}
                    data={data}
                    style = {{textAlign: 'center'}}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
        }
      </MDBContainer>
    );
  }
}

PortfolioFeildList.propTypes = {
    allProjects: PropTypes.func.isRequired,
    handleViewDetail: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    portfolio: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
});


export default connect(mapStateToProps, {allProjects})(withRouter(PortfolioFeildList));
