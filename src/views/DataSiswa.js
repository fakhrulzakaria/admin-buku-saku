import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, InputGroupAddon, NavLink } from "shards-react";
import { Link } from "react-router-dom";
import './style.css'

import PageTitle from "../components/common/PageTitle";

const DataSiswa = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Data Siswa" subtitle="Buku Saku Online" className="text-sm-left" />
    </Row>
    <NavLink tag={Link} to="/tambah-siswa">
    <InputGroupAddon type="append" className="mb-4">
      <Button theme="white" className="bg-primary text-white px-3 py-3">
        <i className="material-icons mr-1">add</i>
        Tambah Siswa
        </Button>
    </InputGroupAddon>
    </NavLink>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Siswa</h6>
          </CardHeader>

          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    No.
                  </th>
                  <th scope="col" className="border-0">
                    NIS
                  </th>
                  <th scope="col" className="border-0">
                    Nama
                  </th>
                  <th scope="col" className="border-0">
                    Kelas
                  </th>
                  <th scope="col" className="border-0">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>3103117283</td>
                  <td>Fakhrul Zakaria</td>
                  <td>XII RPL 2</td>
                  <td>
                    <NavLink tag={Link} to="/edit-siswa" className="default-link"><Button className="text-white btn btn-warning mr-2"><i className="material-icons mr-1">edit</i></Button></NavLink>
                    <Button className="text-white btn btn-danger"><i className="material-icons mr-1">delete</i></Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3103117285</td>
                  <td>Daffa Raihan Zaki</td>
                  <td>XII RPL 2</td>
                  <td>
                    <NavLink tag={Link} to="/edit-siswa" className="default-link"><Button className="text-white btn btn-warning mr-2"><i className="material-icons mr-1">edit</i></Button></NavLink>
                    <Button className="text-white btn btn-danger"><i className="material-icons mr-1">delete</i></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
  </Container>
);

export default DataSiswa;
