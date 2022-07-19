import React, {useState} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Modal } from "shards-react";
import { Table, Select, Input,  } from 'antd';
import 'antd/dist/antd.css';
import BootstrapSelect from 'react-bootstrap-select-dropdown';
import { Card, CardHeader, CardBody, Button } from "shards-react";
const { TextArea } = Input;

const { Option } = Select;

function RecordPayment() {

  const options = [
    {
      "labelKey": "John Doe - 117 Olive Drive",
      "value": "John Doe - 117 Olive Drive"
    },
    {
      "labelKey": "James Andrew - 89 Palm Drive",
      "value": "James Andrew - 89 Palm Drive"
    },
    {
      "labelKey": "Jerry Precious - 90 Olive Drive",
      "value": "Jerry Precious - 90 Olive Drive"
    }
  ]

  const handleChange = (e) => {

  }

  return(
    <Container fluid className="record-payment-container">
      <Row className="mt-4">
        <Col lg="6" md="12" sm="12" className="mb-4">
          <Card small className="h-100">
            <CardBody className="d-flex flex-column">
              <div className="record-payment-title">
                <p className="record-payment-p1">Record Payments</p>
                <p className="record-payment-p2">(OLALEYE AFOLABI)</p>
              </div>
              <div className="">
                <Select className="col-md-12 col-lg-8 pl-0 pr-0 mt-3 mb-3 record-payment-select" defaultValue="Payment Type" onChange={handleChange}>
                  <Option value="Service Charge">Service Charge</Option>
                  <Option value="Project">Project</Option>
                </Select>
                <Select className="col-md-12 col-lg-8 pl-0 pr-0 mb-3 record-payment-select" defaultValue="Select" onChange={handleChange} disabled>
                  <Option value="Service Charge">Service Charge</Option>
                  <Option value="Project">Project</Option>
                </Select>
                <Input className="col-md-12 col-lg-8 record-payment-style mb-3" placeholder="Payment Date" />
                <Input className="col-md-12 col-lg-8 record-payment-style mb-3" placeholder="Amount" />
                <Input className="col-md-12 col-lg-8 record-payment-style  " placeholder="Reference" />
                <div className="col-md-12 col-lg-8 record-payment-textarea mt-3 mb-3">
                  <TextArea className="record-payment-style " rows={3} placeholder="Payment Description" />
                </div>
                
                <br />
                <Button type="primary" className="col-md-12 col-lg-6 record-payment-style record-payment-btn">Primary Button</Button>
              </div>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RecordPayment;