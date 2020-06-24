import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MarkedownView = () => {
  return (
    <div className="markedown-view-container">
      <Editor />
    </div>
  );
};
export default MarkedownView;
