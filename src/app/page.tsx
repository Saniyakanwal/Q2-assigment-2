
import Footer from "./Footer/page";
import Header from "./Header/page";

export default function(){
  return(
    <>
    <Header/>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h2 className="flex justify-center text-4xl  underline decoration-double">Welcome to My Web Development Project</h2>
          <br />
          
          <p className="flex mx-20 text-3xl">This homepage is designed to showcase my skills in building responsive
           and user-friendly websites using Next.js. With a focus on clean design and functionality, From the header to the hero section and footer, every part is crafted to provide a seamless flow for users. Explore the different sections to see how each piece comes together to form a complete and functional website.</p>
         </div> 
    <Footer/>
    </>
  )
}