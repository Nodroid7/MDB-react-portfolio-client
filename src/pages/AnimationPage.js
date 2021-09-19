import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBSelect
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class AnimationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: "",
      delay: "0",
      duration: "800ms",
      infinite: true,
      loop: 0,
      animation: this.animation("", false, 0),
      selects: {
        attentionSeekers: [
          { text: "bounce", value: "1" },
          { text: "flash", value: "2" },
          { text: "pulse", value: "3" },
          { text: "rubberBand", value: "4" },
          { text: "shake", value: "5" },
          { text: "swing", value: "6" },
          { text: "tada", value: "7" },
          { text: "wobble", value: "8" },
          { text: "jello", value: "9" },
          { text: "headShake", value: "10" }
        ],
        specials: [
          { text: "hinge", value: "1" },
          { text: "rollIn", value: "2" },
          { text: "rollOut", value: "3" }
        ],
        bouncingEntrances: [
          { text: "bounceIn", value: "1" },
          { text: "bounceInDown", value: "2" },
          { text: "bounceInLeft", value: "3" },
          { text: "bounceInRight", value: "4" },
          { text: "bounceInUp", value: "5" }
        ],
        bouncingExits: [
          { text: "bounceOut", value: "1" },
          { text: "bounceOutDown", value: "2" },
          { text: "bounceOutLeft", value: "3" },
          { text: "bounceOutRight", value: "4" },
          { text: "bounceOutUp", value: "5" }
        ],
        fadingEntrances: [
          { text: "fadeIn", value: "1" },
          { text: "fadeInDown", value: "2" },
          { text: "fadeInDownBig", value: "3" },
          { text: "fadeInLeft", value: "4" },
          { text: "fadeInLeftBig", value: "5" },
          { text: "fadeInRight", value: "6" },
          { text: "fadeInRightBig", value: "7" },
          { text: "fadeInUp", value: "8" },
          { text: "fadeInUpBig", value: "9" }
        ],
        fadingExits: [
          { text: "fadeOut", value: "1" },
          { text: "fadeOutDown", value: "2" },
          { text: "fadeOutDownBig", value: "3" },
          { text: "fadeOutLeft", value: "4" },
          { text: "fadeOutLeftBig", value: "5" },
          { text: "fadeOutRight", value: "6" },
          { text: "fadeOutRightBig", value: "7" },
          { text: "fadeOutUp", value: "8" },
          { text: "fadeOutUpBig", value: "9" }
        ],
        flippers: [
          { text: "flip", value: "1" },
          { text: "flipInX", value: "2" },
          { text: "flipInY", value: "3" },
          { text: "flipOutX", value: "4" },
          { text: "flipOutY", value: "5" }
        ],
        lightSpeed: [
          { text: "lightSpeedIn", value: "1" },
          { text: "lightSpeedOut", value: "2" }
        ],
        rotatingEntrances: [
          { text: "rotateIn", value: "1" },
          { text: "rotateInDownLeft", value: "2" },
          { text: "rotateInDownRight", value: "3" },
          { text: "rotateInUpLeft", value: "4" },
          { text: "rotateInUpRight", value: "5" }
        ],
        rotatingExits: [
          { text: "rotateOut", value: "1" },
          { text: "rotateOutDownLeft", value: "2" },
          { text: "rotateOutDownRight", value: "3" },
          { text: "rotateOutUpLeft", value: "4" },
          { text: "rotateOutUpRight", value: "5" }
        ],
        slidingEntrances: [
          { text: "slideInDown", value: "1" },
          { text: "slideInLeft", value: "2" },
          { text: "slideInRight", value: "3" },
          { text: "slideInUp", value: "4" }
        ],
        slidingExits: [
          { text: "slideOutDown", value: "1" },
          { text: "slideOutLeft", value: "2" },
          { text: "slideOutRight", value: "3" },
          { text: "slideOutUp", value: "4" }
        ],
        zoomEntrances: [
          { text: "zoomIn", value: "1" },
          { text: "zoomInDown", value: "2" },
          { text: "zoomInLeft", value: "3" },
          { text: "zoomInRight", value: "4" },
          { text: "zoomInUp", value: "5" }
        ],
        zoomExits: [
          { text: "zoomOut", value: "1" },
          { text: "zoomOutDown", value: "2" },
          { text: "zoomOutLeft", value: "3" },
          { text: "zoomOutRight", value: "4" },
          { text: "zoomOutUp", value: "5" }
        ],
        count: [
          { text: "Infinity", value: "0", checked: true },
          { text: "1", value: "1" },
          { text: "2", value: "2" },
          { text: "3", value: "3" },
          { text: "4", value: "4" },
          { text: "5", value: "5" },
          { text: "6", value: "6" },
          { text: "7", value: "7" },
          { text: "8", value: "8" },
          { text: "9", value: "9" },
          { text: "10", value: "10" }
        ],
        duration: [
          {
            text: "s/ms, default: 1s",
            value: "0",
            selected: true,
            disabled: true
          },
          { text: "500ms", value: "1" },
          { text: "600ms", value: "2" },
          { text: "700ms", value: "3" },
          { text: "800ms", value: "4" },
          { text: "900ms", value: "5" },
          { text: "1s", value: "6" },
          { text: "2s", value: "7" },
          { text: "3s", value: "8" },
          { text: "4s", value: "9" },
          { text: "5s", value: "10" }
        ],
        delay: [
          {
            text: "s/ms, default: 0",
            value: "0",
            selected: true,
            disabled: true
          },
          { text: "0", value: "1" },
          { text: "500ms", value: "2" },
          { text: "600ms", value: "3" },
          { text: "700ms", value: "4" },
          { text: "800ms", value: "5" },
          { text: "900ms", value: "6" },
          { text: "1s", value: "7" },
          { text: "2s", value: "8" },
          { text: "3s", value: "9" },
          { text: "4s", value: "10" }
        ]
      }
    };
  }

  animation = (animations, infinite, loop, duration, delay) => {
    let count = 0;
    const increment = () => {
      count++;
      if (count < 6 || count % 5 === 0) {
        console.log(`The MDB logo bounced ${count} times.`);
      }
    };
    return (
      <MDBAnimation
        className="my-5"
        type={animations}
        infinite={infinite}
        count={loop}
        duration={duration}
        delay={delay}
        onAnimationIteration={increment}
      >
        <img
          alt="MDBootstrap logo"
          className="img-fluid"
          src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
        />
      </MDBAnimation>
    );
  };

  setAnimation = (
    { animations, infinite, loop, duration, delay } = this.state
  ) => {
    this.setState({
      animation: this.animation(animations, infinite, loop, duration, delay)
    });
  };

  getValueOfSelect = value => {
    this.setState({ animations: value }, () => this.setAnimation());
  };

  getCount = v => {
    Number(v[0]) === 0
      ? this.setState({ loop: 0, infinite: true })
      : this.setState({ loop: Number(v[0]), infinite: false });
    this.setState({ animation: null }, () => this.setAnimation());
  };

  getDuration = v =>
    this.setState({ animation: null, duration: v || "800ms" }, () =>
      this.setAnimation()
    );
  getDelay = v =>
    this.setState({ animation: null, delay: v || "0" }, () =>
      this.setAnimation()
    );

  render() {
    const { animation, selects } = this.state;
    return (
      <MDBContainer className="mt-5">
        <DocsLink
          title="Animations"
          href="https://mdbootstrap.com/docs/react/css/animations/"
        />

        <SectionContainer header="Examples & customizations">
          <MDBRow className="d-flex align-items-center justify-content-center">
            {animation}
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="2">
              <MDBSelect
                outline
                color="ins"
                getValue={this.getCount}
                getTextContent={this.renderAnimation}
                options={selects.count}
                label="Loops"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="2">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getDuration}
                options={selects.duration}
                label="Duration"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="2">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getDelay}
                options={selects.delay}
                label="Delay"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
          </MDBRow>
          <hr className="my-4" />

          <MDBRow className="d-flex flex-wrap">
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.attentionSeekers}
                label="ATTENTION SPEEKERS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.specials}
                label="FLIPPERS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.bouncingEntrances}
                label="BOUNCING ENTRANCES"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.bouncingExits}
                label="BOUNCING EXITS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.fadingEntrances}
                label="FADING ENTRANCES"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.fadingExits}
                label="FADING EXITS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.flippers}
                label="FLIPPERS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.lightSpeed}
                label="LIGHT SPEED"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.rotatingEntrances}
                label="ROTATING ENTRANCES"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.rotatingExits}
                label="ROTATING EXITS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.slidingEntrances}
                label="SLIDING ENTRANCES"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.slidingExits}
                label="SLIDING EXITS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.zoomEntrances}
                label="ZOOM ENTRANCES"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect
                outline
                color="ins"
                getTextContent={this.getValueOfSelect}
                options={selects.zoomExits}
                label="ZOOM EXITS"
                labelClass="labelBg"
                className="my-0"
              />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <hr style={{opacity: "0", marginBottom: "50px"}}/>

        <SectionContainer header="Reveal animations when scrolling">
          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="bounceInUp">
                <img
                  alt="A view on mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="tada">
                <img
                  alt="Cottage on a lake surrounded by mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <img
                  alt="A boat floating on an ocean"
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="View on mountains from mountain top."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation
                reveal
                type="fadeInUp"
                onAnimationEnd={() =>
                  console.log("The last picture has been revealed")
                }
              >
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}
export default AnimationPage;
