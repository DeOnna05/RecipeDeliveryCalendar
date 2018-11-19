import React, { Component } from 'react';
import * as $ from 'axios';
import './app.css';
import Note from './components/Note';

class App extends Component {

  state = {
    notesList: [],
    newNote: ''
  }

  deleteHandler = (event) => {
    $.delete(`/api/notes/${event.target.value}`)
    .then(() => {
      this.getNotes();
    })
  }

  handleChange = (event) => {
    this.setState({newNote: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();
    $.post('/api/notes', {content: this.state.newNote})
    .then( () => {
      this.getNotes();
    })
  }

  getNotes = () => {
    $.get('/api/notes')
    .then((result) => {
      this.setState({notesList: result.data})
    })
  }

  componentDidMount(){
    this.getNotes();
  }

  render() {
    return (
      <div className="App">
        <form>
          <input value={this.state.newNote} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.state.notesList.map(note => 
          (
            <Note 
              content={note.content} 
              key={note._id}
              value={note._id}
              clickHandler={this.deleteHandler}
            />
          )
        )}
      </div>
    );
  }
}

export default App;
