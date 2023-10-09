import type { Component } from 'solid-js';

import Card from './components/Card';

const App: Component = () => {
  return (
    <div class='container m-auto'>

      <header>
        <h1>Solid Cart</h1>
      </header>

      <div class='grid grid-cols-4 gap-10 my-4'>
        <Card title="Product Title 1" price={10}/>
        <Card title='Product Title 2' price={30}/>
        <Card title='Product Title 3' price={40}/>
        <Card title='Product Title 4' price={50}/>
      </div>
    
    </div>
  );
};

export default App;
