import React, { useState } from "react";
import { Container, Row, Col  } from "shards-react";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Card, CardHeader, CardBody } from "shards-react";

var date = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var year = date.getFullYear();
var month = months[date.getMonth()];
var title = "Dashboard - " + month + ' ' + year;

function Dashboard(props) {

  const dataSeviceCharge = [
    {
      key: 0,
      sn: 1,
      amount: 'N19,849.00',
      resident_name: 'Olaleye Afolabi',
      unit_address: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      payment_mode: 'In App Payment',
      date: '10-12-2022'
    },
    {
      key: 1,
      sn: 2,
      amount: 'N19,849.00',
      resident_name: 'Ochai Samuel',
      unit_address: '15 Main Steet',
      payment_type: 'Project',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
    {
      key: 2,
      sn: 3,
      amount: 'N19,849.00',
      resident_name: 'Ochai Samuel',
      unit_address: 'Whispering pines - 07',
      payment_type: 'Service Charge',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
    {
      key: 3,
      sn: 4,
      amount: 'N19,849.00',
      resident_name: 'Ebimowei Okpongu',
      unit_address: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
    {
      key: 4,
      sn: 5,
      amount: 'N19,849.00',
      resident_name: 'John Doe',
      unit_address: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
    {
      key: 5,
      sn: 6,
      amount: 'N19,849.00',
      resident_name: 'Ebimowei Okpongu',
      unit_address: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
    {
      key: 6,
      sn: 7,
      amount: 'N19,849.00',
      resident_name: 'Ochai Samuel',
      unit_address: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      payment_mode: 'Off App Payment',
      date: '10-12-2022'
    },
  ]

  const columnsSeviceCharge = [
    {
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Resident Name',
      dataIndex: 'resident_name',
      key: 'resident_name',
    },
    {
      title: 'Unit Address',
      dataIndex: 'unit_address',
      key: 'unit_address',
    },
    {
      title: 'Payment Type',
      dataIndex: 'payment_type',
      key: 'payment_type',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'payment_mode',
      key: 'payment_mode',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const dataRecentProject = [
    {
      key: 0,
      sn: 1,
      amount: 'N19,849.00',
      beneficiary: 'Olaleye Afolabi',
      description: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
    {
      key: 1,
      sn: 2,
      amount: 'N19,849.00',
      beneficiary: 'Ochai Samuel',
      description: '15 Main Steet',
      payment_type: 'Project',
      date: '10-12-2022'
    },
    {
      key: 2,
      sn: 3,
      amount: 'N19,849.00',
      beneficiary: 'Ochai Samuel',
      description: 'Whispering pines - 07',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
    {
      key: 3,
      sn: 4,
      amount: 'N19,849.00',
      beneficiary: 'Ebimowei Okpongu',
      description: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
    {
      key: 4,
      sn: 5,
      amount: 'N19,849.00',
      beneficiary: 'John Doe',
      description: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
    {
      key: 5,
      sn: 6,
      amount: 'N19,849.00',
      beneficiary: 'Ebimowei Okpongu',
      description: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
    {
      key: 6,
      sn: 7,
      amount: 'N19,849.00',
      beneficiary: 'Ochai Samuel',
      description: '32 Franklin Stret - 1',
      payment_type: 'Service Charge',
      date: '10-12-2022'
    },
  ]

  const columnsRecentProject = [
    {
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Beneficiary',
      dataIndex: 'beneficiary',
      key: 'beneficiary',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Payment Type',
      dataIndex: 'payment_type',
      key: 'payment_type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const [dataService, setDataService] = useState(dataSeviceCharge.slice(0, 5));
  const [dataProject, setDataProject] = useState(dataRecentProject.slice(0,5));

  const onServiceChargeAll = (e) => {
    setDataService(dataSeviceCharge);
  }

  const onRecentProjectAll = (e) => {
    setDataProject(dataRecentProject);
  }


  return(
    <Container fluid className="main-content-container">
      <Row noGutters className="page-header py-4">
        <p className="content-title">{title}</p>
      </Row>
      <Row>
        <Col lg="6" md="12" sm="12" className="mb-4">
          <Card small className="h-100">
            <CardBody className="d-flex flex-column">
              <p className="payment-p">Service Charge Payments</p>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <div className="payment-price-green">N3,000,500</div>
                  <div className="serice-charge-payment-total"><i className="material-icons icon-green">arrow_upward</i>Total Paid This month</div>  
                </Col>
                <Col lg="6" md="6" sm="6">
                  <div className="payment-price-red">N3,000,500</div>
                  <div className="serice-charge-payment-total"><i className="material-icons icon-red">arrow_downward</i>Total Outstanding</div>  
                </Col>        
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" md="12" sm="12" className="mb-4">
          <Card small className="h-100">
            <CardBody className="d-flex flex-column">
              <p className="payment-p">Projects Payments</p>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <div className="payment-price-green">N3,000,500</div>
                  <div className="serice-charge-payment-total"><i className="material-icons icon-green">arrow_upward</i>Total Paid This month</div>  
                </Col>
                <Col lg="6" md="6" sm="6">
                  <div className="payment-price-red">N3,000,500</div>
                  <div className="serice-charge-payment-total"><i className="material-icons icon-red">arrow_downward</i>Total Outstanding</div>  
                </Col>        
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row noGutters className="page-header py-4">
        <p className="subcontent-title">RECENT SERVICE CHARGE  TRANSACTION</p>
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardBody className="p-0 pb-3">
              <Table 
                dataSource={dataService} 
                columns={columnsSeviceCharge} 
                pagination={false}
              />
              <a href="#" onClick={(e)=>onServiceChargeAll()} className="view-all serice-charge-all">View all</a>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row noGutters className="page-header py-4">
        <p className="subcontent-title">RECENT TRANSACTION HISTORY</p>
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardBody className="p-0 pb-3">
              <Table 
                dataSource={dataProject} 
                columns={columnsRecentProject} 
                pagination={false} />
              <a href="#" onClick={(e)=>onRecentProjectAll()} className="view-all recent-project-all">View all</a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;
