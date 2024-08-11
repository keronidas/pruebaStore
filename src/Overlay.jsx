import React from 'react';
import { useSnapshot } from 'valtio';
import { state } from './Store';

export const Overlay = () => {
  const snap = useSnapshot(state);

  return <Intro />;
};

function Intro() {
  return (
    <div className='container'>
      <header>
        <h1>React Three Fiber</h1>
        <div className="contenedor--detalles">
          

        </div>
        <Customizer />
      </header>
    </div>
  );
}

function Customizer() {
  const colors = state.colors;

  return (
    <section key={"custom"}>
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className='circle'
              style={{ backgroundColor: color }}
              onClick={() => { state.selectedColor = color }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
