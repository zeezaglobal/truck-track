import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const Expenses = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [expenses, setExpenses] = useState([]);

  const columns = [
    { title: "Rent", dataIndex: "rent", key: "rent", render: (value) => `₹${value}` },
    { title: "Driver Bata", dataIndex: "driverBata", key: "driverBata", render: (value) => `₹${value}` },
    { title: "Diesel", dataIndex: "diesel", key: "diesel", render: (value) => `₹${value}` },
    { title: "Maintenance", dataIndex: "maintenance", key: "maintenance", render: (value) => `₹${value}` },
    { title: "Other", dataIndex: "other", key: "other", render: (value) => `₹${value}` },
    { title: "Remark", dataIndex: "remark", key: "remark" },
  ];

  const handleAddExpense = () => {
    form.validateFields().then((values) => {
      setExpenses([...expenses, { key: expenses.length + 1, ...values }]);
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  return (
    <div style={{ padding: "20px", background: "#f0f2f5" }}>
      <h1 style={{ textAlign: "center", color: "#1890ff" }}>Expenses</h1>
      <Table
        columns={columns}
        dataSource={expenses}
        pagination={{ pageSize: 5 }}
        bordered
        size="middle"
        scroll={{ x: true }}
      />
      
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        style={{ position: "fixed", bottom: 24, right: 24 }}
        onClick={() => setIsModalVisible(true)}
      >
        Add Expense
      </Button>

      <Modal
        title="Add New Expense"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleAddExpense}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="rent" label="Rent" rules={[{ required: true, message: "Required!" }]}> 
            <InputNumber style={{ width: "100%" }} formatter={(value) => `₹${value}`} parser={(value) => value.replace('₹', '')} />
          </Form.Item>
          <Form.Item name="driverBata" label="Driver Bata" rules={[{ required: true, message: "Required!" }]}> 
            <InputNumber style={{ width: "100%" }} formatter={(value) => `₹${value}`} parser={(value) => value.replace('₹', '')} />
          </Form.Item>
          <Form.Item name="diesel" label="Diesel" rules={[{ required: true, message: "Required!" }]}> 
            <InputNumber style={{ width: "100%" }} formatter={(value) => `₹${value}`} parser={(value) => value.replace('₹', '')} />
          </Form.Item>
          <Form.Item name="maintenance" label="Maintenance" rules={[{ required: true, message: "Required!" }]}> 
            <InputNumber style={{ width: "100%" }} formatter={(value) => `₹${value}`} parser={(value) => value.replace('₹', '')} />
          </Form.Item>
          <Form.Item name="other" label="Other"> 
            <InputNumber style={{ width: "100%" }} formatter={(value) => `₹${value}`} parser={(value) => value.replace('₹', '')} />
          </Form.Item>
          <Form.Item name="remark" label="Remark"> 
            <Input.TextArea rows={2} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Expenses;
