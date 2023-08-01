import React from "react";
import Header from "../components/Header";

const Profiles = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Profiles</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <a
                  className="social-icon"
                  href="https://www.codechef.com/users/anurag_s_gour"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CodeChef
                </a>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <a
                  className="social-icon"
                  href="https://leetcode.com/anurag_s_gour/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LeetCode
                </a>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <a
                  className="social-icon"
                  href="https://github.com/Anurag-Gour"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Github
                </a>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/in/anurag-gour-844070230"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Linked In
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profiles;
