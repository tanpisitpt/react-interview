import './App.css';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <main className="main">
        <div className="menu"></div>
        <div className="content"></div>
      </main>
    </div>
  );
}

export default App;
