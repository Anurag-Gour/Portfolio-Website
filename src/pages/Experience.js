import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />

        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Development Team Member</h3>
                <div className="subheading mb-3">CLDC Charusat</div>
                <p>
                  Designed and developed new web pages and features for the
                  club's website. Maintained and updated the club's website,
                  including adding new content and fixing bugs. Troubleshooting
                  website issues and resolving them in a timely manner. Worked
                  with other team members to ensure the website was up-to-date
                  and accessible to all members.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">April 2023 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developement Intern</h3>
                <div className="subheading mb-3">iCode49 Technolabs</div>
                <p>
                  During my internship, I learned the basics of web development
                  and React JS. I also learned how to use Material UI, a popular
                  React JS component library. I used these skills to develop an
                  e-commerce website on the MERN stack. The MERN stack is a
                  popular full-stack web development framework that consists of
                  MongoDB, Express, React, and Node.js.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">May 2023 - June 2023</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Experience;
