import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw ,convertFromRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class EditorContainer extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };
  

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });

    this.props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };




  render() {

    const { editorState } = this.state;
    const  contentState = this.props.body

    console.log(contentState)
    return (
      <div className="">
        <Editor 
          editorState={editorState}
          wrapperClassNamdangerouslySetInnerHTMLe="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}
