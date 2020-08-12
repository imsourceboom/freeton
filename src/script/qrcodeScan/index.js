import { qrcode } from "./jsqrcode";

export const qrcodeScan = () => {
  // const jsqrcode = qrcode;

  const canvasElement = document.getElementById("qr-canvas");

  if (canvasElement !== null) {
    const video = document.createElement("video");
    const canvas = canvasElement.getContext("2d");
    const btnScanQR = document.querySelector(".scan-video-controller");
    let outputData;

    let scanning = false;

    qrcode.callback = (res) => {
      if (res) {
        // outputData.innerText = res;
        outputData = res;
        scanning = false;

        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });

        canvasElement.hidden = true;

        alert(outputData);
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
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.srcObject = stream;
          video.play();
          tick();
          scan();
        });
    });

    function tick() {
      canvasElement.height = video.videoHeight;
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
