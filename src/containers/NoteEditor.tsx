import React, { Component } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { INote, IState } from "../constants/types";
import { Dispatch } from "redux";
import { swapNote, updateNote } from "../actions";
import { connect } from "react-redux";

interface INoteEditorProps {
  note: INote;
  updateNote: Function;
  swapNote: Function;
}

class NoteEditor extends Component<INoteEditorProps> {
  state = {
    value: "",
  };

  render() {
    const { note } = this.props;
    return <CodeMirror value={note.text} />;
  }
}

const mapStateToProps = (state: IState) => ({
  note: state.notes.find((note) => note.id === state.active),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateNote: (note: INote) => dispatch(updateNote(note)),
  swapNote: (note: INote) => dispatch(swapNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor as any);
