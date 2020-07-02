import React, { useEffect } from 'react';
import './index.less';

export default () => {
  useEffect(() => {
    require('../../components/CircleCanvas');
  });
  return (
    <div id="wrapper">
      <canvas id="canvas" width="1950px" height="900px"></canvas>
      <canvas id="canvasbg" width="1950px" height="900px"></canvas>
    </div>
  );
};
