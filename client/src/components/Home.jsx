import React from 'react';
import FamiliesContainer from './FamiliesContainer.jsx';
import PostsContainer from './PostsContainer.jsx';
import UploadMedia from './UploadMedia.jsx';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import posts from '../dummyphotodata';
import family from '../dummyfamilydata';

const Home = (props) => (
  <Layout style={{flexDirection: 'column'}}>
    <Content style={{ background: '#fff', padding: 5 }}>
      <FamiliesContainer familyImages={family} />
    </Content>
    <Content style={{ background: '#f9f9f9', padding: 10 }}>
      <UploadMedia />
    </Content>
    <Content style={{background: '#f1f1f1', padding: 5, minHeight: 800}}>
      <PostsContainer posts={posts}/>
    </Content>
  </Layout>
);

export default Home;
