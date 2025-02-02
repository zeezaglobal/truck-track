import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import VehicleDetailsModal from '../popup/VehicleDetailsModal';

const data = [
  { key: '1', slNo: 1, vehicleNo: 'XYZ123', vehicleType: 'Truck', route: 'Route A', expenses: 100, status: ['active'], date: '2025-02-01' },
  { key: '2', slNo: 2, vehicleNo: 'ABC456', vehicleType: 'Car', route: 'Route B', expenses: 150, status: ['inactive'], date: '2025-01-25' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
  };

  const showVehicleDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedVehicle(null);
  };

  const columns = [
    { title: 'Sl No.', dataIndex: 'slNo', sorter: (a, b) => a.slNo - b.slNo },
    { 
      title: 'Vehicle Number', 
      dataIndex: 'vehicleNo', 
      render: (text, record) => <a onClick={() => showVehicleDetails(record)}>{text}</a> 
    },
    { title: 'Vehicle Type', dataIndex: 'vehicleType' },
    { title: 'Route', dataIndex: 'route' },
    { title: 'Expenses', dataIndex: 'expenses', sorter: (a, b) => a.expenses - b.expenses },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color = tag === 'active' ? 'volcano' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    { title: 'Date', dataIndex: 'date', sorter: (a, b) => new Date(a.date) - new Date(b.date) },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ current: currentPage, pageSize: 5 }}
        onChange={handleTableChange}
        style={{ width: '100%', backgroundColor: '#f0f2f5' }}
      />
      <VehicleDetailsModal visible={isModalVisible} onClose={closeModal} vehicle={selectedVehicle} />
    </div>
  );
};

export default Home;
