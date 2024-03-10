import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { IoIosColorFill } from "react-icons/io";
import { RiListOrdered2 } from "react-icons/ri"
import { MdArticle } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdLiveHelp } from "react-icons/md";
import { Outlet } from 'react-router-dom';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
            <img className='lg-logo' src='images/lesshopylogo.png' alt='lesshopy logo'/>
            <img className='sm-logo' src='images/logo.png' alt='lesshopy logo'/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
              if(key==="signout"){

              }else{
                navigate(key)
              }
          }}
          items={[
            {
              key: '',
              icon: <MdDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <FaUsers />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <FaCartPlus />,
              label: 'Catalog',
              children: [
                {
                  key: 'add-product',
                  icon: <FaCartPlus />,
                  label: 'Add Products',
                },
                {
                  key: 'all-products',
                  icon: <FaCartPlus />,
                  label: 'All Products',
                },
                {
                  key: 'add-category',
                  icon: <MdCategory />,
                  label: 'Add Category',
                },
                {
                  key: 'all-category',
                  icon: <MdCategory />,
                  label: 'All Category',
                },
                {
                  key: 'add-brands',
                  icon: <SiBrandfolder />,
                  label: 'Add Brands',
                },
                    {
                  key: 'all-brands',
                  icon: <SiBrandfolder />,
                  label: 'All Brands',
                },
                {
                  key: 'add-colors',
                  icon: <IoIosColorFill />,
                  label: 'Add Colors',
                },
                    {
                  key: 'all-colors',
                  icon: <IoIosColorFill />,
                  label: 'All Colors',
                },
              ]
            },
            {
              key: 'orders',
              icon: <RiListOrdered2 />,
              label: 'Orders',
            },
            {
              key: 'Blog',
              icon: <MdArticle />,
              label: 'Blog',
              children: [
                {
                  key: 'add-blog',
                  icon: <MdArticle />,
                  label: 'Add Blog Post',
                },
                {
                  key: 'all-blogs',
                  icon: <MdArticle />,
                  label: 'All Blogs',
                },
                {
                  key: 'add-blog-category',
                  icon: <BiSolidCategoryAlt />,
                  label: 'Add Category',
                },
                {
                  key: 'blog-categories',
                  icon: <BiSolidCategoryAlt />,
                  label: 'All Categories',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <MdLiveHelp />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='flex justify-between'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <BsBoxArrowInRight /> : <BsBoxArrowInLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '22px',
              width: 64,
              height: 64,
            }}
          />
          <div className='pr-8 flex gap-2 justify-center items-center'>
              <div className='relative mx-3 cursor-pointer'>
                  <span className='notification'>2</span>
                  <IoNotifications className='text-2xl' />
              </div>
              <div>
                  <div>
                      <img className='w-8' src='images/logo.png' alt='user profile'/>
                  </div>
              </div>
              <div>
                  <div className='admin-info flex flex-col justify-center'>
                      <h3>Dheeru Rajpoot</h3>
                      <p>rajpootdheeru90@gmail.com</p>
                  </div>
              </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;