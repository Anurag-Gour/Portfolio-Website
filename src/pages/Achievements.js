import React from "react";
import Header from "../components/Header";

const Achievements = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Achievements</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                Qualified for INSPIRE-SHE scholarship in 2021 by GHSEB
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                Participated in CodePie 2.0 (Ranked 51 out of 155 Teams)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                Participated in CodePie 3.0 (Ranked 18 out of 175 Teams)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-minus"></i>
                </span>
                CodeChef : 2 Star (Highest Rating : 1521)
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Achievements;
