import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState} from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function EditorContainer(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
 console.log(editorState)
  return (
    <>
      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-3">
        Submit
      </button>
    </>
  );
}
