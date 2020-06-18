import Clipboard from "Clipboard";

export function copied() {
  const clipButton = document.querySelector(".copy-icon");

  if (clipButton !== null) {
    const clipboard = new Clipboard(clipButton);

    clipboard.on("success", function (e) {
      //   console.log("복사!");
    });

    clipboard.on("error", function (e) {
      console.error("실패!");
    });

    clipButton.addEventListener("click", function (e) {
      e.currentTarget.classList.add("modal");
      setTimeout(() => {
        clipButton.classList.remove("modal");
      }, 1000);
    });
  }
}

copied();
