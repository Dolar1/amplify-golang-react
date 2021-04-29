import logo from './logo.svg';
import './App.css';
import MyCharts from './components/chart_page'

function App() {
  return (
    <div className="App">
            <h1>DynamoDb Cupcake Count Data</h1>
            <h3>Using Go Lang To Get DynamoDb Data</h3> 
            <MyCharts/>
    </div>
  );
}

export default App;
