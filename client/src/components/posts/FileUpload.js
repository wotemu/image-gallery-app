import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import api from '../../utils/api';

const FileUpload = (props) => {
  const [filePath, setFilePath] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    };
    formData.append('file', files[0]);
    //save the Image we chose inside the Node Server and cloudinary

    api.post('/posts/image', formData, config).then((res) => {
      if (res.data.success) {
        setFilePath([...filePath, res.data.filePath]);
        props.refreshFunction([...filePath, res.data.filePath]);
      } else {
        alert('Failed to upload!');
      }
    });
  };

  const onDelete = (image) => {
    const currentIndex = filePath.indexOf(image);

    let newImages = [...filePath];
    newImages.splice(currentIndex, 1);

    setFilePath(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <i className="fas fa-upload fa-2x" title="Upload photo"></i>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: filePath.length > 0 ? '240px' : '110px',
          overflowX: 'scroll'
        }}
      >
        {filePath.map((image, index) => (
          <div onClick={() => onDelete(image)} key={index}>
            <img
              style={{ width: '200px', height: '140px' }}
              src={image}
              alt={`myimage-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
