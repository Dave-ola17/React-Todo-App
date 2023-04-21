import react, { useState } from 'react'
import './App.css'
import styled from 'styled-components'



  // styling of components with react styled-components
  const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;    
  `;
  const Button = styled.button`
    background: linear-gradient(0deg, rgba(99, 102, 241, 0.04), rgba(99, 102, 241, 0.04)), #FFFFFF;
    border: 1px solid #4F46E5;
    border-radius: 4px;
    font-weight: 500;
    color: #312E81;
    padding: 10px;
    cursor: pointer;
  `;
  const TodoInput = styled.input`
    border: 2px solid #000;
    // outline: 10px solid lightGreen;    
  `;
  const TaskCount = styled.span`
    margin: 10px;
  `;
  const Tasks = styled.div`

  `;
  // const RedButton = styled.button`
  //   background: linear-gradient(0deg, rgba(255, 116, 101, 0.12), rgba(255, 116, 101, 0.12)), #FFFFFF;
  //   border: 1px solid #FF7465;
  //   border-radius: 4px;
  //   padding: 4px 12px;
  //   color: #FF7465;
  //   font-weight: 500;
  //   cursor: pointer;
  // `;

function App() {
  // const [count, setCount] = useState(0);
  // function startCount(){
  //   setCount(count + 1)
  // }
  // I use the following useState hook to store and manage changes to our list
  const [ input, setInput ] = useState("");
  const [ todoList, setTodoList ] = useState([]);
  const [ completedTaskCount, setCompletedTaskCount ] = useState(0);

  // handleClick function to add items to list
  const handleClick = () => {
    const id = todoList?.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("")
  };
  
  // handleComplete function, it will be used to change the state to either compete or pending
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if(task.id == id){
        if(!task.complete){
          setCompletedTaskCount(completedTaskCount + 1)
        }else{
          setCompletedTaskCount(completedTaskCount - 1)
        }
        item = {...task, complete: !task.complete};
      }else item = {...task }; 
      return item;    
    });
    setTodoList(list)
  };
  
  return (
    <div className="App">
      <ContainerDiv>
          <h2>Simple Todo-List</h2>
          <TodoInput placeholder='Enter Your List' value={input} onInput={(e) => {setInput(e.target.value)} } />
        <Button onClick={() => handleClick()} >Added  Items</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b>
          </TaskCount>
          <TaskCount>
            <b>Completed Tasks</b>
          </TaskCount>
        </Tasks>
        <div>
          <ul>
            {
              todoList?.map((todo) => {
                return(
                  <li
                  key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through"
                  }}
                  >
                    { todo.task }
                  </li>
                )
              })
            }
          </ul>
       </div>
        {/* <RedButton>Clear!</RedButton> */}
      </ContainerDiv>
    </div>
  )
}

export default App