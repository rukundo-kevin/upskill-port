import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import Header from "./components/Header";
import './index.css';

const Todo = () =>{
    const [todos, addTodos] = useState([]);
    const [error, setError] = useState("")
    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const handleClick = (e) =>{
        e.preventDefault();
        if (!todo) {
          setError("Todo empty")     
          return;
        }
        todos.forEach(t=>{
          if(t.text === todo) {
            setError("New Todo already in the list")
          }
          return;
        })
        !error && addTodos([...todos, {text: todo, completed: false}]);
        setTodo("");
        setError("")
    }

    const handleRemove = (e) => {
      const id = (e.target.parentNode.parentNode).id;
        const newTodos = todos.filter((todo, index) => index !== +id
        );
        addTodos(newTodos);
    }
  const customStyle = {marginTop: "-4em", paddingTop:"1em"};
 return(
    <>   
    <Header customStyle={customStyle}/>
  <div id="how" className="howTodo">
    <div>
      <h1>ToDo App</h1>
    </div>
    <div className="last" style={{marginLeft:"24em"}}>
      {error && (<div className="error" style={{display: "block"}}>
            Error:{error}
       </div>)}
      <form  action="#" className="" method="post" id="contact-form">
        <div className="form-item">
          <input  type="text" name="todoInput" value={todo} id="todoInput" onChange={handleChange} placeholder="Enter new to do" />
          {/* <label>New Todo</label> */}
        </div>

        <button className="btn" style={{marginTop:"2px"}} onClick={handleClick}><span>Add New To Do </span>  </button>
      </form>
         <div className="todoContainer">
          {todos.length !== 0?
                (todos.map((todo, index) => {
                    return(
                        <div key={index} className="todo">
                            <p>{todo.text}</p>
                            <div  id={index} >
                            <IconContext.Provider value={{ color: "#ee354b", className: "liIcon" }}>
                                <FaTimes onClick={handleRemove}/>
                            </IconContext.Provider>
                            </div>
                        </div>
                    )
                }))
           :<div className="error" style={{display: "block"}}>
          Horray: No Todos Currently
      </div> }
         </div>
      </div>
    </div>
      </>
 )
}

export default Todo;
