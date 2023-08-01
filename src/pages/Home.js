import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Anurag
              <span className="text-primary"> Gour</span>
            </h1>
            <div className="subheading mb-5">
              Ahmedabad, Gujarat
              <br />
              <a href="mailto:gour3551@gmail.com">gour3551@gmail.com</a>
            </div>
            <p className="lead mb-5">
              As a third-year computer science student, I am an enthusiastic
              learner seeking opportunities to broaden my knowledge and skills.
              I aim to apply what I have learned to contribute value to a
              company.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/anurag-gour-844070230"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/Anurag-Gour">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="mailto:gour3551@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <hr className="m-0" />
      </div>
    </>
  );
};

export default Home;
