import React from 'react';
import './MoniterScreen.css';

const MoniterScreen = ({ recordEntries }) => {
  return (
    <table>
      <tr>
        <th>Mouse click number </th>
        <th>Reaction Time</th>
      </tr>

      {recordEntries && recordEntries.length
        ? recordEntries.map((record, index) => {
            return (
              <tr key={index}>
                <td>{record.mouseClickNum}</td>
                <td>{record.reactionTime}</td>
              </tr>
            );
          })
        : 'No records Available!'}
    </table>
  );
};

export default MoniterScreen;
