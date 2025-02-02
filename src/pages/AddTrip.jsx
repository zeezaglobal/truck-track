import React from "react";
import { Button, DatePicker, Form, Input, Radio, Select, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const AddTrip = () => {
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600, marginTop: 20 }}
    >
      {/* Vehicle Number */}
      <Form.Item label="Vehicle Number">
        <Select placeholder="Select Vehicle Number">
          <Select.Option value="KA01AB1234">KA01AB1234</Select.Option>
          <Select.Option value="TN10XY5678">TN10XY5678</Select.Option>
        </Select>
      </Form.Item>

      {/* Vehicle Type */}
      <Form.Item label="Vehicle Type">
        <Select placeholder="Select Vehicle Type">
          <Select.Option value="Truck">Truck</Select.Option>
          <Select.Option value="Bus">Bus</Select.Option>
        </Select>
      </Form.Item>

      {/* Trip Route with Start and End */}
      <Form.Item label="Trip Route">
        <Space>
          <Input placeholder="Start Route" />
          <ArrowRightOutlined />
          <Input placeholder="End Route" />
        </Space>
      </Form.Item>

      {/* Status Selection */}
      <Form.Item label="Status">
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="ongoing">Ongoing</Radio.Button>
          <Radio.Button value="completed">Completed</Radio.Button>
          <Radio.Button value="pending">Pending</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {/* Date Selection */}
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>

      {/* Driver Name */}
      <Form.Item label="Driver Name">
        <Input placeholder="Enter Driver Name" />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item wrapperCol={{ offset: 6 }}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default () => <AddTrip />;
