'use client'

import {Link } from "react-scroll";

import Heading from "../Heading";
import { HiArrowDown } from "react-icons/hi"
import Container from "../Container";



const HeroSection = () => {
  return ( 
    <section id ="home">
    <Container>
      <div 
        className="
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
            I'm a Front-End Developer based in Sydney, NSW.
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
              text-neutral-100
                font-semibold
                px-6
                py-3
              bg-teal-600
                rounded
                shadow
              hover:bg-teal-700
                hover:scale-110
                transition
                text-center
                cursor-pointer
                "
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                  Projects
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