import React, {useState} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Card, CardHeader, CardBody } from "shards-react";

function SCPayment () {
  const dataSource = [
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

  const columns = [
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

  const text = '1-5 of ' + dataSource.length;
  const [tableData, setTableData] = useState({
    currentPage: 1,
    perPageNum: 5,
    searchText: '',
    text: text,
    data: dataSource.slice(0, 5)
  })

  const onPageChange = (event) => {
    const text = '1-' + event + ' of ' + dataSource.length;
    setTableData({
      currentPage: 1,
      perPageNum: event,
      text: text,
      data: dataSource.slice(0, event)
    })
  };

const onPrevPage = (e) => {
  const cPage = tableData.currentPage;
  const perNum = tableData.perPageNum;
  const allCount = dataSource.length;

  let allPage = 0;
  if(allCount % perNum === 0) {
    allPage = allCount / perNum;
  } else {
    allPage = Math.trunc(allCount / perNum) + 1;
  }
  if(cPage === 1) {
    return;
  } else {
    const prevPage = cPage - 1;
    const start = (prevPage - 1) * perNum;
    const end = start + perNum;
    const text = (start + 1) + '-' + end + ' of ' + dataSource.length;
    setTableData({
      currentPage: prevPage,
      perPageNum: perNum,
      text: text,
      data: dataSource.slice(start, end)
    })
  }
}

const onNextPage = (e) => {
  const cPage = tableData.currentPage;
  const perNum = tableData.perPageNum;
  const allCount = dataSource.length;

  let allPage = 0;
  if(allCount % perNum === 0) {
    allPage = allCount / perNum;
  } else {
    allPage = Math.trunc(allCount / perNum) + 1;
  }

  if(allPage === cPage) {
    return;
  } else {
    const nextPage = cPage + 1;
    const start = cPage * perNum;
    const end = start + perNum;
    const text = (start + 1) + '-' + end + ' of ' + dataSource.length;
    setTableData({
      currentPage: nextPage,
      perPageNum: perNum,
      text:text,
      data: dataSource.slice(start, end)
    })
  }
}

const onStartDate = () => {
}

const onEndDate = () => {
}


  return(
    <Container fluid className="main-content-container">
      <Row className="page-header py-4">
        <Col lg='4' md='12'>
          <p className="content-title">Service Charge Payments</p>
        </Col>
        <Col lg='8' md='12'>
          <div className="d-flex justify-content-end align-items-center">
            <input type="date" onChange={(e) => onStartDate()} className="search-text mr-2" value=""  />
            <input type="date" onChange={(e) => onEndDate()} className="search-text mr-2" value=""  />
            <button className="btn record-btn mr-2">Filter</button>
            <a className="mr-2 content-tool-bar"><i className='fa fa-file-excel-o excel-icon'></i>EXCEL</a>
            <a className="mr-2 content-tool-bar"><i className="fa fa-file-pdf-o pdf-icon"></i>PDF</a>
            <a className="mr-2 content-tool-bar"><i className="fa fa-print print-icon"></i>PRINT</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardBody className="p-0 pb-3">
              <Table 
                dataSource={[...tableData.data]} 
                columns={columns} 
                pagination={false}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-end align-items-center">
        <p className="pagination-per-page">Rows Per Page: </p>
        <select 
          className="selectPage"
          onChange={(e) => onPageChange(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <p className="pagination-per-page">{tableData.text}</p>
        <button className="pre-next" onClick={(e) => onPrevPage()}><i className="material-icons">navigate_before</i></button>
        <button className="pre-next" onClick={(e) => onNextPage()}><i className="material-icons">navigate_next</i></button>
      </div>
    </Container>
  )
}

export default SCPayment;
