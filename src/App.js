import './App.css';
import Search from './Components/Search.jsx';
import CurrentWeather from './Components/CurrentWeather/CurrentWeather.jsx';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="main-container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
