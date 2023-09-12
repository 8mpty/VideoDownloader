const btn = document.querySelector(".convert-btn");
const cont = document.querySelector(".video-download");
const selector = document.querySelector(".opt");

btn.addEventListener("click", () => {
  const link = document.querySelector(".URL-input").value;
  const frame = document.querySelector(".mp_down");
  const val = selector.value;
  const final = dType(val);
  if (!link.trim()) {
    frame.remove();
    return;
  }
  if (frame) {
    frame.remove();
  }
  const createEl = document.createElement("div");
  createEl.classList.add("mp_down");
  createEl.innerHTML = `
    <iframe id="mp3_link" class="mp_link" src="" allowtransparency="true" scrolling="no"></iframe>
  `;
  cont.appendChild(createEl);
  document.querySelector("#mp3_link").src = final;
});

function dType(type) {
  const link = document.querySelector(".URL-input").value;
  const download_link =
    `https://yt-download.org/api/single/${type}?url=` + link;
  return download_link;
}

const textarea = document.querySelector(".URL-input");

textarea.addEventListener("input", function () {
  if (textarea === null) {
    this.style.height = "0";
  }
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
