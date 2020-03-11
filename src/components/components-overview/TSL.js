import React from "react";
import {
  Col,
  Form,
  FormInput,
  FormGroup
} from "shards-react";

const TSL = () => (
  <Col sm="12" md="6">
    <Form>
      <FormGroup>
        <label htmlFor="nis">NIS</label>
        <FormInput id="nis"/>
      </FormGroup>
      <FormGroup>
        <label htmlFor="nama">Nama</label>
        <FormInput id="nama"/>
      </FormGroup>
    </Form>
  </Col>
);

export default TSL;
