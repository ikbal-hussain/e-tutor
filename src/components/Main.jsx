import React from 'react'
import TopBar from './TopBar'
import HeroSection from './HeroSection'
import BrowseTopCategory from './BrowseTopCategory'
import FeaturedCourses from './FeaturedCourses'
import InstructorSection from './InstructorSection'

function Main() {

  return (
    <main>
       <TopBar />
       <HeroSection/>
       <div id='container-tutor'>
       <BrowseTopCategory/> 
       <FeaturedCourses />
       <InstructorSection />
       </div>
      
    </main>
  )
}

export default Main