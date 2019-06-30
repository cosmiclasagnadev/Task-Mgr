import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

const TasksView = ({ loading, tasks }) => {
  if (loading) {
    return <h2 className='text-center'>Loading...</h2>;
  } else {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1rem"
        }}
      >
        {tasks &&
          tasks.map(task => (
            <Task
              key={task.id}
              title={task.title}
              todo={task.todo}
              notes={task.notes}
            />
          ))}
      </div>
    );
  }
};

TasksView.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default TasksView;
