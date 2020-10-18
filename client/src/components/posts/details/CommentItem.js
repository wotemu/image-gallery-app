import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../../actions/postActions';

import AvatarImage from '../../../img/avatar.jpg';

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment
}) => (
  <div className="col p-2">
    <p style={{ textAlign: 'justify', color: 'black' }}>{text}</p>
    <p className="post-avatar pt-2" style={{ textAlign: 'justify' }}>
      <span className="pl-2">
        <img className="avatar" src={AvatarImage} alt="" />
      </span>
      <span className="pl-2">Comment by: </span>{' '}
      <span className="pl-2">{name}</span>
      <span>on</span>
      <span className="pl-2">
        <Moment format="MMM DD, YYYY">{date}</Moment>
      </span>
      <span className="pl-2">
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type="button"
            className=" btn-red"
          >
            <i className="fas fa-times fa-sm"></i>
          </button>
        )}{' '}
      </span>
    </p>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
