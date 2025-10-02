import CardScientist from './Components/CardScientist';
import { Scientists } from '../Data/Scientists';
import './App.css'

function App() {
     return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Cientificos notables</h1>
      {Scientists.map((Scientist, index) => (
        <CardScientist
          key={index}
          name={Scientist.name}
          image={Scientist.image}
          profession={Scientist.profession}
          awards={Scientist.awards}
          discoveries={Scientist.discoveries}
        />
      ))}
    </div>
  );
}

export default App
