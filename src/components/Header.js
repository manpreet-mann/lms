// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


// function Header() {
//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <img src="Images/hm.png" />
//                 </Col>
//                 <Col>
// <Dropdown>
//     <Dropdown.Toggle variant="light" id="dropdown-basic">
//         Browse
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Browse 1</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Browse 2</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Browse 3</Dropdown.Item>
//     </Dropdown.Menu>
// </Dropdown>
//                 </Col>
//                 <Col>
//                     <Button variant="light">My Learning</Button>{' '}
//                     <i className="fa-regular fa-bell"></i>
//                     <i className="fa-regular fa-heart"></i>
//                     <i className="fa-solid fa-cart-shopping"></i>
//                     <Button variant="light">Create Account</Button>{' '}
//                     <Button variant="dark">Sign In</Button>{' '}


//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Header;
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Nav
            activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link>
                    <img src="Images/hm.png" />

                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Browse
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Browse 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Browse 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Browse 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">
                    <nav class="navbar p-0 navbar-light margin">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2 search-bg" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </nav>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">
                    <Button variant="light">My Learning</Button>{' '}
                   <img src="../../Images/Bell.png" className='logos'></img>
                   <img src="../../Images/Heart.png" className='logos'></img>
                   <img src="../../Images/Cart.png" className='logos'></img>

                    {/* <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-cart-shopping"></i> */}
                    <Button variant="light">Create Account</Button>{' '}
                    <Button className='button' variant="dark">Sign In</Button>{' '}
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;