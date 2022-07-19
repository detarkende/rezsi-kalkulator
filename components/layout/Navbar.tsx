import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';

function Navbar() {
	return (
		<NavbarBs bg="light">
            <Container>
                <NavbarBs.Brand href="/">Rezsi Kalkulátor</NavbarBs.Brand>
            </Container>
        </NavbarBs>
	);
}

export default Navbar;
