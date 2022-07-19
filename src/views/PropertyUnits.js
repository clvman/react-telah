import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Modal, ModalHeader, ModalBody  } from "shards-react";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Card, CardHeader, CardBody } from "shards-react";
import ExportTo from '../components/export/ExportTo'

function PropertyUnits() {
  const dataSource = [
    {
      key: 0,
      sn: 0,
      resident_name: 'Olaleye Afolabi',
      unit_address: '32 Franklin Stret - 1',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
    {
      key: 1,
      sn: 1,
      resident_name: 'Ochai Samuel',
      unit_address: '15 Main Steet',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
    {
      key: 2,
      sn: 2,
      resident_name: 'Ebimowei Okpongu',
      unit_address: 'Whispering pines - 07',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
    {
      key: 3,
      sn: 3,
      resident_name: 'John Doe',
      unit_address: '32 Franklin Stret - 1',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
    {
      key: 4,
      sn: 4,
      resident_name: 'Olaleye Afolabi',
      unit_address: '15 Main Steet',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
      {
      key: 5,
      sn: 5,
      resident_name: 'Ochai Samuel',
      unit_address: 'Whispering pines - 07',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    },
    {
      key: 6,
      sn: 6,
      resident_name: 'Ebimowei Okpongu',
      unit_address: '32 Franklin Stret - 1',
      phone_number: '07084521487',
      date_added: '10-12-2022'
    }
  ];

  const columns = [
    {
      title: 'SN',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Resident Name',
      dataIndex: 'resident_name',
      key: 'resident_name',
    },
    {
      title: 'Unit address',
      dataIndex: 'unit_address',
      key: 'unit_address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Date Added',
      dataIndex: 'date_added',
      key: 'date_added',
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
const [modalOpen, setModalOpen] = useState(false);
const [rowData, setRowData] = useState();


const onSearchText = () => {

}
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

const onModalToggle = () => {
  const toggle = !modalOpen;
  setModalOpen(toggle);
}

  return(
    <Container fluid className="main-content-container">
      <Row className="page-header py-4 d-flex align-items-center">
        <Col lg='3' md='12'>
          <p className="content-title">Property Units</p>
        </Col>
        <Col lg='9' md='12'>
          <div className="d-flex justify-content-end align-items-center">
            <input type="text" onChange={(e) => onSearchText()} className="search-text mr-2" value="" placeholder="search" />
            <button className="btn record-btn mr-2">Filter</button>
            <ExportTo columns={columns} dataSource={[...tableData.data]} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardBody className="p-0 pb-3">
              <Table 
                onRow={(record, rowIndex) => {
                return {
                    onClick: event => {setRowData(record); onModalToggle();}, // click row
                  };
                }}
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

        <Modal size="lg" open={modalOpen} toggle={onModalToggle}>
          <ModalBody>
            <div className="d-flex justify-content-between align-items-center">
              <div className="modal-title">Property Details</div>
              <div className="modal-close-wrap"><a href="#" className="modal-close" onClick={onModalToggle}><i className="material-icons">close</i></a></div>
            </div>
            <Row className="modal-wapper">
              <Col lg="6" md="6">
                <div className="modal-owner">
                  Property Owner
                </div>
                <div className="modal-item">
                  <div className="modal-item-title">NAME</div>
                  <div className="modal-item-content">Kelvin Keme</div>
                </div>
                <div className="modal-item">
                  <div className="modal-item-title">ADDRESS</div>
                  <div className="modal-item-content">110 Olive Drive, Gold City Estate, Abuja</div>
                </div>
                <div className="modal-item">
                  <div className="modal-item-title">PROPERTY TYPE</div>
                  <div className="modal-item-content">Duplex</div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="modal-tenants">
                  <div className="modal-tenants-title">
                    Tenants(2)
                  </div>
                  <div className="modal-tenants-content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="modal-tenants-username">
                        <div className="modal-tenants-nick">KK</div>
                        <div className="modal-tenants-name">Kelvin Keme</div>                      
                      </div>
                      <div className="modal-tenants-pay">35%</div>
                    </div>
                  </div>
                  <div className="modal-tenants-content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="modal-tenants-username">
                        <div className="modal-tenants-nick">KK</div>
                        <div className="modal-tenants-name">Kelvin Keme</div>                      
                      </div>
                      <div className="modal-tenants-pay">35%</div>
                    </div>
                  </div>
                  <div className="modal-tenants-down">
                    <a href="#" className="modal-tenants-a"><i className="material-icons arrow-down">keyboard_arrow_down</i></a>
                  </div>
                  
                </div>
              </Col>              
            </Row>
          </ModalBody>
        </Modal>
    </Container>
  )
}

export default PropertyUnits;
