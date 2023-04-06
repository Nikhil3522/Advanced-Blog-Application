import './App.css';
import Navigator from './Routes/Navigator';
import { Provider } from 'react-redux';
function App() {
  return (
    // <h1>fvs</h1>
    // <Provider >
    <div className='flex flex-col min-h-[100vh] justify-between'>
      <Navigator />
    </div>
      
    // </Provider>
  );
}

export default App;
