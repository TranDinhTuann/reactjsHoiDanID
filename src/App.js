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
        <img src={logo} className="App-logo" alt="logo" width={'200px'} />
        <p>
          Trần Đình Tuấn đến đây
        </p>
      <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
