'use client'

import {Link } from "react-scroll";

import Heading from "../Heading";
import { HiArrowDown } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Container from "../Container";



const HeroSection = () => {
  return ( 
    <section id ="home">
    <Container>
      <div 
        className="
         overflow-hidden
          flex 
          flex-col
          items-center
          justify-center
          my-10
          pt-32
          gap-5
          md:flex-row
          md:space-x-10
          md:mt-2
          md:py-35
        "
      >
          <div
            className="
            before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2/40 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/40 after:animate-spin-slow after:-z-10 
            "
          >
            <p className="uppercase text-md tracking-widest text-gray-600 text-center pt-10 dark:text-gray-200">
              LET&apos;S BUILD SOMETHING LEGENDARY TOGETHER
            </p>

            <Heading
              center
              title="Hi, I'm Anthony!"
              />

            
            <p className="text-lg tracking-widest text-gray-600 text-center pt-5 dark:text-gray-200">
            I&apos;m a Front-End Developer based in Sydney, NSW.
            </p>
              

            <p className="text-lg tracking-widest text-gray-600 text-center dark:text-gray-200">
            I build & design software things that makes life easier and more meaningful.
            </p>
              
            <div 
              className="
                flex 
                justify-center
                py-5
              "
            >
            <Link
              to="projects"
              className="
                group
                flex
                items-center
              text-neutral-100
                px-6
                py-3
                bg-gradient-to-r from-cyan-500 to-blue-500
                rounded
                shadow
                hover:scale-110
                transition
                cursor-pointer
                "
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                  Projects
                  
                  <MdKeyboardArrowRight
                    size={20}
                    className="mt-0.5 group-hover:rotate-90 duration-300 "
                  />
              </Link>
          </div>
        </div>
      </div>
      
      <div 
        className="
          flex
          flex-row
          justify-center
        "
        >
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
          </Link>

          <HiArrowDown
            size={35}
            className="animate-bounce"
          /> 
      </div>
    </Container>
    </section>
   
   );
}
 
export default HeroSection;