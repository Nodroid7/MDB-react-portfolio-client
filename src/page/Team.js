import React, { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardUp,
  MDBCardBody,
  MDBAvatar,
  MDBRotatingCard,
  MDBIcon,
} from "mdbreact";

// import avatar1 from "../image/IMG_20210501_174748(1).jpg";
import SectionContainer from "../components/sectionContainer";

class FlippingCardPage extends Component {
  state = {
    flipped1: false,
    flipped2: false
  };

  handleFlipping = id => () => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  };

  render() {
    return (
      <MDBContainer>
       

        <SectionContainer header="On click text" flexCenter>
          <MDBCol style={{ minHeight: "26rem", maxWidth: "22rem" }}>
            <MDBRotatingCard
              flipped={this.state.flipped1}
              className="text-center h-100 w-100"
            >
              <MDBCard className="face front">
                {/* <MDBCardUp>
                  <img
                    className="card-img-top"
                    src={avatar1}
                    alt="sdf"
                  />
                </MDBCardUp>
                <MDBAvatar className="mx-auto white" circle>
                  <img
                    src={avatar1}
                    alt="gd"
                    className="rounded-circle"
                  />
                </MDBAvatar> */}
                <MDBCardBody>
                  <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                  <p className="font-weight-bold blue-text">Web developer</p>
                  <a
                    href="#!"
                    className="rotate-btn text-dark"
                    data-card="card-1"
                    onClick={this.handleFlipping(1)}
                  >
                    <MDBIcon icon="redo" /> Click here to rotate
                  </a>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="face back">
                <MDBCardBody>
                  <h4 className="font-weight-bold">About me</h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                    dolores nihil quae in mollitia asperiores ut rerum
                    repellendus, voluptatum eum, officia laudantium quaerat?
                    asfkasdf
                    asfkasdfsdfas
                    dfas
                    dfasdf
                    asfkasdfsdfasasd
                    faas
                    dfasas
                    dfa
                  </p>
                  <hr />
                  <ul className="list-inline py-2">
                    <li className="list-inline-item">
                      <a href="#!" className="p-2 fa-lg fb-ic">
                        <MDBIcon fab icon="facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="p-2 fa-lg tw-ic">
                        <MDBIcon fab icon="twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="p-2 fa-lg gplus-ic">
                        <MDBIcon fab icon="google-plus" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!" className="p-2 fa-lg li-ic">
                        <MDBIcon fab icon="linkedin" />
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#!"
                    className="rotate-btn text-dark"
                    data-card="card-1"
                    onClick={this.handleFlipping(1)}
                  >
                    <MDBIcon icon="undo" /> Click here to rotate back
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBRotatingCard>
          </MDBCol>
          
        </SectionContainer>

        </MDBContainer>
    );
  }
}

export default FlippingCardPage;
