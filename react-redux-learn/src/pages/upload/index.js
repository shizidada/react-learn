import React, { Component } from "react";
import ReactDropZone from "react-dropzone";

import "./index.less";

class Upload extends Component {
  handleDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  render() {
    return (
      <div className="upload-wrapper">
        <p className="upload-title">Upload Page</p>
        <ReactDropZone onDrop={this.handleDrop}>
          {({ getRootProps, getInputProps }) => {
            // console.log("getRootProps ==> ", getRootProps);
            // console.log("getInputProps ==> ", getInputProps);
            return (
              <div
                className="upload-file"
                // style={{ outline: "none" }}
                {...getRootProps()}
              >
                <input className="upload-file-input" {...getInputProps()} />
                <p>上传本地图片</p>
              </div>
            );
          }}
        </ReactDropZone>
        {/* // className="dropZoneStyles"
          // activeClassName="dragStyles"
          // acceptClassName="addDropZoneStyles" */}
        {/* <ReactDropZone
          accept="image/jpeg, image/png"
          multiple={true}
          className="dropzone-pick"
          onDrop={this.handleDrop}
        >
          <em className="upImgIcon" />
          <p className="ImgUpBenP">上传本地图片</p>
          <p>按住Ctrl可多选图片</p>
          <p>支持JPG/JPEG/PNG格式</p>
          <p>图片大小不得超过5M</p>
        </ReactDropZone> */}
      </div>
    );
  }
}

export default Upload;
