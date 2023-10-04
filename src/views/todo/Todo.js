import React from "react";

class Todo extends React.Component {
  render() {
    let { task, arrTasks, editTask } = this.props.task;
    let editTaskIsEmpty = Object.keys(editTask).length === 0;
    console.log(">>>Check props:", this.props);
    console.log(">>>Check task:", task);
    console.log(">>>Check arrTasks:", arrTasks);
    return (
      <>
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
              <span className="item-span list-group-item">
                {editTaskIsEmpty ? (
                  <>
                    <span className="task-title">{item.title}</span>
                  </>
                ) : editTask.id === item.id ? (
                  <>
                    <input
                      type="text"
                      className="form-control"
                      value={editTask.title}
                      onChange={(event) =>
                        this.props.handleOnchangeEditTask(event, item)
                      }
                    />
                  </>
                ) : (
                  <>
                    <span className="task-title">{item.title}</span>
                  </>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.handleOnClickEdit(item)}
                >
                  {!editTaskIsEmpty && item.id === editTask.id ? (
                    <>Save</>
                  ) : (
                    <>Edit</>
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.props.handleOnClickDel(item.id)}
                >
                  Del
                </button>
              </span>
            </div>
          );
        })}
      </>
    );
  }
}
export default Todo;
