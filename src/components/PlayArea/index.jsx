import React from 'react';
import './PlayArea.css';

const PlayArea = ({ activeId, registerCell }) => {
  const divsConfig = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
    {
      id: 20,
    },
    {
      id: 21,
    },
    {
      id: 22,
    },
    {
      id: 23,
    },
    {
      id: 24,
    },
    {
      id: 25,
    },
    {
      id: 26,
    },
    {
      id: 27,
    },
    {
      id: 28,
    },
    {
      id: 29,
    },
    {
      id: 30,
    },
    {
      id: 31,
    },
    {
      id: 32,
    },
    {
      id: 33,
    },
    {
      id: 34,
    },
    {
      id: 35,
    },
    {
      id: 36,
    },
  ];

  return (
    <section className="play-area-container">
      {divsConfig.map((divItem) => {
        const isActive = activeId === divItem.id;
        return (
          <div
            id={divItem.id}
            key={divItem.id}
            className="cell"
            style={{
              backgroundColor: isActive ? 'red' : 'white',
            }}
            onClick={() => {
              if (isActive) {
                registerCell(divItem.id);
              }
            }}
          ></div>
        );
      })}
    </section>
  );
};

export default PlayArea;
