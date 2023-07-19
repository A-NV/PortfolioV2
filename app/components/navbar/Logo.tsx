import { Link } from "react-scroll"

const Logo = () => {
  return ( 
    <div className="flex items-center justify-between py-3  md:block">
    <Link 
      to="home">
      <div className="container flex items-center space-x-2">
        <h2 className="text-xl font-bold">Anthony Neav</h2>
      </div>
      </Link>
      </div>
   );
}
 
export default Logo;