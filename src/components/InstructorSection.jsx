import React from "react";
import "../styles/InstructorSection.css";

function InstructorSection() {
  let topInstructors = [
    {
      image: "/images/instructor-1.png",
      name: "Devon Lane",
      title: "Senior Developer",
      rating: 4.6,
      noOfStudents: 854,
    },
    {
      image: "/images/instructor-1.png",
      name: "Devon Lane",
      title: "Senior Developer",
      rating: 4.6,
      noOfStudents: 854,
    },

    {
      image: "/images/instructor-1.png",
      name: "Devon Lane",
      title: "Senior Developer",
      rating: 4.6,
      noOfStudents: 854,
    },

    {
      image: "/images/instructor-1.png",
      name: "Devon Lane",
      title: "Senior Developer",
      rating: 4.6,
      noOfStudents: 854,
    },
  ];
  return (
    <div id="instructor-section">
      <div id="top-instructor-section">
        <div className="top-instruc-left">
          <h3>Become an Instructor</h3>
          <p>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="btn-primary">Start Teaching</button>
        </div>
        <div className="top-instruc-right">
        <h3>Your teaching & earning steps</h3>
          <div id="earning-steps-grid">
          <div><span>1 </span><p>Apply to become instructor</p></div>
          <div><span>2 </span><p>Apply to become instructor</p></div>
          <div><span>3 </span><p>Apply to become instructor</p></div>
          <div><span>4 </span><p>Apply to become instructor</p></div>
          </div>
         
         
        </div>
      </div>

      {/* bottom instructor section */}
      
      <div id="bottom-instructor-section">
        <h2>Top instructor of the month</h2>
        <div className="instructors-box">
          {topInstructors.map((ele, i) => {
            return <div className="instructor-card" key={i}>
                <img src={ele.image} alt="" />
                <h4>{ele.name}</h4>
                <p>{ele.title}</p>
                <div className="instruc-info">
                <p>⭐ {ele.rating}</p>
                <p>{ele.noOfStudents} students</p>
                </div>
                
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
