import React from "react";
// import "./BrowseTopCategory.css";

function BrowseTopCategory() {
    const categories = [
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Label",
          noOfCourses: "63,476 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Business",
          noOfCourses: "52,822 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Finance & Accounting",
          noOfCourses: "33,841 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "IT & Software",
          noOfCourses: "22,649 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Personal Development",
          noOfCourses: "20,126 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Office Productivity",
          noOfCourses: "13,932 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Marketing",
          noOfCourses: "12,068 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Photography & Video",
          noOfCourses: "6,196 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Lifestyle",
          noOfCourses: "2,736 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Design",
          noOfCourses: "2,600 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Health & Fitness",
          noOfCourses: "1,678 Courses",
        },
        {
          logo: "/images/categoryLogos/category1.png",
          category: "Music",
          noOfCourses: "959 Courses",
        },
      ];
      

  return (
    <div id="browse-top-category">
      <h2 className="heading">Browse Top Category</h2>
      <div className="category-tabs">
        {categories.map((ele, i) => (
          <div className="category-tab" key={i}>
            <img src={ele.logo} alt={ele.category} />
            <div className="category-card-right">
            <h6>{ele.category}</h6>
            <p>{ele.noOfCourses}</p>
            </div>
           
          </div>
        ))}
      </div>
      <div className="browse-more">
        <p>We have more categories & subcategories.</p>
        <button>Browse All</button>
      </div>
    </div>
  );
}

export default BrowseTopCategory;
