import "./App.css";

function App() {
  const currentYear = new Date().getFullYear();
  var isLoggedIn = false;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default App;
