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
import TPL from "../components/components-overview/TPL";
import TPR from "../components/components-overview/TPR";

const TambahPasal = () => (
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Tambah Pasal"
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
                  <TPL />
                  <TPR />
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TambahPasal;
