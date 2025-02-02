import { Layout, Menu } from 'antd';
import { useState } from 'react';
import Home from "./Home";

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('1'); // Track selected menu item

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key); // Update selected menu based on click
  };

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedMenu]} // Highlight the selected menu
          onClick={handleMenuClick}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Trip Details</Menu.Item>
          <Menu.Item key="3">Add Trip</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', flex: 1 }}>
        {selectedMenu === '1' && <Home />} {/* Only render Home when "Dashboard" is selected */}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Developed by ZeezaGlobal
      </Footer>
    </Layout>
  );
};

export default Dashboard;
