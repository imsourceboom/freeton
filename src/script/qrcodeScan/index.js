import { qrcode } from "./jsqrcode";
import { osCheck, browserCheck } from "../agentCheck";

export const qrcodeScan = () => {
  const canvasElement = document.getElementById("qr-canvas");

  if (canvasElement !== null) {
    const video = document.createElement("video");
    const canvas = canvasElement.getContext("2d");
    const btnScanQR = document.querySelector(".scan-video-controller");
    const input = document.querySelector("#trans_you_address");
    const container = document.createElement("div");
    const comment = document.createElement("h2");
    const logo = document.querySelector("body > header");
    const mobileMenu = Array.from(
      document.querySelectorAll("body > header nav.desk ul li")
    );
    const deskMenu = Array.from(
      document.querySelectorAll("body > header .mobile-nav ul li")
    );
    let outputData;
    let scanning = false;

    console.log(osCheck());
    console.log(browserCheck());
    const os = osCheck();
    const browser = browserCheck();

    if (os == "mac" || os == "windows") {
      btnScanQR.hidden = true;
    } else if (os == "iPhone" || os == "iPad") {
      if (!browser == "safari") {
        btnScanQR.hidden = true;
      }
    }
    // navigator.mediaDevices
    //   .enumerateDevices()
    //   .then((devices) => {
    //     const arr = devices.map((device) => {
    //       return device.kind;
    //     });

    //     const result = arr.includes("videoinput");

    //     btnScanQR.hidden = !result;
    //   })
    //   .catch(() => {
    //     btnScanQR.hidden = true;
    //   });

    const scanComplete = () => {
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999999999;
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.1);
        -webkit-backdrop-filter: blur(3px);
        -moz-backdrop-filter: blur(3px);
        -o-backdrop-filter: blur(3px);
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

    const valueFilter = (res) => {
      let index = res.indexOf("?") + 1;
      let slice = res.substr(index);
      let value = slice.split("=");
      return value[1];
    };

    qrcode.callback = (res) => {
      if (res) {
        outputData = res;
        scanning = false;

        video.srcObject.getTracks().forEach((track) => {
          track.stop();
        });

        scanComplete();
        canvasElement.hidden = true;
        btnScanQR.textContent = "QR code 스캔하기";
        btnScanQR.classList.remove("on");

        setTimeout(() => {
          document.body.removeChild(container);
        }, 1500);

        input.value = valueFilter(outputData);
      }
    };

    const cameraOff = () => {
      btnScanQR.classList.remove("on");
      btnScanQR.textContent = "QR code 스캔하기";

      video.srcObject.getTracks().forEach((track) => {
        track.stop();
      });

      canvasElement.hidden = true;
    };
    logo.addEventListener("click", cameraOff);
    mobileMenu.map((menu) => {
      menu.addEventListener("click", cameraOff);
    });
    deskMenu.map((menu) => {
      menu.addEventListener("click", cameraOff);
    });

    btnScanQR.addEventListener("click", () => {
      if (btnScanQR.classList.contains("on")) {
        cameraOff();
      } else {
        btnScanQR.classList.add("on");
        btnScanQR.textContent = "QR code 스캔종료";
        navigator.mediaDevices
          .getUserMedia({ video: { facingMode: "environment" } })
          .then(function (stream) {
            scanning = true;
            canvasElement.hidden = false;
            canvasElement.style.marginBottom = "6px";
            video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            video.srcObject = stream;
            video.play();
            tick();
            scan();
          });
      }
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
