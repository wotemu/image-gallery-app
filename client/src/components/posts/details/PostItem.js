import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

import { deletePost, addLike, removeLike } from '../../../actions/postActions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, user, likes, comments, date, filePath },
  showActions
}) => {
  const [displayFeeds, setDisplayFeeds] = useState(false);
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const createDate = new Date(date);
  const dateNow = new Date();
  const diffTime = Math.abs(dateNow - createDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="container m-2">
      <div className="row">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          {filePath.map((image, index) => (
            <div key={index}>
              <img
                style={{ maxHeight: '700px' }}
                src={image}
                alt="myImage"
                className="img-fluid"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="row ">
        <div className="col mt-3">
          <p style={{ textAlign: 'justify', color: 'black', padding: '20px' }}>
            {text}
          </p>
        </div>
      </div>{' '}
      <hr />
      <div className="row">
        <div className="col">
          <p style={{ textAlign: 'justify', color: 'black', padding: '20px' }}>
            <span className="">
              {showActions ? (
                <span>
                  <button
                    onClick={() => addLike(_id)}
                    type="button"
                    className="btn-small"
                  >
                    <i className="fas fa-thumbs-up" />{' '}
                    <span>
                      {likes.length > 0 && <span>{likes.length}</span>}
                    </span>
                  </button>
                  <button
                    onClick={() => removeLike(_id)}
                    type="button"
                    className="btn-small "
                  >
                    <i className="text-secondary fas fa-thumbs-down" />
                  </button>
                  <button
                    className="btn-small"
                    onClick={() => {
                      setDisplayCommentForm((prevState) => ({
                        displayCommentForm: !prevState.displayCommentForm
                      }));
                    }}
                  >
                    comment <i className="fas fa-comment "></i>
                    <span className="badge badge-light">{comments.length}</span>
                  </button>

                  {!auth.loading && user === auth.user._id && user.isAdmin && (
                    <button
                      onClick={() => deletePost(_id)}
                      type="button"
                      className=" btn-red"
                    >
                      <i className="fas fa-times fa-sm"></i>
                    </button>
                  )}
                </span>
              ) : null}
            </span>{' '}
            <span className="">
              <button className=" btn-small ">{diffDays} views</button>
              <button className=" btn-small ">
                <Moment format="MMM DD, YYYY">{createDate}</Moment>
              </button>
            </span>
          </p>
        </div>
      </div>{' '}
      <div className="row">
        <div className="col">
          {displayCommentForm && (
            <div>
              <CommentForm postId={_id} />
              <div className="">
                <button
                  type="button"
                  onClick={() => {
                    setDisplayFeeds((prevState) => ({
                      displayFeeds: !prevState.displayFeeds
                    }));
                  }}
                  className="btn-small "
                >
                  View Comments <i className="fas fa-chevron-circle-down "></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        {displayFeeds && <CommentFeed postId={_id} comments={comments} />}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
