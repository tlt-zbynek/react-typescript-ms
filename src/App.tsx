import * as React from 'react';
import './App.css';
// import Hello from "./components/Hello";
// import StatefulHello from "./components/StatefulHello";
import ReduxHello from "./containers/ReduxHello";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*<Hello name="TypeScript" enthusiasmLevel={10} />*/}
            {/*<StatefulHello name="TS" enthusiasmLevel={1} />*/}
            <ReduxHello />
        </header>
      </div>
    );
  }
}

export default App;
