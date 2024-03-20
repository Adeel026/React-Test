import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import logo from "../../Images/logo.png";
import home from "../../Images/home-2.png";
import time from "../../Images/calendar-2.png";
import chart from "../../Images/chart-square.png";
import book from "../../Images/book.png";
import clipboard from "../../Images/clipboard-text.png";
import vector from "../../Images/Vector.png";
import logout from "../../Images/logout.png";
import Announcements from "../Announcements/Anoucements";
import frame1 from "../../Images/Frame 1.png";
import frame2 from "../../Images/Frame 2.png";
import ProifleIcon from "../../Images/profile.png";
import UpcommingClasses from "../Upcomming Classes/UpcommingClasses";
import MyClasses from "../Class List/MyClasses";
import AssignmentCard from "../Assignment Card/AssignmentCard";

const { Header, Sider, Content } = Layout;

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={190}
        style={{ background: "white" }}
      >
        <div className="demo-logo-vertical" style={{ background: "white" }}>
          <img src={logo} alt="" style={{ width: "100%", height: "auto" }} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Menu.Item
            key="1"
            icon={<img src={home} alt="Dashboard" width={16} />}
            style={{
              color: "rgba(164, 29, 48, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<img src={time} width={16} alt="Dashboard" />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Time Table
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<img src={chart} width={16} alt="Dashboard" />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Student Reports
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<img src={book} width={16} alt="Dashboard" />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Assignments
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<img src={clipboard} width={16} alt="Dashboard" />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Quizzes
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<img src={vector} alt="Dashboard" width={16} />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 14,
              marginBottom: "20px",
            }}
          >
            Classroom
          </Menu.Item>
          <hr style={{
            width: '90%'
          }}/>
          <Menu.Item
            key="7"
            icon={<img src={logout} alt="Dashboard" width={17} />}
            style={{
              color: "rgba(145, 145, 145, 1)",
              fontFamily: "Poppins",
              fontSize: 15,
              marginBottom: "20px",
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 24px 0 0",
            background: colorBgContainer,
          }}
        >
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 30,
              marginRight: "auto",
            }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={frame1}
              width={35}
              alt=""
              style={{ marginRight: "8px" }}
            />
            <img
              src={frame2}
              width={35}
              alt=""
              style={{ marginRight: "8px" }}
            />
            <p style={{ margin: 0, marginRight: "8px" }}>John Smith</p>
            <img src={ProifleIcon} width={35} alt="" />
          </div>
        </Header>

        <Content
          style={{
            padding: 24,
            minHeight: 280,
            fontFamily: "Poppins",
            borderRadius: borderRadiusLG,
          }}
        >
          <h1
            style={{
              margin: 0,
            }}
          >
            Hello John! 👋
          </h1>
          <p>"Let's inspire and empower young minds. Have a fantastic day!"</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Announcements />
            <UpcommingClasses />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <MyClasses />
            <AssignmentCard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavBar;
