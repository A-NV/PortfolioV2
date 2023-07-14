
import Link from "next/link";
import Container from "../Container";
import Heading from "../Heading";
import SlideUp from "../SlideUp";
import Image from "next/image"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "StayZen",
    skills: [
      { skill: "HTML" },
      { skill: "CSS" },
      { skill: "TypeScript" },
      { skill: "React" },
      { skill: "Next.js" },
      { skill: "Tailwind CSS" },
      { skill: "Git" },
      { skill: "MongoDB" },
      { skill: "Prisma" },
    ],
    description: 
      "Stayzen is a sleek and user-friendly website offering a wide range of accommodations worldwide. With its modern design and intuitive interface, users can easily explore and book their ideal stays. The visually appealing homepage showcases destination images, while the streamlined navigation makes searching effortless. Stayzen provides a seamless booking process and an engaging system interface, ensuring an enjoyable user experience.",
    image: "/images/stayzen.png",
    github: "https://github.com/A-NV/Airbnb-Clone-",
    link: "https://stayzen-bx87qz78f-a-nv.vercel.app"
  }
]

const Projects = () => {
  return ( 
    <section id="projects">
    <Container>
      <Heading
        center
        title="Projects"
      />
      <hr 
        className="
          w-6 h-1 
          mx-auto 
          mb-20
        bg-teal-500 
          border-0 
          rounded
        "
        >
      </hr>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:mt-8 md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 hover:scale-105 transition"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-300">
                      {project.description}
                    </p>
                    <div 
                      className="
                        flex
                        flex-wrap
                        justify-start
                        lg:justify-start
                        md:gap-2
                        
                      "
                      >

                        {project.skills.map((items, idx) => {
                          return (
                            <div
                              key={idx}
                              className="
                                flex
                                bg-gray-200 
                                px-5
                                py-2
                                mr-2
                                mt-2
                                text-gray-500
                                rounded-sm
                                items-center
                                justify-center
                              "
                            >
                              {items.skill}
                            </div>
                          )
                        })}
                      </div>

                    <div className="flex flex-row align-bottom space-x-4 mt-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </Container>
    </section>
   );
}
 
export default Projects;