import React from "react";

class Todo extends React.Component {
  render() {
    let { task, arrTasks } = this.props.task;
    console.log(">>>Check props:", this.props);
    console.log(">>>Check task:", task);
    console.log(">>>Check arrTasks:", arrTasks);
    return (
      <>
        <div>
          <p>There are my tasks</p>
          <div className="input-div">
            <input
              type="text"
              className="form-control"
              placeholder="Input task here"
              value={task}
              onChange={(event) => {
                this.props.handleOnchangeTask(event);
              }}
            />
            <button
              className="btn btn-primary"
              disabled={!task}
              onClick={() => this.props.handleOnclickAdd()}
            >
              Add
            </button>
          </div>
          <br />
          {arrTasks.map((item, index) => {
            return (
              <div className="item-div list-group" key={item.id}>
                <a className="list-group-item">{item.title}</a>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.handleOnClickDel(item.id)}
                >
                  Del
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Todo;
