import QRcode from "qrcode";

// export const qrcode = () => {
const href = location.origin;
let path;

switch (href) {
  case "http://localhost:4000":
  case "https://firston-dev.netlify.app":
    path = "/html/withdraw.html";
    break;

  case "http://121.183.223.39":
  case "https://firston.com":
    path = "/withdraw.do";
    break;

  default:
    break;
}

const walletSection = document.querySelector("section#wallet");

if (walletSection !== null) {
  let address = document.getElementById("address");
  address = address.textContent;

  if (address !== "") {
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
      `${href}${path}?withdraw-address=${address}`,
      opts,
      function (error, url) {
        // if (error) console.error(error);
        // console.log("success!");
        const img = document.getElementById("qrcode");
        img.src = url;
      }
    );
  }
}
// };

// qrcode();
