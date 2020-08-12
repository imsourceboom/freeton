import { qrcode } from "./jsqrcode";

export const qrcodeScan = () => {
  // const jsqrcode = qrcode;

  const canvasElement = document.getElementById("qr-canvas");

  if (canvasElement !== null) {
    const video = document.createElement("video");
    const canvas = canvasElement.getContext("2d");
    const btnScanQR = document.querySelector(".scan-video-controller");
    const container = document.createElement("div");
    const comment = document.createElement("h2");
    let outputData;
    let scanning = false;

    const scanComplete = () => {
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999999999;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(3px);
      `;

      comment.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        color: #34495e;
        white-space: nowrap;
        margin-top: -7px;
      `;

      comment.textContent = "스캔이 완료되었습니다";
      container.appendChild(comment);
      document.body.appendChild(container);
    };

    qrcode.callback = (res) => {
      if (res) {
        // outputData.innerText = res;
        outputData = res;
        scanning = false;

        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });

        scanComplete();
        canvasElement.hidden = true;

        setTimeout(() => {
          document.body.removeChild(container);
        }, 1500);
      }
    };

    btnScanQR.addEventListener("click", () => {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
          scanning = true;
          // qrResult.hidden = true;
          // btnScanQR.hidden = true;
          canvasElement.hidden = false;
          canvasElement.style.marginBottom = "6px";
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.srcObject = stream;
          video.play();
          tick();
          scan();
        });
    });

    function tick() {
      canvasElement.height = video.videoWidth * 0.74;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

      scanning && requestAnimationFrame(tick);
    }

    function scan() {
      try {
        qrcode.decode();
      } catch (e) {
        setTimeout(scan, 300);
      }
    }
  }
};

qrcodeScan();
