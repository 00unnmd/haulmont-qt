import React from 'react';

import { MissionPatch, MissionTitle, MissionDetails, Item } from './components';

const app = {
  width: '100vw',
};

function App() {
  return (
    <div style={app}>
      <Item />
    </div>
  );
}

export default App;
