// App.tsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SelectView from './views/SelectView';
import DropOffView from './views/DropoffView';  
import PickupfView from './views/PickupView';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectView />} />
        <Route path="/dropoff" element={<DropOffView />} />
        <Route path="/pickup" element={<PickupfView />} />
      </Routes>
    </div>
  );
};

export default App;
