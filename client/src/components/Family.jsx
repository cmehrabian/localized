import React from 'react';
import dummydata from '../dummydata';
import '../styles.css';

const Family = (props) => (
  <div>
    <div className="family-member-image" style={{backgroundImage: `url(${props.member.image})`}}></div>
    <div className="family-member-name">Member</div>
  </div>
);

export default Family;
