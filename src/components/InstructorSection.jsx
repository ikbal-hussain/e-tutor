import React from "react";

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
      <div className="top-instructor-section">
        <div className="top-instruc-left">
          <h3>Become an Instructor</h3>
          <p>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button>Start Teaching</button>
        </div>
        <div className="top-instruc-right">
          <h3>Your teaching & earning steps</h3>
        </div>
      </div>

      {/* bottom instructor section */}
      <div className="bottom-instructor-section">
        <h1>Top instructor of the month</h1>
        <div className="instructors-box">
          {topInstructors.map((ele, i) => {
            return <div className="instructor-card" key={i}>
                <img src={ele.image} alt="" />
                <h6>{ele.name}</h6>
                <p>{ele.title}</p>
                <p>{ele.rating}</p>
                <p>{ele.noOfStudents} students</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default InstructorSection;
