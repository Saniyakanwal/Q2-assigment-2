import Footer from "../Footer/page"
import Header from "../Header/page"
import CssStyle from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div>
      <Header/>
      <h1 className={CssStyle.h1}>Contact Us</h1>
      <p className={CssStyle.p}>we would love to hear from you! Reach out to us via the details below:</p>
      <div className={CssStyle.div}>
        <p><strong>Phone:</strong> +92 3477212290</p>
        <p><strong>Email:</strong> kanwal0155@gmail.com</p>
        </div>
        <h2 className={CssStyle.h2}>Follow Us</h2>
        <a href="https://www.instagram.com/saniya_kanwal_/" target="_blank"> 
          <FontAwesomeIcon icon={faInstagram} className={CssStyle.icon}/></a>
        <a href="https://github.com/Saniyakanwal" target="_blank">
          <FontAwesomeIcon icon={faGithub} className={CssStyle.icon}/>
        </a>
        <a href="https://www.linkedin.com/in/saniya-kanwal-72582a250" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={CssStyle.icon}/>
        </a>
      <Footer/>
    </div>
  )
}

export default Contact
