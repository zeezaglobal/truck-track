import React, { useState } from 'react';
import { Table } from 'antd';

const data = [
  { key: '1', slNo: 1, vehicleNo: 'XYZ123', vehicleType: 'Truck', route: 'Route A', expenses: 100, status: 'Active', date: '2025-02-01' },
  { key: '2', slNo: 2, vehicleNo: 'ABC456', vehicleType: 'Car', route: 'Route B', expenses: 150, status: 'Inactive', date: '2025-01-25' },
  // Add more data as required
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleTableChange = (pagination, filters, sorter) => {
    setCurrentPage(pagination.current);
  };

  const columns = [
    { title: 'Sl No.', dataIndex: 'slNo', sorter: (a, b) => a.slNo - b.slNo },
    { title: 'Vehicle Number', dataIndex: 'vehicleNo'  ,render: text => <a href="#">{text}</a>, },
    { title: 'Vehicle Type', dataIndex: 'vehicleType' },
    { title: 'Route', dataIndex: 'route' },
    { title: 'Expenses', dataIndex: 'expenses', sorter: (a, b) => a.expenses - b.expenses },
    { title: 'Status', dataIndex: 'status', sorter: (a, b) => a.status.localeCompare(b.status) },
    { title: 'Date', dataIndex: 'date', sorter: (a, b) => new Date(a.date) - new Date(b.date) },
  ];

  return (
    <div  style={{ width: '100%', height: '100%'}}>
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ current: currentPage, pageSize: 20 }}
      onChange={handleTableChange}
      style={{ width: '100%' ,backgroundColor: '#f0f2f5'}}
    />
    </div>
  );
};

export default Home;
