//Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//Scrroll Section

let Sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  Sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //Sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  -(
    //Remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove("bx-x")
  );
  navbar.classList.remove("active");
};

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "",
    Password: "",
    To: "bhikkansirse313@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body:
      "Name :" +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Mobile Number: " +
      document.getElementById("phone").value +
      "<br> Address: " +
      document.getElementById("address").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Email sent succesfully"));
}
