import React from 'react';

import { MissionPatch, MissionTitle, MissionDetails } from './components';

const app = {
  width: '100vw',
};

function App() {
  return (
    <div style={app}>
      <MissionPatch />
      <MissionTitle />
      <MissionDetails />
    </div>
  );
}

export default App;
