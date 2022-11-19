import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class EditorContainer extends Component {
  initEditorState = (markup) => {
    if (markup === undefined) return EditorState.createEmpty();
    const blocksFromHTML = convertFromHTML(markup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    return EditorState.createWithContent(state);

  };

  state = {
    editorState: this.initEditorState(this.props?.body),
  };

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });

    this.props.onChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  render() {
    const { editorState } = this.state;


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
