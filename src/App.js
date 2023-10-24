import logo from "./logo.svg";
import "./App.css";
function EventTest(props) {
  return(
  <h2 onClick={function(event){
    event.preventDefault();
    props.myevent();
  }}>Event Praticing</h2>
  )
}

//event가 발생되면서 호출되는 function으로 event object가 전달.
function runEvent(e){
  e.preventDefault();
  console.log("event occured.");
}

function App() {
  return (
    <div>
      <h1>Practice Event in React</h1>
      <hr />
      <EventTest myevent={function(){
        alert("event occured.");
      }}></EventTest>
      <button onClick={runEvent}>Event Paracticing2</button>
    </div>
  );
}

export default App;
