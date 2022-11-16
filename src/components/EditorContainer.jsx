import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,convertFromRaw} from "draft-js";

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
    const contentBlocks = htmlToDraft(initialState)
const contentState = ContentState.createFromBlockArray(contentBlocks)
const rawHtml = convertToRaw(contentState)

    const { editorState } = this.state;
    
    console.log(editorState)

    return (
      <div className="">
        <Editor 
          editorState={editorState}
          wrapperClassName="demo-wrapper"
         editorClassName="template-editor"
          wrapperClassNamdangerouslySetInnerHTMLe="wrapperClassName"
          onEditorStateChange={this.onEditorStateChange}

        />
      </div>
    );
  }
}
