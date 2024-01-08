import logo from './logo.svg';
import './App.css';
import MyComponent from './views/Example/MyComponent';

// 2 component : 
// class componenet 
// function component (function, arrow(const app () => {})) 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trần Đình Tuấn đây đây
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
