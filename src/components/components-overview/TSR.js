import React from "react";
import {
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  Button,
  NavLink,
  Row,
  FormSelect
} from "shards-react";
import { Link } from "react-router-dom";

const TSR = () => (
  <Col sm="12" md="6">
    <Form>
    <Row form>
        <Col md="4" className="form-group">
          <FormGroup>
            <label>Kelas</label>
            <FormSelect>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col md="4" className="form-group">
          <FormGroup>
            <label>.</label>
            <FormSelect>
              <option>RPL</option>
              <option>TKJ</option>
              <option>TJA</option>
            </FormSelect>
          </FormGroup>
        </Col>
        <Col md="4" className="form-group">
          <FormGroup>
            <label>.</label>
            <FormSelect>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <InputGroupAddon type="append" className="mb-4 float-right">
        <NavLink tag={Link} to="/data-siswa">
          <Button theme="white" className="bg-warning text-white px-5 py-3">Kembali</Button>
        </NavLink>
        <NavLink tag={Link} to="/data-siswa">
          <Button theme="white" className="bg-primary text-white px-5 py-3">Simpan</Button>
        </NavLink>
      </InputGroupAddon>
    </Form>
  </Col>
);

export default TSR;
