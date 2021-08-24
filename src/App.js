import {useState} from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Users from './Users';

function App() {
  const [classComp, setClassComp] = useState(true);
  const [funcComp, setFuncComp] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setClassComp(!classComp)}>Toggle Class Comp</button>
      {classComp && <ClassComponent />}
      <button onClick={() => setFuncComp(!funcComp)}>Toggle Func Comp</button>
      {funcComp && <FunctionalComponent />} */}
      <Users />
    </div>
  );
}

export default App;
