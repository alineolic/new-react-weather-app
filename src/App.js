import './App.css';
import Weather from "./Weather";

export default function App() {

  return (
    <div className="App">
<div className="container">
<Weather />
<br />
        <footer>
          This project was coded by <a href="https://www.alineclaudio.com" target="_blank"> Aline Claudio</a> and is open-sourced on <a href="https://github.com/alineolic/new-react-weather-app" target="_blank">GitHub</a> and hosted on <a href="https://app.netlify.com/" target="_blank">Netlify</a>.
        </footer>
</div>
    </div>
  );
}