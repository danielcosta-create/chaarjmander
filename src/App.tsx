import './App.css'

function App() {
  const text = 'sua boca parece tão gostosa';

  const handleClick = () => {
    alert(text);
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>click me, @chaarjmander</button>
      </div>
    </>
  )
}

export default App
