import {Navbar, Nav, Container} from "react-bootstrap"
import {FaShoppingCart, FaUser} from "react-icons/fa"
import { CiShoppingBasket } from "react-icons/ci";
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><CiShoppingBasket/> Ecomm</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link> <FaShoppingCart/> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link> <FaUser/> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header