import React from "react";
import "../styles/FeaturedCourses.css";

function FeaturedCourses() {
  const featuredCourses = [
    {
      image: "/images/courses/course-image-1.png",
      tag: "HEALTH & FITNESS",
      title: "Investing In Stocks The Complete Course! (13 Hours)",
      instructor: "Kevin Gilbert",
      students: "265.7K",
      rating: "5.0",
      reviews: "357,914",
      level: "Beginner",
      duration: "6 hour",
      price: "$14.00",
      oldPrice: "$26.00",
    },
    {
      image: "/images/courses/course-image-1.png",
      tag: "PERSONAL DEVELOPMENT",
      title: "Google Analytics Certification - Learn How To...",
      instructor: "Kevin Gilbert",
      students: "265.7K",
      rating: "5.0",
      reviews: "357,914",
      level: "Beginner",
      duration: "6 hour",
      price: "$14.00",
      oldPrice: "$26.00",
    },
    {
      image: "/images/courses/course-image-1.png",
      tag: "PRODUCTIVITY",
      title: "Adobe XD for Web Design: Essential Principles",
      instructor: "Kevin Gilbert",
      students: "265.7K",
      rating: "5.0",
      reviews: "357,914",
      level: "Beginner",
      duration: "6 hour",
      price: "$14.00",
      oldPrice: "$26.00",
    },
    {
      image: "/images/courses/course-image-1.png",
      tag: "MUSIC",
      title: "The Python Mega Course: Build 10 Real World...",
      instructor: "Kevin Gilbert",
      students: "265.7K",
      rating: "5.0",
      reviews: "357,914",
      level: "Beginner",
      duration: "6 hour",
      price: "$14.00",
      oldPrice: "$26.00",
    },
  ];

  return (
    <div className="featured-courses">
      <h1 className="featured-title">Our feature courses</h1>
      <p className="featured-description">
        Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec varius
        purus et eleifend porta.
      </p>
      <div className="feature-courses-grid">
        {featuredCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <div className="course-card-top">
              <span className={`course-tag ${course.tag.toLowerCase().replace(/\s+/g, "-")}`}>
                {course.tag}
              </span>
              <div className="course-price">
                <span className="current-price">{course.price } </span> {" "}
                <span className="old-price"> { course.oldPrice}</span>
              </div>
              </div>
              
              
              <p className="course-title">{course.title}</p>
              
              <div className="course-meta">
              <p className="course-instructor">{course.instructor}</p>
                <span className="rating">⭐{course.rating} ({course.reviews})
                </span>
                
              </div>
             
              <div className="course-details">
              <span className="students">{course.students} students</span>
                <span className="level">{course.level}</span>
                <span className="duration">{course.duration}</span>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;
