import QRcode from "qrcode";

export const qrcode = () => {
  const walletSection = document.querySelector("section#wallet");

  if (walletSection !== null) {
    let address = document.getElementById("address");
    address = address.textContent;

    var opts = {
      errorCorrectionLevel: "L",
      type: "image/jpeg",
      scale: 3,
      quality: 0.5,
      margin: 1,
      color: {
        dark: "#000000ff",
        light: "#ffffffff",
      },
    };

    QRcode.toDataURL(
      `https://firston-dev.netlify.app/html/withdraw.html?withdraw-address=${address}`,
      opts,
      function (error, url) {
        // if (error) console.error(error);
        // console.log("success!");
        const img = document.getElementById("qrcode");
        img.src = url;
      }
    );
  }
};

qrcode();
