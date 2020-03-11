import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader
} from "shards-react";
import './style.css'

import CompleteFormExample from "../components/components-overview/CompleteFormExample";

const ComponentsOverview = () => (
    <div>
        <Container fluid className="main-content-container px-4">
            <Row className="h-100vh">
                <Col lg="6" className="mb-4 mx-auto my-auto align-self-center">

                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Log In Form</h6>
                        </CardHeader>
                        <CompleteFormExample />
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ComponentsOverview;
