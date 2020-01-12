import React from 'react';

export class AddTodo extends React.Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo}>
          <input
            className="form-control"
            placeholder="Add todo"
            ref={this.props.inputElement}
            value={this.props.currentTodo.content}
            onChange={this.props.handleInput}
          />
          <button type="submit" className="btn btn-primary">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
