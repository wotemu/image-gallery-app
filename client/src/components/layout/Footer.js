import React from 'react';

export default () => {
  return (
    <footer className="nav nav-sticky-bottom bg-dark mt-5 p-3">
      <div className="container text-white text-center">
        <div
          className="row mb-4 mt-2 p-2"
          style={{ borderBottom: '1px white solid' }}
        >
          <div className="col-md-3 text-center">
            <a
              href="https://www.facebook.com/Wotemu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>{' '}
          </div>
          <div className="col-md-3 text-center">
            <a
              href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
              target="blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>{' '}
          </div>
          <div className="col-md-3 text-center">
            <a
              href="https://www.instagram.com/watch_arse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>{' '}
          </div>
          <div className="col-md-3 text-center">
            <a
              href="https://www.linkedin.com/in/workneh-tefera-tamire-6a7354118/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>{' '}
        <div className="row ">
          <div className="col m-auto text-center m-2 p-2">
            Copyright &copy; {new Date().getFullYear()} - wotemu@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};
