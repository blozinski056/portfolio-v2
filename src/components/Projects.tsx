import link from "../assets/github-link-black.png";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div>
          <div className="projects-tile">
            <h3>got coffee?</h3>
            <p>
              "got coffee?" is coffee shop website! This was my first project
              using Next.js and its "pages" folder to generate unique URL pages.
            </p>
            <div className="projects-chips">
              <div>Next.js</div>
              <div>Typescript</div>
              <div>SCSS</div>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-github"
                onClick={() =>
                  open(
                    "https://github.com/blozinski056/got-coffee-next",
                    "_blank"
                  )
                }
              >
                <img src={link} alt="" />
              </button>
              <button
                className="projects-link"
                onClick={() =>
                  open("https://gotcoffeeshop.netlify.app/", "_blank")
                }
              >
                Live Website
              </button>
            </div>
          </div>
          <div className="projects-tile">
            <h3>Order 8</h3>
            <p>
              "Order 8" is a puzzle game! This was my first implementation of
              Typescript. This game requires the user to order 8 tiles in a 3x3
              grid as quickly as possible.
            </p>
            <div className="projects-chips">
              <div>React.js</div>
              <div>Typescript</div>
              <div>SCSS</div>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-github"
                onClick={() =>
                  open("https://github.com/blozinski056/number-game", "_blank")
                }
              >
                <img src={link} alt="" />
              </button>
              <button
                className="projects-link"
                onClick={() =>
                  open("https://order8game.netlify.app/", "_blank")
                }
              >
                Live Website
              </button>
            </div>
          </div>
          <div className="projects-tile">
            <h3>Karen Parcell Homes</h3>
            <p>
              "Karen Parcell Homes" is a personal website I created for my
              friend's mom, a Berkshire Hathaway real estate agent.
            </p>
            <div className="projects-chips">
              <div>Next.js</div>
              <div>TypeScript</div>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-github"
                onClick={() =>
                  open(
                    "https://github.com/blozinski056/karen-parcell",
                    "_blank"
                  )
                }
              >
                <img src={link} alt="" />
              </button>
              <button
                className="projects-link"
                onClick={() =>
                  open("https://www.karenparcellhomes.com/", "_blank")
                }
              >
                Live Website
              </button>
            </div>
          </div>
          <div className="projects-tile">
            <h3>RemindMe</h3>
            <p>
              "RemindMe" is a full-stack CRUD website! It implements user
              authentication and manages user data from a database.
            </p>
            <div className="projects-chips">
              <div>React.js</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>PostgreSQL</div>
              <div>SCSS</div>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-github"
                onClick={() =>
                  open("https://github.com/blozinski056/reminder-app", "_blank")
                }
              >
                <img src={link} alt="" />
              </button>
              <button
                className="projects-link"
                onClick={() =>
                  open("https://remind-me-notes.netlify.app/", "_blank")
                }
              >
                Live Website
              </button>
            </div>
          </div>
          {/* <div className="projects-tile">
            <h3>MovieTracker</h3>
            <p>
              "MovieTracker" implements user authentication, tracks movies the
              user has watched, and tracks movies the user has not watched.
            </p>
            <div className="projects-chips">
              <div>React.js</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>PostgreSQL</div>
              <div>SCSS</div>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-github"
                onClick={() =>
                  open("https://github.com/blozinski056/movie-list")
                }
              >
                <img src={link} alt="" />
              </button>
              <button
                className="projects-link"
                onClick={() => open("https://www.movietrackerlist.com/")}
              >
                Live Website
              </button>
            </div>
          </div> */}
        </div>
        <button
          onClick={() =>
            open("https://github.com/blozinski056?tab=repositories", "_blank")
          }
          className="button-primary"
        >
          More Projects Here
        </button>
      </div>
    </section>
  );
}
