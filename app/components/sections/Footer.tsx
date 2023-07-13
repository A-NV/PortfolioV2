import Container from "../Container";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"


const Footer = () => {
  return ( 
    <Container>
      <hr 
        className="
         w-full
         h-0.5
         mx-auto
         mt-8
         bg-neutral-200
         border-0
        "
        />
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Anthony Neav<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={35}
            />
          </a>
          
          <a
            href=""
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={35}
            />
          </a>
          </div>
          </div>
    </Container>
   );
}
 
export default Footer;