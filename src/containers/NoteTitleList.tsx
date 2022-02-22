import React from "react";
import { connect } from "react-redux";
import { INotes, IState } from "../constants/types";

const NoteTitleList = (props: { notes: INotes }) => {
  const { notes } = props;

  return (
    <aside className="sidebar">
      <div className="note-list">
        {notes.map((note) => {
          const title =
            note.text.indexOf("\n") !== -1
              ? note.text.slice(0, note.text.indexOf("\n"))
              : note.text.slice(0, 50);
          return (
            <div className="note-title" key={note.id}>
              {title}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default connect((state: IState) => ({
  notes: state.notes,
}))(NoteTitleList);
