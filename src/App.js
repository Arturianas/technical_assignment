import { useState } from "react";
import './index.css'
import CategoryFilter from "./components/categoryFilter/CategoryFilter";
import Numbers from "./components/numbers/Numbers";


function App() {

const [toggle, setToggle] = useState('first_task')

  return (
    <>
      <div className="tasks">
        <span className="task" onClick={() => setToggle('first_task')}>First task</span>
        <span className="task" onClick={() => setToggle('second_task')}>Second task</span>
      </div>
      {toggle === 'first_task' && <Numbers/>}
      {toggle === 'second_task' && <CategoryFilter/>}
      {/* <CategoryFilter/> */}
      {/* <Numbers/> */}
    </>
  );
}

export default App;
