import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Slider from './components/slider';
import ResultBox from './components/resultBox';
import style from './style.scss';

class App extends Component {
  state = { amount: 5000, months: 3 };

  render() {
    const { amount, months } = this.state;
    return (
      <div className={style.center}>
        <h1 className={style.title}>Simulá tu crédito</h1>
        <Slider
          title="MONTO TOTAL"
          prefix="$"
          min={5000}
          max={50000}
          onChange={newAmount => this.setState({ amount: newAmount })}
        />
        <Slider
          title="PLAZO"
          min={3}
          max={24}
          onChange={newMonths => this.setState({ months: newMonths })}
        />
        <ResultBox value={(amount / months).toFixed(2)} />
      </div>
    );
  }
}

export default hot(module)(App);
