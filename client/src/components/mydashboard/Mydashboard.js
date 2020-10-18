import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AvatarImage from '../../img/avatar.jpg';

const Dashboard = ({ auth: { user } }) => {
  return (
    <div className="dashboard">
      <h4 className="dashbord-header">Dashboard </h4>

      <div className="dashbord-img">
        <img src={AvatarImage} alt="" />

        <span className="pl-3">{user && user.name} </span>
      </div>

      <div className="dashbord-content">
        <h2 style={{ color: 'black' }}> Now You can </h2>
        <h5 style={{ color: 'black' }}> Read Feeds </h5>
        <h5 style={{ color: 'black' }}> View galleries </h5>
        <h5 style={{ color: 'black' }}> Like, comment photos </h5>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
