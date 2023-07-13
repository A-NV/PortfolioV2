'use client'

import {Link } from "react-scroll";
import Image from "next/image";
import Heading from "../Heading";
import { HiArrowDown } from "react-icons/hi"
import Container from "../Container";
import Text from "../Text";


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
          <Image
            className="rounded-full"
            src={"/images/placeholder.jpg"}
            alt=""
            width={300}
            height={300}
          />

          <div
            className="
              
            "
          >
            <Heading
              center
              title="Hi, I'm Anthony!"
              />

            <Text
            center
              text="I'm a Front-End Developer based in Sydney, AU. Working towards 
              creating software that makes life easier and more meaning."
              />
              
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
                text-center
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