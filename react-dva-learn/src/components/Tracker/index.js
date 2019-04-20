import React, { Component } from "react";
import FingerPrint2 from "fingerprintjs2";

import { trackerClasses, trackerIds } from "./config";

class Tracker extends Component {
  documentDelegateHandle = event => {
    const curentId = event.target.id;
    const classNames = event.target.className;
    // console.log("classNames :: ", classNames);
    // console.log("trackerClasses :: ", trackerClasses);
    if (trackerIds.indexOf(curentId) > -1) {
      const data = {
        event: curentId,
        timestamp: +new Date(),
        cfp: localStorage.getItem("COMPUTER_FINGER")
      };
      console.log("发送埋点数据:: ", data);
    }
    const tempClasses = trackerClasses.filter(
      item => classNames.indexOf(item) > -1
    );
    // console.log(tempClasses);
    if (tempClasses.length) {
      const data = {
        event: tempClasses[0],
        timestamp: +new Date(),
        cfp: localStorage.getItem("COMPUTER_FINGER")
      };
      console.log("发送埋点数据:: ", data);
    }
  };

  componentDidMount() {
    // console.log("Tracker props :: ", this.props);
    document.addEventListener("click", this.documentDelegateHandle);

    // 获取电脑指纹 唯一
    const COMPUTER_FINGER = localStorage.getItem("COMPUTER_FINGER");
    if (COMPUTER_FINGER) {
      console.log("COMPUTER_FINGER :: ", COMPUTER_FINGER);
    } else {
      console.time();
      this.getFingerPrint();
      console.timeEnd();
    }
  }

  getFingerPrint = () => {
    const options = {
      preprocessor: (key, value) => {
        console.log(key, value);
        return value;
      },
      excludes: {
        // userAgent: true,
        // language: true,
        // colorDepth: true,
        // screenResolution: true,
        // availableScreenResolution: true,
        // timezoneOffset: true,
        // addBehavior: true,
        // doNotTrack: true,
        // webgl: true,
        // webglVendorAndRenderer: true,
        // adBlock: true,
        // hasLiedOs: true,
        // hasLiedBrowser: true,
        // fonts: true,
        // fontsFlash: true,
        // fonts: true

        userAgent: true,
        language: true,
        colorDepth: true,
        deviceMemory: true,
        /**
         * devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
         */
        pixelRatio: true,
        hardwareConcurrency: true,
        screenResolution: true,
        availableScreenResolution: true,
        timezoneOffset: true,
        timezone: true,
        sessionStorage: true,
        localStorage: true,
        indexedDb: true,
        addBehavior: true,
        openDatabase: true,
        cpuClass: true,
        platform: true,
        /**
         * DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
         */
        doNotTrack: true,
        plugins: true,
        canvas: true,
        webgl: true,
        webglVendorAndRenderer: true,
        adBlock: true,
        hasLiedLanguages: true,
        hasLiedResolution: true,
        hasLiedOs: true,
        hasLiedBrowser: true,
        touchSupport: true,
        fonts: true,
        fontsFlash: true,
        audio: true,
        /**
         * Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
         */
        enumerateDevices: true
      }
    };
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        FingerPrint2.get(components => {
          let values = components.map(component => {
            return component.value;
          });
          // 17b1ff4e204ae0113c78df1eddaf1459
          var murmur = FingerPrint2.x64hash128(values.join(""), 32);
          localStorage.setItem("COMPUTER_FINGER", murmur);
          // console.log("if components :: ", murmur); // an array of components: {key: ..., value: ...}
        });
      });
    } else {
      setTimeout(() => {
        FingerPrint2.get(components => {
          let values = components.map(component => {
            return component.value;
          });
          // 17b1ff4e204ae0113c78df1eddaf1459
          var murmur = FingerPrint2.x64hash128(values.join(""), 32);
          localStorage.setItem("COMPUTER_FINGER", murmur);
        });
      }, 500);
    }
  };

  componentWillUnmount() {
    document.removeEventListener(this.documentDelegateHandle);
  }

  render() {
    const children = this.props.children;
    const history = this.props.history;
    // console.log(this.props.history);
    return (
      <div>
        {React.Children.map(children, child => {
          // console.log(child);
          return React.cloneElement(child, {
            ...history
          });
        })}
      </div>
    );
  }
}

export default Tracker;
