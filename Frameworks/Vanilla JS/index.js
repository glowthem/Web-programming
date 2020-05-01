const title = document.getElementById("title");

function handleClick() {
  title.style.color = "blue";

  setTimeout(() => {
    title.style.color = "white";
  }, 100);
}

title.addEventListener("click", handleClick);
