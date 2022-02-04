import { Component } from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class NavbarScreen extends Component{
    render(){
        return(

        //INI NAVBAR DARI REACT-BOOTSTRAP
        
        // <Navbar bg="light" expand="lg">
        // <Container>
        //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="me-auto">
        //         <Nav.Link href="#home">Home</Nav.Link>
        //         <Nav.Link href="#link">Link</Nav.Link>
        //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //         <NavDropdown.Divider />
        //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //         </NavDropdown>
        //     </Nav>
        //     </Navbar.Collapse>
        // </Container>
        // </Navbar>



        //INI NAVBAR DARI BOOTSTRAP
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
        );
    }
}

export default NavbarScreen