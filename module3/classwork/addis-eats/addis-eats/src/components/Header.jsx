import "../css/style.css";
import useState from 'react';
import {useEffect} from 'react';
function Header() {
  useEffect(() => [console.log("abebe")]) //it use 2 parameter , 1st side effect(callback function or arrow function ), 2nd  dependency array ( it describe when is apply this function )

  //there is 3 way  useeffect(task, []) --- at a component mounting ( referesh )         useffect(task) --every time  for every data change        useffect(task, [y]) --when the value of y is changed
  return (
    <div>
      <h1>My First React App</h1>
    </div>
  );
}

export default Header;
