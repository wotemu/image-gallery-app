import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../../actions/postActions';
import ReadMore from './ReadMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const PostList = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const postItem =
    posts.length === 0 ? (
      <h5 className="">No images to display</h5>
    ) : (
      posts.map((post) => (
        <div className="col-lg-3 col-md-4 col-sm-12" key={post._id}>
          <Link to={`/post/${post._id}`}>
            <Carousel
              infiniteLoop
              useKeyboardArrows
              autoPlay
              showThumbs={false}
            >
              {post.filePath.map((image, index) => (
                <div key={index}>
                  <img
                    style={{ maxHeight: '300px' }}
                    src={image}
                    alt="myImage"
                    className="img-fluid"
                  />
                </div>
              ))}
            </Carousel>

            <p
              style={{
                textAlign: 'justify',
                paddingTop: '10px',
                color: 'black'
              }}
            >
              <ReadMore more={post.text} />{' '}
            </p>
          </Link>
        </div>
      ))
    );

  return <div className="row mt-3">{postItem}</div>;
};

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(PostList);
