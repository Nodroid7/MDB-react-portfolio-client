import React, { Component } from "react";
import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBCol
} from "mdbreact";
import DocsLink from "../../components/docsLink";
import SectionContainer from "../../components/sectionContainer";

class NavsPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/navigation/navs/"
        />

        <SectionContainer header="Basic examples with Tabs & Pills" noBorder>
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer className="pb-5">
                <MDBNav tabs color="indigo">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 1</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 3</MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer className="pb-4">
                <MDBNav pills color="unique" className="mb-2">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 1</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 3</MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Justified with Tabs & Pills" noBorder>
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer className="pb-5">
                <MDBNav tabs color="purple" className="nav-justified">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 1</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 3</MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer className="pb-4">
                <MDBNav pills className="nav-justified mb-2">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 1</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link 3</MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="With Tabs & Pills with dropdown" noBorder>
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer className="pb-5">
                <MDBNav tabs color="secondary">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color="secondary">
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color="secondary">
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink disabled to="#!">
                      Disabled
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer className="pb-4">
                <MDBNav pills color="dark" className="mb-2">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret color="dark">
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color="dark">
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink disabled to="#!">
                      Disabled
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavsPage;
