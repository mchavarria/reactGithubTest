import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SimpleSlider from '../containers/Slider';
import Profile from '../containers/Profile';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: 'slider'
    }
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="#" onClick={() => this.setState({currentPath: 'slider'})}>Github Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" onClick={() => this.setState({currentPath: 'slider'})}>Slider</Nav.Link>
              <Nav.Link href="#" onClick={() => this.setState({currentPath: 'profile'})}>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {(this.state.currentPath==='slider') ? <SimpleSlider /> : false}
          {(this.state.currentPath==='profile') ? <Profile /> : false}
        </div>
      </div>
    )
  };
}

export default AppComponent;
