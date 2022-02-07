import React, {useState} from 'react';
import CargarArchivos from './components/Carga';

function App() {
  const [archivos, setArchivos] = useState(null);
  return (
    <div>
      <CargarArchivos archivos={archivos} setArchivos={setArchivos} />
    </div>
  );
}

export default App;
