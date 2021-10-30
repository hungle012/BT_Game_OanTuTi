
import './App.css';
import BTGameOanTuTi from './BT_redux/BTGameOanTuTi';


// redux
import { store } from './redux/configStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BTGameOanTuTi />

      </Provider>
    </div>
  );
}

export default App;
