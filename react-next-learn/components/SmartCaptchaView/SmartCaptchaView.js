import React from "react";

class SmartCaptchaView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initSmartCaptchaConfig();
  }

  initSmartCaptchaConfig() {
    if (typeof window !== "undefined") {
      this.initSmartCaptcha();
    }
  }

  initSmartCaptcha = () => {
    this.ic = new smartCaptcha({
      //声明智能验证需要渲染的目标元素ID。
      renderTo: "#sc",
      //智能验证组件的宽度。
      width: 320,
      //智能验证组件的高度。
      height: 42,
      //智能验证组件初始状态文案。
      default_txt: "点击按钮开始智能验证",
      //智能验证组件验证通过状态文案。
      success_txt: "验证成功",
      //智能验证组件验证失败（拦截）状态文案。
      fail_txt: "验证失败，请在此点击按钮刷新",
      //智能验证组件验证中状态文案。
      scaning_txt: "智能检测中",
      //前端智能验证通过时会触发该回调参数。您可以在该回调参数中将请求标识（token）、会话ID（sessionid）、签名串（sig）字段记录下来，随业务请求一同发送至您的服务端调用验签。
      success: this.handleCaptchaSuccessCallback,

      fail: this.handleCaptchaFailCallback,
    });
  };

  handleCaptchaSuccessCallback = (data) => {
    const { smartCaptchaSuccessCallback } = this.props;
    if (smartCaptchaSuccessCallback) smartCaptchaSuccessCallback(data);
  };

  handleCaptchaFailCallback = () => {
    const { smartCaptchaFailCallback } = this.props;
    if (smartCaptchaFailCallback) smartCaptchaFailCallback();
  };

  handleSmartCaptchaInit = () => {
    const scDom = document.getElementById("sc");
    if (scDom && scDom.childNodes.length === 0) {
      this.ic && this.ic.init();
    }
  };

  handleSmartCaptchaSucceed = () => {
    const scDom = document.getElementById("sc");
    if (scDom && scDom.childNodes.length > 0) {
      this.ic && this.ic.succeed();
    }
  };

  handleSmartCaptchaReset = () => {
    const scDom = document.getElementById("sc");
    if (scDom && scDom.childNodes.length > 0) {
      this.ic && this.ic.reset();
    }
  };

  handleSetSmartCaptchaFail = () => {
    const scDom = document.getElementById("sc");
    if (scDom && scDom.childNodes.length > 0) {
      this.ic && this.ic.fail();
    }
  };

  render() {
    return <div id="sc"></div>;
  }
}

export default SmartCaptchaView;
