import './App.css'

function App() {
  function handleClick() {
    alert('Button clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {
        alert('Third clicked');
      }}>Third</button>
      <button onClick={() => addToFive(2)}>Four</button>
    </>


  )
}

export default App
