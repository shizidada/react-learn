/**
 * @name ImageCode
 *
 * @param {String} imageUrl 图片的路径
 * @param {Number} imageWidth 展示图片的宽带
 * @param {Number} imageHeight 展示图片的高带
 * @param {Number} fragmentSize 滑动图片的尺寸
 * @param {Function} onReload 当点击'重新验证'时执行的函数
 * @param {Function} onMath 匹配成功时执行的函数
 * @param {Function} onError 匹配失败时执行的函数
 */

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./index.less";

const icoSuccess = require("./icons/success.png");
const icoError = require("./icons/error.png");

const STATUS_LOADING = 0; // 还没有图片
const STATUS_READY = 1; // 图片渲染完成,可以开始滑动
const STATUS_MATCH = 2; // 图片位置匹配成功
const STATUS_ERROR = 3; // 图片位置匹配失败

const arrTips = [
  { ico: icoSuccess, text: "匹配成功" },
  { ico: icoError, text: "匹配失败" }
];

// 生成裁剪路径
function createClipPath(ctx, size = 100, styleIndex = 0) {
  const styles = [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1]
  ];
  const style = styles[styleIndex];

  const r = 0.1 * size;
  ctx.save();
  ctx.beginPath();

  // left
  ctx.moveTo(r, r);
  ctx.lineTo(r, 0.5 * size - r);
  // https://www.runoob.com/tags/canvas-arc.html
  // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  /**
   * x	圆的中心的 x 坐标。
   * y	圆的中心的 y 坐标。
   * r	圆的半径。
   * sAngle	起始角，以弧度计（弧的圆形的三点钟位置是 0 度）。
   * eAngle	结束角，以弧度计。
   * counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针
   */
  ctx.arc(r, 0.5 * size, r, 1.5 * Math.PI, 0.5 * Math.PI, style[0]);
  ctx.lineTo(r, size - r);

  // bottom
  ctx.lineTo(0.5 * size - r, size - r);
  ctx.arc(0.5 * size, size - r, r, Math.PI, 0, style[1]);
  ctx.lineTo(size - r, size - r);

  // right
  ctx.lineTo(size - r, 0.5 * size + r);
  ctx.arc(size - r, 0.5 * size, r, 0.5 * Math.PI, 1.5 * Math.PI, style[2]);
  ctx.lineTo(size - r, r);

  // top
  ctx.lineTo(0.5 * size + r, r);
  ctx.arc(0.5 * size, r, r, 0, Math.PI, style[3]);
  ctx.lineTo(r, r);

  ctx.clip();
  ctx.closePath();
}

class ImageCode extends React.Component {
  static defaultProps = {
    imageUrl: "",
    imageWidth: 500,
    imageHeight: 200,
    fragmentSize: 80,
    onReload: () => {},
    onMatch: () => {},
    onError: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      offsetX: 0, // 图片截取 x
      offsetY: 0, // 图片截取 y
      startX: 0, // 滑块开始滑动 x
      currX: 0, // 滑块当前 x
      oldX: 0, // 记录上一个 x

      status: STATUS_LOADING, // 当前状态
      tipsIndex: 0, // 显示 tip 索引
      useTime: 0, // 当前滑动使用时间
      isMovable: false, // 是否正在滑动
      showTips: false, // 显示的 tip 状态
      isChecking: false, // 是否正在提交 check
      isLoading: false // 是否正在重新加载
    };
  }

  componentDidMount() {
    this.renderImage();
  }

  componentDidUpdate(prevProps) {
    // 当父组件传入新的图片后，开始渲染
    if (!!this.props.imageUrl && prevProps.imageUrl !== this.props.imageUrl) {
      this.renderImage();
    }
  }

  renderImage = () => {
    // 初始化状态
    this.setState({ status: STATUS_LOADING });

    // 创建一个图片对象，主要用于canvas.context.drawImage()
    const newImage = new Image();
    newImage.addEventListener("load", () => {
      const { imageWidth, imageHeight, fragmentSize } = this.props;

      // 先获取两个ctx
      const ctxShadow = this.refs.shadowCanvas.getContext("2d");
      const ctxFragment = this.refs.fragmentCanvas.getContext("2d");

      // 让两个ctx拥有同样的裁剪路径(可滑动小块的轮廓)
      const styleIndex = Math.floor(Math.random() * 16);
      createClipPath(ctxShadow, fragmentSize, styleIndex);
      createClipPath(ctxFragment, fragmentSize, styleIndex);

      // 随机生成裁剪图片的开始坐标
      const clipX = Math.floor(
        fragmentSize + (imageWidth - 2 * fragmentSize) * Math.random()
      );
      const clipY = Math.floor((imageHeight - fragmentSize) * Math.random());

      // 让小块绘制出被裁剪的部分
      ctxFragment.drawImage(
        newImage,
        clipX,
        clipY,
        fragmentSize,
        fragmentSize,
        0,
        0,
        fragmentSize,
        fragmentSize
      );

      // 让阴影 canvas 带上阴影效果
      // ctxShadow.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctxShadow.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctxShadow.fill();

      // 恢复画布状态
      ctxShadow.restore();
      ctxFragment.restore();

      // 设置裁剪小块的位置
      this.setState({ offsetX: clipX, offsetY: clipY });

      // 修改状态
      this.setState({ status: STATUS_READY });
    });

    newImage.src = this.props.imageUrl;
  };

  // 滑块按下
  onMoveStart = e => {
    const { status } = this.state;
    if (status !== STATUS_READY) {
      return;
    }

    this.startTime = Date.now();

    // 记录滑动开始时的绝对坐标x
    this.setState({ isMovable: true, startX: e.clientX });
  };

  // 滑块滑动
  onMoving = e => {
    const { status, isMovable, isChecking, isLoading } = this.state;
    if (status !== STATUS_READY || !isMovable || isChecking || isLoading) {
      return;
    }
    const distance = e.clientX - this.state.startX;
    let currX = this.state.oldX + distance;

    const minX = 0;
    const maxX = this.props.imageWidth - this.props.fragmentSize;
    currX = currX < minX ? 0 : currX > maxX ? maxX : currX;

    this.setState({ currX });
  };

  // onMouseLeave
  onMoveEnd = () => {
    const { status, isMovable, isChecking, isLoading } = this.state;
    if (status !== STATUS_READY || !isMovable || isChecking || isLoading) {
      return;
    }
    // 将旧的固定坐标x更新
    this.setState(pre => ({ isMovable: false, oldX: pre.currX }));

    this.setState({ isChecking: true });

    this.checkTimer = setTimeout(() => {
      const isMatch = Math.abs(this.state.currX - this.state.offsetX) < 5;
      if (isMatch) {
        // calc time
        this.useTime = (Date.now() - this.startTime) / 1000;

        this.setState(
          pre => ({
            useTime: this.useTime,
            status: STATUS_MATCH,
            currX: pre.offsetX,
            isChecking: false
          }),
          this.onShowTips
        );
        this.props.onMatch();
        this.checkTimer && clearTimeout(this.checkTimer);
      } else {
        this.setState({ status: STATUS_ERROR, isChecking: false }, () => {
          this.onReset();
          this.onShowTips();
        });
        this.props.onError();
      }
    }, 1000);
  };

  onReset = () => {
    const timer = setTimeout(() => {
      this.setState({
        oldX: 0,
        currX: 0,
        status: STATUS_READY
      });
      clearTimeout(timer);
    }, 1000);
  };

  onReload = () => {
    const { status, isChecking, isLoading } = this.state;
    if (
      (status !== STATUS_READY && status !== STATUS_MATCH) ||
      isChecking ||
      isLoading
    ) {
      return;
    }
    const ctxShadow = this.refs.shadowCanvas.getContext("2d");
    const ctxFragment = this.refs.fragmentCanvas.getContext("2d");

    // 清空画布
    ctxShadow.clearRect(0, 0, this.props.fragmentSize, this.props.fragmentSize);
    ctxFragment.clearRect(
      0,
      0,
      this.props.fragmentSize,
      this.props.fragmentSize
    );

    this.setState({ isLoading: true });
    this.reloadTimer = setTimeout(() => {
      this.setState(
        {
          isMovable: false,
          offsetX: 0, //图片截取的x
          offsetY: 0, //图片截取的y
          startX: 0, // 开始滑动的 x
          oldX: 0,
          currX: 0, // 滑块当前 x,
          status: STATUS_LOADING,
          useTime: 0,
          isLoading: false
        },
        this.props.onReload
      );
      this.reloadTimer && clearTimeout(this.reloadTimer);
    }, 1000);
  };

  onShowTips = () => {
    if (this.state.showTips) {
      return;
    }

    const tipsIndex = this.state.status === STATUS_MATCH ? 0 : 1;
    this.setState({ showTips: true, tipsIndex });
    const timer = setTimeout(() => {
      this.setState({ showTips: false });
      clearTimeout(timer);
    }, 1000);
  };

  render() {
    const { imageUrl, imageWidth, imageHeight, fragmentSize } = this.props;
    const { status, offsetX, offsetY, currX, showTips, tipsIndex } = this.state;
    const { isChecking, isLoading } = this.state;

    const tips = arrTips[tipsIndex];

    return (
      <div className="image-code" style={{ width: imageWidth }}>
        <div
          className="image-container"
          style={{ height: imageHeight, backgroundImage: `url("${imageUrl}")` }}
          onMouseMove={this.onMoving}
          onMouseLeave={this.onMoveEnd}
        >
          <canvas
            ref="shadowCanvas"
            className="canvas"
            width={fragmentSize}
            height={fragmentSize}
            style={{ left: offsetX + "px", top: offsetY + "px" }}
          />
          <canvas
            ref="fragmentCanvas"
            className="canvas fragmentCanvas"
            width={fragmentSize}
            height={fragmentSize}
            style={{ top: offsetY + "px", left: currX + "px" }}
            onMouseDown={this.onMoveStart}
            onMouseUp={this.onMoveEnd}
          />

          {(isChecking || isLoading) && (
            <div className="refresh-wrapper">
              <div className="refresh-mask"></div>
              <div className="refresh-operation">
                <span className="refresh-loading"></span>
                <span className="refresh-tip">
                  {isChecking ? "正在检验..." : isLoading ? "正在加载..." : ""}
                </span>
              </div>
            </div>
          )}

          <div
            className={showTips ? "tips-container--active" : "tips-container"}
          >
            <i
              className="tips-ico"
              style={{ backgroundImage: `url("${tips.ico}")` }}
            />
            <span className="tips-text">{tips.text}</span>
          </div>
          {this.state.useTime > 0 ? (
            <div className="use-time-container">
              <span className="time">用时: {this.state.useTime} 秒</span>
            </div>
          ) : null}
        </div>

        <div className="reload-container">
          <div className="reload-wrapper" onClick={this.onReload}>
            <i className="reload-ico" />
            <span className="reload-tips">刷新验证</span>
          </div>
        </div>

        <div
          className={classNames("slider-wrpper", {
            "slider-wrpper-right": status === STATUS_MATCH,
            "slider-wrpper-fail": status === STATUS_ERROR
          })}
          onMouseMove={this.onMoving}
          onMouseLeave={this.onMoveEnd}
        >
          <div className="slider-mask" style={{ width: currX }}></div>
          <div className="slider-bar">
            {(status === STATUS_LOADING || status === STATUS_READY) &&
              "按住滑块，拖动完成拼图"}
            {status === STATUS_MATCH && ""}
            {status === STATUS_ERROR && "匹配失败，加载中..."}
          </div>
          <div
            className="slider-button"
            onMouseDown={this.onMoveStart}
            onMouseUp={this.onMoveEnd}
            style={{
              left: currX + "px"
            }}
          >
            <span className="slider-button-icon"></span>
          </div>
        </div>
      </div>
    );
  }
}

ImageCode.propsTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  fragmentSize: PropTypes.number,
  onReload: PropTypes.func,
  onMath: PropTypes.func,
  onError: PropTypes.func
};

export default ImageCode;
