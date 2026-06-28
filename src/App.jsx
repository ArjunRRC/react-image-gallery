import './App.css'


function App(props) {

  return (
  <>
  <div className="card">
  <img src={props.image} alt={props.title} />
  <h1>{props.title}</h1>
  <div className="overlay"></div>
  </div>
  </>

);

}

export default App
