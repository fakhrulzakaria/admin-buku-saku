import React from "react";
import {
  Col,
  Form,
  FormGroup,
  FormInput,
  InputGroupAddon,
  Button,
  NavLink
} from "shards-react";
import { Link } from "react-router-dom";

const TPR = () => (
  <Col sm="12" md="6">
    <Form>
      <FormGroup>
        <label htmlFor="poin">Poin</label>
        <FormInput id="poin" type="number"/>
      </FormGroup>
      <FormGroup>
        <label htmlFor="keterangan">Keterangan</label>
        <FormInput id="keterangan"/>
      </FormGroup>
      <InputGroupAddon type="append" className="mb-4 float-right">
        <NavLink tag={Link} to="/data-pasal">
          <Button theme="white" className="bg-warning text-white px-5 py-3">Kembali</Button>
        </NavLink>
        <NavLink tag={Link} to="/data-pasal">
          <Button theme="white" className="bg-primary text-white px-5 py-3">Simpan</Button>
        </NavLink>
      </InputGroupAddon>
    </Form>
  </Col>
);

export default TPR;
