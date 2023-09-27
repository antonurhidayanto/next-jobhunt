"use client"
import './main.css'
import { Button, ConfigProvider,Typography,Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import theme from '@/utils/themeConfig';
import '@/style/master.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog, updateBlogDetail } from '@/redux/blog/action';
import { useEffect } from 'react';

const { Title,Text } = Typography;

export default function Home() {
  const {blog} = useSelector(state=>state.blog)
  const dispatch = useDispatch()
  const updateData = ()=>{
    dispatch(updateBlog())
  }
  const updateDataDetail = ()=>{
    const data = [{
      title:"test",
      description:"test"
    }]
    dispatch(updateBlogDetail(data))
  }
  useEffect(()=>{
    console.log(blog)
  },[blog])
  const mainStyle = {
    background:"blue",
    border:"1px solid #000",
    width:100,
    height:100
  }
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Button type="primary" onClick={()=>updateData()}>Update Blog</Button>
        <Button type="primary" size='large' onClick={()=>updateDataDetail()}>Button</Button>
        <Button type="primary" size='small'>Button</Button>
      </div>
      <div className='font-div'>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
        <Text>Ant Design (default)</Text>
      </div>
      <div className='input-div'>
        <Input placeholder="Basic usage" />
        <Input prefix={<SearchOutlined />} suffix={<SearchOutlined/>}/>
      </div>
    </ConfigProvider>
  )
}
