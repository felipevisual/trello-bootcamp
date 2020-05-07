const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];
const cardGroups = document.querySelectorAll(".card-group");
const cards = document.querySelectorAll(".card");

cardGroups.forEach((c) =>
  c.addEventListener("dragover", (e) => {
    e.preventDefault();
  })
);

cardGroups.forEach((c) =>
  c.addEventListener("drop", (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log(e.target);

    let targetNode = e;

    if (e.target.nodeName === "H3") {
      targetNode = e.target.parentElement.parentElement;
    } else if (e.target.nodeName === "LI") {
      targetNode = e.target.parentElement;
    } else if (e.target.nodeName === "H2") {
      targetNode = e.target.nextSibling.nextSibling;
    } else if (e.target.nodeName === "DIV") {
      targetNode = e.target.firstElementChild.nextSibling.nextSibling;
    } else if (e.target.nodeName === "UL") {
      targetNode = e.target;
    }

    targetNode.appendChild(document.getElementById(data));
  })
);

cards.forEach((c) =>
  c.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  })
);

cards.forEach((c) => c.setAttribute("draggable", "true"));

cards.forEach((c) =>
  c.addEventListener("click", () => {
    modal.style.display = "block";

    modal.getElementsByTagName("p")[0].innerHTML = c.getElementsByTagName(
      "h3"
    )[0].innerHTML;
  })
);

document.getElementsByClassName("close")[0].addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
