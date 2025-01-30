import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input, Typography } from "antd";

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login data:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard"); // Redirect to Home after login
    }, 1500);
  };

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", background: "#f5f5f5" }}>
      <Card style={{ width: 350, boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" }}>
        <Title level={2} style={{ textAlign: "center" }}>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please enter your username!" }]}>
            <Input placeholder="Enter username" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
