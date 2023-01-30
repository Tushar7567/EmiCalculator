import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
function Navigation() {
    const user = JSON.parse(localStorage.getItem('users'));

    const logOut = () =>{
        localStorage.removeItem('users');
        window.location.href='/login';
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='borWhite'>
                <Container>
                    <Navbar.Brand>
                        {/* <img className='logo' src={imgLogo} alt="LOGO" />  */}
                        EMI Calculator
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {
                                user ? <> 
                                        <Nav.Link href="/login" className='linkMenu' onClick={logOut} >LogOut</Nav.Link>
                                        <Nav.Link href="#" className='linkMenu'> Welcome  {user.data.name} </Nav.Link>
                                    </>
                                :<>
                                    <Nav.Link href="/login" className='linkMenu'>LogIn</Nav.Link>
                                    <Nav.Link href="/signup" className='linkMenu'>Register</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation