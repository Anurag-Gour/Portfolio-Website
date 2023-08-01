import React from "react";
import Header from "../components/Header";
const Skills = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
              <li className="list-inline-item">
                <img src="assets/img/c.png" alt="" height={"56dp"} />
              </li>
              <li className="list-inline-item">
                <img src="assets/img/c++.png" alt="" height={"56dp"} />
              </li>
              <li className="list-inline-item">
                <img src="assets/img/git.png" alt="" height={"56dp"} />
              </li>
              <li className="list-inline-item">
                <img src="assets/img/mui.png" alt="" height={"56dp"} />
              </li>
            </ul>
            <div className="subheading mb-3">Projects</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                FoodieFinds - E-commerce Website
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                YourTube - Video Streaming Website (Youtube Clone)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                Kinesics - Hand Gesture Recognition Systems
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                Blogosphere - A Blogging Website
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Skills;
