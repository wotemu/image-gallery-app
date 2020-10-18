import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from '../posts/details/PostsList';

const Landing = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <section className="top-container">
        <header className="showcase">
          <h1>Image sliding App</h1>
          <h3>Uploaing Images to cloudinary and saving into Mongodb</h3>
        </header>

        <div className="top-box top-box-a">
          <Link className="nav-link" to="/posts">
            <i className="fas fa-rss fa-3x"></i>
          </Link>
        </div>

        <div className="top-box top-box-b">
          <Link className="nav-link" to="/gallery">
            <i className="fas fa-image fa-3x"></i>
          </Link>
        </div>
      </section>
      <section className="section-About-us">
        <h3>My Gallery</h3>
      </section>
      <div className="mt-3">
        <PostList />
      </div>

      <section className="section-About-us">
        <h3>Portfolios</h3>
      </section>
      <section className="portfolio">
        <img src="https://source.unsplash.com/random/200x200" alt="" />
        <img src="https://source.unsplash.com/random/201x200" alt="" />
        <img src="https://source.unsplash.com/random/202x200" alt="" />
        <img src="https://source.unsplash.com/random/203x200" alt="" />
        <img src="https://source.unsplash.com/random/204x200" alt="" />
        <img src="https://source.unsplash.com/random/205x200" alt="" />
        <img src="https://source.unsplash.com/random/206x200" alt="" />
        <img src="https://source.unsplash.com/random/207x200" alt="" />
        <img src="https://source.unsplash.com/random/208x200" alt="" />
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
