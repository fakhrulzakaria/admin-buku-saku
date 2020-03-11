import React from "react";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup
} from "shards-react";

const TPL = () => (
  <Col sm="12" md="6">
    <Form>
      <Row form>
        <Col md="7">
          <FormGroup>
            <label htmlFor="kategori">Kategori</label>
            <FormInput id="kategori" placeholder=""/>
          </FormGroup>
        </Col>
        <Col md="5" className="form-group">
          <FormGroup>
            <label>Jenis</label>
            <FormSelect>
              <option>Pelanggaran</option>
              <option>Prestasi</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <label htmlFor="kode">Kode</label>
        <FormInput id="kode"/>
      </FormGroup>
    </Form>
  </Col>
);

export default TPL;
