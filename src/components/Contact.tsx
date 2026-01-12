import resume from "../assets/Bryce Lozinski Resume.pdf";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import resumeIcon from "../assets/resume.png";

export default function Contact({ ref }: { ref: React.Ref<HTMLElement> }) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("prevent default successful");

    sendEmail();
  }

  async function sendEmail() {
    const form = document.querySelector(".contact-form") as HTMLFormElement;
    const formData = new FormData(form);
    const pureData = Object.fromEntries(formData.entries());

    console.log(formData);
    console.log(pureData);

    return await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_zdxf7vt",
        template_id: "template_2pkxd0h",
        user_id: "gBvn5WmiekS0rlgS4",
        template_params: {
          name: pureData["name" as keyof typeof pureData],
          email: pureData["email" as keyof typeof pureData],
          message: pureData["message" as keyof typeof pureData],
        },
      }),
    })
      .then((response) => {
        document.querySelector(".contact-form")?.classList.add("remove");
        document.querySelector(".confirmation")?.classList.add("reveal");
        form.reset();
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <section className="contact" ref={ref}>
      <h2>Contact</h2>
      <div className="contact-container">
        <h3 className="contact-title hidden">Send a Message</h3>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="input name hidden">
            <input type="text" name="name" required />
            <span>Name</span>
          </div>
          <div className="input email hidden">
            <input type="text" name="email" required />
            <span>Email</span>
          </div>
          <div className="input message hidden">
            <textarea name="message" required></textarea>
            <span>Message</span>
          </div>
          <button className="submit hidden" type="submit">
            Submit
          </button>
        </form>
        <div className="confirmation">Thank you for contacting me!</div>
        <div className="contact-links">
          <button
            className="link-github hidden"
            onClick={() => open("https://github.com/blozinski056", "_blank")}
          >
            <img src={githubIcon} alt="" />
          </button>
          <button
            className="link-linkedin hidden"
            onClick={() =>
              open("https://www.linkedin.com/in/bryce-lozinski", "_blank")
            }
          >
            <img src={linkedinIcon} alt="" />
          </button>
          <button
            className="link-resume hidden"
            onClick={() => open(resume, "_blank")}
          >
            <img src={resumeIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
