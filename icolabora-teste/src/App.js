import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
