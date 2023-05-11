const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Nursing Today.png") {
    myImage.setAttribute("src", "images/test.png");
  } else {
    myImage.setAttribute("src", "images/Nursing Today.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Nursing is cool, ${myName}`;
    }
  }
  myButton.onclick = () => {
    setUserName();
  };
