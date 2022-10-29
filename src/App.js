import MarketOrder from './components/MarketOrder';
import MarketPrice from './components/MarketPrice';
import UI from './components/UI'
// import Modal from './components/Modal'
// import LineChart from './components/Graphs';
// import Portfolio from './components/Portfolio';

function App() {
  return (
      <div>
          <UI />
          <MarketPrice />
          <MarketOrder />
          {/* <Modal /> */}
        {/* <LineChart /> */}
      </div>
  );
}

export default App;
