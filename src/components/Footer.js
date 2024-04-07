import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                {/* <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div> */}
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <div>
                                <img src="Images/hm.png"  alt='Your Alt Text' className='text-uppercase fw-bold mb-4' /> 
                                <MDBIcon icon="gem" className="me-3" />
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Get Help</h6>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Latest Articles
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    FAQ
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Programs</h6>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Data Science
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Full Stack Development
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    AI/ML                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Cyber  Security
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset underline'>
                                    Electric Vehicle Design
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                            <p>
                                <MDBIcon className="me-2" />
                                Tel: + 9779886900

                            </p>
                            <p>
                                <MDBIcon className="me-2" />
                                Mail: Support@Hopingminds.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" />
                                <MDBIcon icon="print" className="me-3" />
                                <MDBIcon icon="print" className="me-3" />
                                <MDBIcon icon="print" className="me-3" />
                                <MDBIcon icon="print" className="me-3" />

                            </p>
                            <p>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}