import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import Todo from '../components/Todo';

function Home ({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={textHandler} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <Todo {...toDo} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreator.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);