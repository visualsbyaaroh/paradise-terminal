function setResolution(img, output) {
  if (!img || !output) return;

  const update = () => {
    output.textContent =
      `${img.naturalWidth} × ${img.naturalHeight} PX`;
  };

  if (img.complete && img.naturalWidth) {
    update();
  } else {
    img.addEventListener("load", update);
  }
}

document.querySelectorAll(".gallery-item").forEach((item) => {
  const img = item.querySelector("img");
  const output = item.querySelector(".image-resolution");

  setResolution(img, output);
});

const projectImage = document.querySelector(".project-image img");
const projectResolution = document.querySelector(".project-resolution");

setResolution(projectImage, projectResolution);
