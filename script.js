$(document).ready(function () {
  //TOOLTIPS
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  //ANIMATIONS

  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".ani");
    const revealPoint = 150;
    reveals.forEach((elem) => {
      var windowHeight = window.innerHeight;
      var revealtop = elem.getBoundingClientRect().top;
    });
  }

  let animateObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: [0] }
  );

  //let cards = document.querySelectorAll("#portfolio .card");
  let about = document.querySelectorAll(".animate");
  let projectsEven=document.querySelectorAll("#portfolio-projects :nth-child(even)");
  let projectsOdd=document.querySelectorAll("#portfolio-projects :nth-child(odd)");

  projectsEven.forEach((elem=>{elem.classList.add('floatleft')}))
  projectsOdd.forEach((elem=>{elem.classList.add('floatright')}))

  console.log('even',projectsEven)

  function observeAll(target) {
    target.forEach((entry) => {
      animateObserver.observe(entry);
    });
  }

  observeAll(about);
  observeAll(projectsEven);
  observeAll(projectsOdd);
});
