import { Button } from 'antd';
import React, { FunctionComponent, useEffect } from 'react';
import Player from 'xgplayer';
import './index.less';



const VideoPage: FunctionComponent = () => {
  let player: Player = null;
  let danMuTimer = null;

  useEffect(() => {
    player = new Player({
      id: 'mse',
      url: '//s1.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
      pip: true,
      lang: 'zh-cn',
      playbackRate: [0.5, 0.75, 1, 1.5, 2],
      defaultPlaybackRate: 1,
      fluid: true,
      danmu: {
        panel: true,
        comments: [
          {
            duration: 5000,
            id: '1',
            start: 0,
            txt: '长弹幕长弹幕长弹幕长弹幕长弹幕',
            style: {
              // 弹幕自定义样式
              color: '#ff9500',
              fontSize: '20px',
              border: 'solid 1px #ff9500',
              borderRadius: '50px',
              padding: '5px 11px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }
        ],
        area: {
          start: 0,
          end: 1
        }
      }
    });

    const loading = () => {
      const { util } = Player;
      const container = util.createDom(
        'xg-loading',
        `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">
      <path d="M100,50A50,50,0,1,1,50,0"></path>
    </svg>
    `,
        {},
        'xgplayer-loading'
      );

      player.root.appendChild(container);
    };

    Player.install('loading', loading);
  });

  const handleDanMuChange = () => {
    // console.log(player.danmu);
    if (danMuTimer) clearInterval(danMuTimer);
    danMuTimer = setInterval(() => {
      const comment = {
        duration: 10000,
        id: `${Math.random() * 1000}`,
        start: 0,
        txt: `${Math.random() * 1000}`,
        style: {
          // 弹幕自定义样式
          color: '#ff9500',
          fontSize: '20px',
          border: 'solid 1px #ff9500',
          borderRadius: '50px',
          padding: '5px 11px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      };

      if (player) {
        player.danmu.sendComment(comment);
        player.danmu.sendComment(comment);
        player.danmu.sendComment(comment);
      }
    }, 1000);
  };

  return (
    <div className="video-page-container">
      <div className="video-playerSection-wrapper">
        <div className="video-playerSection-left">
          <div id="mse" className="video-player"></div>
        </div>
        <div className="video-playerSection-right"></div>
      </div>
      <Button onClick={handleDanMuChange}>player</Button>
    </div>
  );
};

export default VideoPage;
