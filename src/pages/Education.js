import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />

        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  Charotar University of Science and Technology
                </h3>
                <div className="subheading mb-3">Bachelor of Technology</div>
                <div>Computer Science Engineering</div>
                <p>CGPA: 9.54</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2021 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  Gyandeep Higher Secondary School, Ahmedabad
                </h3>
                <div className="subheading mb-3">XII (GSEB)</div>
                <p>Percentage: 88</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2020 - May 2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  The New Little Flower High School, Ahmedabad
                </h3>
                <div className="subheading mb-3">X (GSEB)</div>
                <p>Percentage: 88</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">June 2018 - May 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;
