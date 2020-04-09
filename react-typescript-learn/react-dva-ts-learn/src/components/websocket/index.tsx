import React, { FunctionComponent, useEffect } from 'react';
import { notification } from 'antd';

interface MessageItem {
  title: string;
  content: string;
}

const MooseWebsocket: FunctionComponent = () => {
  const notifyWithSystemNotification = (title: string, options: NotificationOptions) => {
    // 先检查浏览器是否支持
    if (!Notification) {
      console.log('浏览器不支持通知');
    } else {
      // 检查用户曾经是否同意接受通知
      const currentPermission = Notification.permission;
      if (currentPermission === 'granted') {
        // const notification =
        // 显示通知
        // eslint-disable-next-line no-new
        new Notification(title, options);
      } else if (currentPermission === 'default') {
        // 用户还未选择，可以询问用户是否同意发送通知
        Notification.requestPermission().then((permission: any) => {
          if (permission === 'granted') {
            console.log('用户同意授权');
            // let notification =
            // 显示通知
            // eslint-disable-next-line no-new
            new Notification(title, options);
          } else if (permission === 'default') {
            console.warn('用户关闭授权 未刷新页面之前 可以再次请求授权');
          } else {
            // denied
            console.log('用户拒绝授权 不能显示通知');
          }
        });
      } else {
        // denied 用户拒绝
        console.log('用户曾经拒绝显示通知');
      }
    }
  };

  const notifyWithAntdNotification = (message: MessageItem) => {
    notification.open({
      message: message.title || 'Notification Title',
      description: message.content || 'This is the content of the notification. ',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const onMessage = (event: MessageEvent) => {
    const message: MessageItem = JSON.parse(event.data);
    notifyWithAntdNotification(message);
    console.log(message);
    // const options: NotificationOptions = {
    //   // 文字方向
    //   dir: 'auto',
    //   // 通知主体
    //   body: '通知：这个东西有点神奇，评论了你的朋友圈',
    //   // 不自动关闭通知
    //   requireInteraction: true,
    //   // 通知图标
    //   icon:
    // eslint-disable-next-line max-len
    //     'https://upload-images.jianshu.io/upload_images/5245297-818e624b75271127.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
    // };
    // notifyWithSystemNotification('这是通知的标题', options);
  };

  const initWebsocket = () => {
    const socket = new WebSocket(
      'ws://192.168.2.215:7000/im/socket.io?access_token=eef368ed-aa4e-49cd-9c3d-fc55ae7123b2',
    );

    socket.onmessage = onMessage;
  };

  useEffect(() => {
    initWebsocket();
    return () => {};
  }, []);

  return <div></div>;
};

export default MooseWebsocket;
