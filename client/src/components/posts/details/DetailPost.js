import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import Spinner from '../../layout/Spinner';

import { getPost } from '../../../actions/postActions';

const DetailPost = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row m-2">
        <Link to="/">
          <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
        </Link>
      </div>
      <div className="row">
        <PostItem post={post} showActions={true} />
      </div>
    </div>
  );
};

DetailPost.propTypes = {
  getBlog: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(DetailPost);
