import Footer from "../Footer/page"
import Header from "../Header/page"
import CssStyle from "./about.module.css"


const About = () => {
  return (
    <div>
        <Header/>
        <br />
        <br />
        <br />
      <h1 className={CssStyle.h1}>About Me</h1>
      <img src="/images/profile.jpg" alt="profile picture"/>
      <p className={CssStyle.p}>Hi! I'm Saniya Kanwal, a passionate web developer with a love for creating clean, efficient, and user-friendly websites. I enjoy bringing ideas to life through code. I'm constantly learning and adapting to new technologies, particularly with frameworks like Next.js and React, to build scalable and responsive web applications.  working on personal projects, and helping others in the development community. Let's connect and create something amazing! </p>
      <br />
      <Footer/>
    </div>
  )
}

export default About
