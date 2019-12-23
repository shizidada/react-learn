import "./index.css";

// canvas宽度
let WIDTH = 310;

// canvas高度
let HEIGHT = 155;

// 滑块边长
const l = 42;

// 滑块半径
const r = 9;

// 滑块实际边长
const L = l + r * 2 + 3;

const PI = Math.PI;

function getRandomNumberByRange(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function createImage(onload) {
  const image = new Image();
  image.crossOrigin = "Anonymous";
  image.onload = onload;
  image.onerror = () => {
    image.setSrc(getRandomImgSrc());
  };

  image.setSrc = function(src) {
    const isIE = window.navigator.userAgent.indexOf("Trident") > -1;
    if (isIE) {
      // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      const xhr = new XMLHttpRequest();
      xhr.onloadend = function(e) {
        // FileReader仅支持IE10+
        const file = new FileReader();
        file.readAsDataURL(e.target.response);
        file.onloadend = function(e) {
          image.src = e.target.result;
        };
      };
      xhr.open("GET", src);
      xhr.responseType = "blob";
      xhr.send();
    } else image.src = src;
  };

  image.setSrc(getRandomImgSrc());
  return image;
}

function createElement(tagName, className) {
  const elment = document.createElement(tagName);
  elment.className = className;
  return elment;
}

function addClass(target, className) {
  target.classList.add(className);
}

function removeClass(target, className) {
  target.classList.remove(className);
}

function getRandomImgSrc() {
  return `https://picsum.photos/${WIDTH}/${HEIGHT}/?image=${getRandomNumberByRange(
    0,
    1084
  )}`;
  // return 'https://user-activity.wanshifu.com/images/sixthYears.cb403431.png'
}

function draw(ctx, x, y, operation) {
  console.log(ctx, x, y, operation);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
  ctx.lineTo(x + l, y);
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
  ctx.lineTo(x + l, y + l);
  ctx.lineTo(x, y + l);
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
  ctx.lineTo(x, y);

  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.stroke();
  ctx[operation]();
  ctx.globalCompositeOperation = "destination-over";
}

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

class GeneratorImageCode {
  constructor({ el, width = 310, height = 155, onSuccess, onFail, onRefresh }) {
    WIDTH = width;
    HEIGHT = height;
    el.style.position = "relative";
    el.style.width = WIDTH + "px";
    Object.assign(el.style, {
      position: "relative",
      width: WIDTH + "px",
      margin: "0 auto"
    });
    this.el = el;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.onRefresh = onRefresh;
  }

  init() {
    this.initDOM();
    this.initImage();
    this.bindEvents();
  }

  initDOM() {
    // 画布
    const canvas = createCanvas(WIDTH, HEIGHT);
    // 滑块
    const block = canvas.cloneNode(true);

    // sliderContainer
    const sliderContainer = createElement("div", "sliderContainer");
    sliderContainer.style.width = WIDTH + "px";

    // 刷新按钮
    const refreshIcon = createElement("div", "refreshIcon");

    const sliderMask = createElement("div", "sliderMask");

    const slider = createElement("div", "slider");

    const sliderIcon = createElement("span", "sliderIcon");

    const text = createElement("span", "sliderText");

    block.className = "block";
    text.innerHTML = "向右滑动填充拼图";

    const el = this.el;
    el.appendChild(canvas);
    el.appendChild(refreshIcon);
    el.appendChild(block);
    slider.appendChild(sliderIcon);
    sliderMask.appendChild(slider);
    sliderContainer.appendChild(sliderMask);
    sliderContainer.appendChild(text);
    el.appendChild(sliderContainer);

    Object.assign(this, {
      canvas,
      block,
      sliderContainer,
      refreshIcon,
      slider,
      sliderMask,
      sliderIcon,
      text,
      canvasCtx: canvas.getContext("2d"),
      blockCtx: block.getContext("2d")
    });
  }

  initImage() {
    const image = createImage(() => {
      this.draw();
      this.canvasCtx.drawImage(image, 0, 0, WIDTH, HEIGHT);
      this.blockCtx.drawImage(image, 0, 0, WIDTH, HEIGHT);
      const y = this.y - r * 2 - 1;
      const ImageData = this.blockCtx.getImageData(this.x - 3, y, L, L);
      this.block.width = L;
      this.blockCtx.putImageData(ImageData, 0, y);
    });
    this.image = image;
  }

  // 随机创建滑块的位置
  draw() {
    this.x = getRandomNumberByRange(L + 10, WIDTH - (L + 10));
    this.y = getRandomNumberByRange(10 + r * 2, HEIGHT - (L + 10));
    draw(this.canvasCtx, this.x, this.y, "fill");
    draw(this.blockCtx, this.x, this.y, "clip");
  }

  // 清理画布
  clean() {
    this.canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    this.blockCtx.clearRect(0, 0, WIDTH, HEIGHT);
    this.block.width = WIDTH;
  }

  // 绑定事件
  bindEvents() {
    this.el.onselectstart = () => false;
    this.refreshIcon.onclick = () => {
      this.reset();
      typeof this.onRefresh === "function" && this.onRefresh();
    };

    let originX,
      originY,
      trail = [],
      isMouseDown = false;

    const handleDragStart = function(e) {
      originX = e.clientX || e.touches[0].clientX;
      originY = e.clientY || e.touches[0].clientY;
      isMouseDown = true;
    };

    const handleDragMove = e => {
      if (!isMouseDown) return false;
      const eventX = e.clientX || e.touches[0].clientX;
      const eventY = e.clientY || e.touches[0].clientY;
      const moveX = eventX - originX;
      const moveY = eventY - originY;
      if (moveX < 0 || moveX + 38 >= WIDTH) return false;
      this.slider.style.left = moveX + "px";
      const blockLeft = ((WIDTH - 40 - 20) / (WIDTH - 40)) * moveX;
      this.block.style.left = blockLeft + "px";

      addClass(this.sliderContainer, "sliderContainer_active");
      this.sliderMask.style.width = moveX + "px";
      trail.push(moveY);
    };

    const handleDragEnd = e => {
      if (!isMouseDown) return false;
      isMouseDown = false;
      const eventX = e.clientX || e.changedTouches[0].clientX;
      if (eventX === originX) return false;
      removeClass(this.sliderContainer, "sliderContainer_active");
      this.trail = trail;
      const { spliced, verified } = this.verify();
      if (spliced) {
        if (verified) {
          addClass(this.sliderContainer, "sliderContainer_success");
          typeof this.onSuccess === "function" && this.onSuccess();
          this.reset();
        } else {
          addClass(this.sliderContainer, "sliderContainer_fail");
          this.text.innerHTML = "请再试一次";
          this.reset();
        }
      } else {
        addClass(this.sliderContainer, "sliderContainer_fail");
        typeof this.onFail === "function" && this.onFail();
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    };
    this.slider.addEventListener("mousedown", handleDragStart);
    this.slider.addEventListener("touchstart", handleDragStart);
    this.block.addEventListener("mousedown", handleDragStart);
    this.block.addEventListener("touchstart", handleDragStart);
    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("touchmove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
  }

  verify() {
    // 拖动时 y 轴的移动距离
    const arr = this.trail;
    const average = arr.reduce(sum) / arr.length;
    const deviations = arr.map(x => x - average);
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
    const left = parseInt(this.block.style.left);
    return {
      spliced: Math.abs(left - this.x) < 10,
      // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
      verified: stddev !== 0
    };
  }

  // 重置所有 el
  reset() {
    this.sliderContainer.className = "sliderContainer";
    this.slider.style.left = 0;
    this.block.style.left = 0;
    this.sliderMask.style.width = 0;
    this.clean();
    this.image.setSrc(getRandomImgSrc());
  }
}

export default opts => {
  return new GeneratorImageCode(opts).init();
};
