"use client"
import React, { useState } from "react"

const Todo = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}]);

    setTask("")
    setDesc("")
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2 className="p-4"> No Task Available </h2>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) =>{
      return(
      <div>
        <br/>
        <li className="text-lg px-8 font-medium">{t.task}</li>
        <li className="text-base px-10 text-gray-500">{t.desc}</li>
        <button onClick={()=>deleteHandler(i)} className="bg-red-300 hover:bg-red-600 text-white mx-6 mt-2 h-10 px-2">Delete Above Task</button>
        <br/>
      </div>
      );
    });
  }

  return (
    <>
      <h1 className="w-full bg-red-300 font-semibold h-auto text-center text-4xl py-6">
        Shubham's ToDo List
      </h1>
      <form onSubmit={handleSubmit}>
      <input type="text"
      className="bg-slate-200 text-black border-1 h-12 w-54 border-black m-4 p-2"
      placeholder="Enter Task Name Here"
      value={task}
      onChange={ (e) =>{
        setTask(e.target.value)
      }}
      />
      <input type="text"
      className="bg-slate-200 text-black border-1 h-12 w-54 border-black m-4 p-2"
      placeholder="Enter Task Description Here"
      value={desc}
      onChange={ (e) =>{
        setDesc(e.target.value)
      }}
      />
      <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-500 text-white h-12 font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>

      <hr/>
      <div>
      <ul className="list-none list-inside">
        {renderTask}
      </ul>
</div>
    </>
  )
}

export default Todo
