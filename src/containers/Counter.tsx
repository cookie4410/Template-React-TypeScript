import React, { useContext } from 'react';
import { GlobalContext } from '../context';
import '../css/Counter.css';

const Counter: React.VFC = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext);
  return (
    <section className="counter">
      <h2>Reducer Counter</h2>
      <div className="buttons">
        <button onClick={(event) => globalDispatch({ type: 'COUNT_UP', event })}>COUNT_UP</button>
        <button onClick={(event) => globalDispatch({ type: 'COUNT_DOWN', event })}>COUNT_DOWN</button>
        <button onClick={(event) => globalDispatch({ type: 'RESET', event })}>RESET</button>
      </div>
      <section className="state_box">
        <div className="state">
          globalState.type:{' '}
          <span
            style={{
              color: globalState.type === 'INITIALIZE' ? '#FFF' : globalState.type === 'COUNT_DOWN' ? '#008' : '#F00',
            }}
          >
            {globalState.type}
          </span>
        </div>
        <div className="state">
          globalState.count:{' '}
          <span style={{ color: globalState.count === 0 ? '#FFF' : globalState.count <= 0 ? '#008' : '#F00' }}>
            {globalState.count}
          </span>
        </div>
      </section>
    </section>
  );
};

export default Counter;
