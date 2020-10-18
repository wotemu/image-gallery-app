import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import FileUpload from './FileUpload';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      filePath: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let formData = {
      text: this.state.text,
      filePath: this.state.filePath
    };

    this.props.addPost(formData);
    this.setState({ text: '', filePath: '' });
    window.location = '/gallery';
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateImages = (newImages) => {
    this.setState({ filePath: newImages });
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto bg-info">
          <h2 className="text-center p-2">Add Photo Form</h2>
          <form onSubmit={this.onSubmit} className="p-3">
            <div className="post-form ">
              <TextAreaFieldGroup
                placeholder="Say something about the photo"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
                className="border-0"
              />
              <FileUpload refreshFunction={this.updateImages} />
              <div
                className="pt-1 text-center pt-3"
                style={{ borderTop: '1px solid white' }}
              >
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
