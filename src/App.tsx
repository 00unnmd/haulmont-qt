import React from 'react';

import { MissionTitle, MissionDetails } from './components';

const app = {
  width: '100vh',
};

function App() {
  return (
    <div style={app}>
      <MissionTitle />
      <MissionDetails />
    </div>
  );
}

export default App;
