import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, TruckOutlined } from '@ant-design/icons';
import Option1 from '../pages/Home';
import Option2 from '../pages/About';
const { Sider, Content } = Layout;
const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" style={{ color: "white", textAlign: "center", padding: "16px" }}>
            Truck Management
          </div>
        <Menu
        theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined /> }>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<TruckOutlined /> }>
            Trucks
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
      <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {selectedKey === '1' && <Option1 />}
          {selectedKey === '2' && <Option2 />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;