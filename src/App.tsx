import { useRef, useEffect } from "react";

import "./App.scss";
import Logo from "./components/Logo.tsx";
import Intro from "./components/Intro.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

import mouse from "./assets/mouse-green.png";
import downArrows from "./assets/down-arrows-green.png";

function App() {
  // VARIABLES
  // Used for button in Intro component
  const contactRef = useRef<HTMLElement | null>(null);

  // Threshold of window for scroll event handler
  const threshold: number = window.innerHeight * 0.8;

  // FUNCTIONS
  // Remove mouse scroll arrow on initial scroll
  function removeMouseArrow() {
    const mouseDiv = document.querySelector(".scroll-down");
    const elmPosition = mouseDiv?.getBoundingClientRect().bottom;

    if (elmPosition && elmPosition < 0.75 * window.innerHeight) {
      mouseDiv.classList.add("disappear");
      window.removeEventListener("scroll", removeMouseArrow);
    }
  }

  // Animate each section when they scroll into view
  function animateOnScroll(section: Element | null) {
    console.log("animating section:", section);

    section?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1000,
      easing: "ease-in",
      fill: "forwards",
    });
  }

  function revealAbout() {
    const aboutContainer = document.querySelector(".about-container");
    const aboutTop: number = aboutContainer?.getBoundingClientRect().top || 0;

    if (aboutTop <= threshold && aboutContainer) {
      animateOnScroll(aboutContainer);
      window.removeEventListener("scroll", revealAbout);
    }
  }
  function revealProjects() {
    const projectsContainer = document.querySelector(".projects-container");
    const projectsTop: number =
      projectsContainer?.getBoundingClientRect().top || 0;

    if (projectsTop <= threshold && projectsContainer) {
      animateOnScroll(projectsContainer);
      window.removeEventListener("scroll", revealProjects);
    }
  }
  function revealContact() {
    const contactContainer = document.querySelector(".contact-container");
    const contactTop: number =
      contactContainer?.getBoundingClientRect().bottom || 0;

    if (contactTop <= window.innerHeight && contactContainer) {
      const elms = document.querySelectorAll(".hidden");
      elms.forEach((elm) => {
        elm.classList.add("reveal");
      });
      window.removeEventListener("scroll", revealContact);
    }
  }

  // EVENT LISTENERS AND EFFECTS
  // Scroll to top on page refresh
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // Call function to remove mouse scroll arrow
  window.addEventListener("scroll", removeMouseArrow);

  // Call functions to reveal sections on scroll
  window.addEventListener("scroll", revealAbout);
  window.addEventListener("scroll", revealProjects);
  window.addEventListener("scroll", revealContact);

  return (
    <main>
      <Logo />
      <Intro contactRef={contactRef} />
      <div className="bg-triangle-top"></div>
      <div className="scroll-down">
        <img src={mouse} alt="" className="mouse" />
        <img src={downArrows} alt="" className="arrows" />
      </div>
      <About />
      <div className="bg-triangle-bottom"></div>
      <Projects />
      <Contact ref={contactRef} />
    </main>
  );
}

export default App;
