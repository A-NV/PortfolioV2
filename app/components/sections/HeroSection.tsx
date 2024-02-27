'use client'

import {Link } from "react-scroll";

import Typewriter from 'typewriter-effect';
import { HiArrowDown } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Container from "../Container";



const HeroSection = () => {
  return ( 

    <Container>
      <div 
        className="
          overflow-hidden
          flex 
          flex-col
          items-center
          justify-center
          gap-5
          md:space-x-10
          md:mt-2
          md:pt-35
          h-screen
        "
      >
          <div
            className="
            before:absolute before:h-1/2 before:w-1/2 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2/40 before:animate-spin-slower before:-z-10 after:absolute after:h-1/2 after:w-1/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/40 after:animate-spin-slow after:-z-10 
            "
          >
            <p className="uppercase text-md tracking-widest text-gray-600 text-center pt-10 dark:text-gray-200">
              LET&apos;S BUILD SOMETHING LEGENDARY TOGETHER
            </p>

          <div className="flex font-sans text-2xl font-semibold tracking-widest pt-20 pb-5 md:text-3xl items-center justify-center ">
            <Typewriter
              options={{
                strings: ["Hi, the name's Anthony Neav", "< Crt+C, Crt+V />"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          

            <p className="text-lg tracking-widest text-gray-600 text-center dark:text-gray-200">
            I build & design software things that makes life easier and for fun!!
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
      
      
      <div 
        className="
          flex
          items-center
          justify-center
          pt-5
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
      </div>
    </Container>
 
   );
}
 
export default HeroSection;