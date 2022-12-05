import React from 'react'
import { FormGroup, Label, Form, Input, Row, Col } from 'reactstrap'

const SignUp = () => {
    return (
        <div>
            <Form >
                <h1 className='d-flex text-align-left'>Sign Up</h1>
                <p className='d-flex text-align-left'>Use your Open Id to Sign Up</p>
                <Row>
                    <Col>
                        <h4>Email</h4>
                    </Col>
                    <Col>
                        <h4>Phone Number</h4>
                    </Col>
                </Row>
                <FormGroup >
                    <Label className='d-flex text-align-left'>Email</Label>
                    <Input name='email' placeholder='email' type='email' />
                </FormGroup>
                <FormGroup>
                    <Label className='d-flex text-align-left'>Password</Label>
                    <Input name='password' placeholder='password' type='password' />
                </FormGroup>
                <FormGroup>
                    <Label className='d-flex text-align-left'>Confirm Password</Label>
                    <Input name='confpassword' placeholder='confirm password' type='password' />
                </FormGroup>
            </Form>
        </div>
    )
}

export default SignUp