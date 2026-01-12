import profilePic from "../assets/profile-picture.jpg";
import reactPic from "../assets/react.png";
import nextjsPic from "../assets/nextjs-dark.png";
import nodejsPic from "../assets/node-js.png";
import expressPic from "../assets/express-color.png";
import postgresqlPic from "../assets/postgresql.png";
import typescriptPic from "../assets/typescript.png";
import sassPic from "../assets/sass-color.png";
import gitPic from "../assets/git-color.png";

export default function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-img-container">
          <img src={profilePic} alt="" loading="lazy" /> // my picture
        </div>
        <div className="about-info">
          <p>
            Hi, I'm <span>Bryce</span>!
          </p>
          <p>
            I am a self-taught, front end developer with some back end
            experience.
          </p>
          <p>
            I strive to make eye-catching, yet minimalistic designs, and I enjoy
            adding subtle animations to bring a bit of life to my projects.
          </p>
          <div className="about-skills">
            <div>
              <img src={reactPic} alt="" />
            </div>
            <div>
              <img src={typescriptPic} alt="" />
            </div>
            <div>
              <img src={nextjsPic} alt="" />
            </div>
            <div>
              <img src={nodejsPic} alt="" />
            </div>
            <div>
              <img src={expressPic} alt="" />
            </div>
            <div>
              <img src={postgresqlPic} alt="" />
            </div>
            <div>
              <img src={sassPic} alt="" />
            </div>
            <div>
              <img src={gitPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
