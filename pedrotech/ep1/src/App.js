import './App.css';

function App() {
  return (
    <>
      <User name="Bill Kamau" age={26} email="bill@kamau.com"/>
      <User name="Eden Ngugo" age={34} email="edden@kamau.com"/>
      <User name="Bill Kamau" age={26} email="bill@kamau.com"/>
    </>
  );
}


const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}

export default App;
