import React from "react";
import {
  Col,
  Form,
  FormInput,
  FormGroup,
  Row
} from "shards-react";

const TPSL = () => (
  <Col sm="12" md="6">
    <Form>
      <Row form>
      <Col md="5" className="form-group">
      <FormGroup>
        <label htmlFor="nis">NIS</label>
        <FormInput id="nis"/>
      </FormGroup>
      </Col>
      <Col md="7" className="form-group">
      <FormGroup>
        <label htmlFor="nama">Nama</label>
        <FormInput id="nama"/>
      </FormGroup>
      </Col>
      </Row>
      <Row form>
      <Col md="6" className="form-group">
      <FormGroup>
        <label htmlFor="kode">Kode</label>
        <FormInput id="kode"/>
      </FormGroup>
      </Col>
      <Col md="6" className="form-group">
      <FormGroup>
        <label htmlFor="poin">Poin</label>
        <FormInput id="poin"/>
      </FormGroup>
      </Col>
      </Row>
    </Form>
  </Col>
);

export default TPSL;
