import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap';

function Navbar() {
	return (
		<NavbarBs bg="dark">
            <Container>
                <NavbarBs.Brand className='text-white' href="/">Rezsi Kalkulátor</NavbarBs.Brand>
            </Container>
        </NavbarBs>
	);
}

export default Navbar;
