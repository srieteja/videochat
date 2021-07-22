import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const App = () => {
  const classes = makeStyles();

  return (
    <div className={classes.wrapper}>
      <div>
        <h1 id="nav_bar">V I E W</h1>
      </div>
      <br />
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
