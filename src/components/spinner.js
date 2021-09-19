import React from "react";
import { MDBSpinner, MDBContainer } from "mdbreact";

export default () => {
    return (
        <MDBContainer>
            <div className="my-5 d-flex justify-content-around">
              <MDBSpinner crazy big green />
            </div>
        </MDBContainer>
      );
};
