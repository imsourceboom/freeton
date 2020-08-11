import Clipboard from "Clipboard";

export function copied() {
  const clipAddress = document.querySelector("#address");
  const clipButton = document.querySelector(".copy-icon");

  if (clipAddress !== null) {
    const address = new Clipboard(clipAddress);
    const button = new Clipboard(clipButton);

    const modal = () => {
      clipButton.classList.add("modal");

      setTimeout(() => {
        clipButton.classList.remove("modal");
      }, 1300);
    };

    address.on("success", modal);
    // address.on("error", function (e) {
    //   console.error("실패!");
    // });

    button.on("success", modal);
    // button.on("error", function (e) {
    //   console.error("실패!");
    // });
  }
}

copied();
