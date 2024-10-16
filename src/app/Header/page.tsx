
import Link from "next/link"
import cssStyle from "./header.module.css"

const Header = () => {
  return (
    <>
         <h1 className={cssStyle.h1}>Assigment-2</h1>    
        <div className="flex gap-6 justify-center text-3xl bg-gradient-to-t from-red-600 to bg-purple-800">
          <Link href="/">Home</Link>
           <Link href="/About"> About</Link>
           <Link href="/Contact">Contact</Link>
        </div>
    </>
  )
}

export default Header
