import React from 'react';
import { Modal, Steps, Dropdown, Button, Table } from 'antd';

const description = 'This is a description.';

const VehicleDetailsModal = ({ visible, onClose, vehicle }) => {
  if (!vehicle) return null;

  const menuProps = {
    items: [
      { key: '1', label: 'ERODE - GOBICHETTIPALAYAM' },
      { key: '2', label: 'POLLACHI - DHARAPURAM' },
    ],
  };

  const handleButtonClick = (e) => {
    console.log('Dropdown button clicked:', e);
  };

  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Route Start', dataIndex: 'routeStart', key: 'routeStart' },
    { title: 'Route End', dataIndex: 'routeEnd', key: 'routeEnd' },
    { title: 'KM', dataIndex: 'km', key: 'km' },
    { title: 'Toll', dataIndex: 'toll', key: 'toll' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  ];

  const data = [
    {
      key: '1',
      date: '2025-02-01',
      routeStart: 'ERODE',
      routeEnd: 'POLLACHI',
      km: 150,
      toll: 100,
      amount: 1200,
    },
    {
      key: '2',
      date: '2025-02-02',
      routeStart: 'GOBICHETTIPALAYAM',
      routeEnd: 'DHARAPURAM',
      km: 180,
      toll: 150,
      amount: 1500,
    },
  ];

  return (
    <Modal
      title="Vehicle Details"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800} // Increase the width of the modal
    >
      <Steps
        current={0}
        direction="horizontal"
        size="default"
        items={[
          {
            title: 'Not In Trip',
            description,
          },
          {
            title: 'In Trip',
            description,
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Reached',
            description,
          },
        ]}
      />

      <div style={{ marginTop: 20 }}>
        <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
          Select Route
        </Dropdown.Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        style={{ marginTop: 20 }}
        pagination={false}
      />
    </Modal>
  );
};

export default VehicleDetailsModal;
