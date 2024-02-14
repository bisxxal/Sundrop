  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector('.main'),
  //   smooth: true
  // });
var show = document.querySelector(".showingimg");
var fixed = document.querySelector(".fixedcontent");

var show2 = document.querySelectorAll(".showingimg");

show2.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });
  element.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });
  element.addEventListener("mouseenter", () => {
    var get = element.getAttribute("data-imgecont");

    fixed.style.backgroundImage = ` url(${get})`;

    console.log(get);
  });
});

var h1s = document.querySelector(".fih1").addEventListener("click", () => {
  var rt = document.querySelector(".rtpg5 img");
  var src = rt.getAttribute("src");

  rt.setAttribute("src", "assets/converse by you.webp");
  var rt = document.querySelector(".pbox p").innerHTML=`Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`
  h1s.style.backgrondColor = "red";
});

var h2s = document.querySelector(".fih2").addEventListener("click", () => {
  var rt = document.querySelector(".rtpg5 img");
  var src = rt.getAttribute("src");

  rt.setAttribute("src", "assets/joota.webp");
  var rt = document.querySelector(".pbox p").innerHTML=`Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`
});
var h3s = document.querySelector(".fih3").addEventListener("click", () => {
  var rt = document.querySelector(".rtpg5 img");
  var src = rt.getAttribute("src");

  rt.setAttribute("src", "assets/robo.webp");

  var rt = document.querySelector(".pbox p").innerHTML=`We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`
});
