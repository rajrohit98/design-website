import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import BasicTable from './components/BasicTable';
import BarChart from './components/BarChart';

function App() {
  return (
    <div>
      <Navigation />
      <div style={{display: 'flex'}}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <BasicTable />
      {/* <BarChart /> */}
    </div>
  );
}

export default App;
