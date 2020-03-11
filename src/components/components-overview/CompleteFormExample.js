import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button,
  NavLink
} from "shards-react";
import { Link } from "react-router-dom";

const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col className="my-auto align-self-center">
          <Form>
            <FormGroup>
              <label htmlFor="feEmailAddress">Email</label>
              <FormInput
                id="feEmailAddress"
                type="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="fePassword">Password</label>
              <FormInput
                id="fePassword"
                type="password"
                placeholder="Password"
              />
            </FormGroup>
            <NavLink tag={Link} to="/data-siswa">
              <Button>Log In</Button>
            </NavLink>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;
