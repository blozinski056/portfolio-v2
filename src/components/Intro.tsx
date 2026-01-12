import resume from "../assets/Bryce Lozinski Resume.pdf";

export default function Intro({
  contactRef,
}: {
  contactRef: React.RefObject<HTMLElement | null>;
}) {
  function contact() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="intro">
      <ul>
        <li>B</li>
        <li>r</li>
        <li>y</li>
        <li>c</li>
        <li>e</li>
        <li>&nbsp;</li>
        <li>L</li>
        <li>o</li>
        <li>z</li>
        <li>i</li>
        <li>n</li>
        <li>s</li>
        <li>k</li>
        <li>i</li>
      </ul>
      <h1>Front End Developer</h1>

      <div className="intro-buttons-container">
        <button
          className="button-primary"
          onClick={() => open(resume, "_blank")}
        >
          Resume
        </button>
        <button className="button-primary" onClick={contact}>
          Contact
        </button>
      </div>
    </section>
  );
}
