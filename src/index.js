import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { Statistics } from './components/Stats/Statistics';
import statisticalData from './statistical-data.json';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <section className="statistics">
//         <h2 className="title">Upload stats</h2>
//         {statisticalData.map(data => (
//           <Statistics
//             id={data.id}
//             label={data.label}
//             percentage={data.percentage}
//           />
//         ))}
//       </section>,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
