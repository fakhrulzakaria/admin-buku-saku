import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import TPSL from "../components/components-overview/TPSL";
import TPSR from "../components/components-overview/TPSR";

const TambahPoinSiswa = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Tambah Poin Siswa"
          subtitle="Buku Saku Online"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="12" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <TPSL />
                  <TPSR />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TambahPoinSiswa;
