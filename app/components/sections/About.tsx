import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";

const AboutSection = () => {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "Prisma" },
    { skill: "MongoDB" },
  ]
  
  return ( 
    <section id="about">
    <Container>
      <div 
        className="
        "
      >
        <Heading
          center
          title="About Me"
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

      <div 
        className="
          flex
          flex-col
          space-y-20
          lg:space-x-10
          lg:space-y-0
          lg:flex-row
        "
      >
        <div
          className="
          md:w-[100%]
          lg:w-[120%]
          "
        >
        <Text
          text="Front End Developer currently studying Bachelor of Commerce in Information Systems and Finance. I am a dedicated, open-minded person, developing professional skills, constantly adapting and learning to new things all the time. Currently learning React, Tailwind CSS to further deepen my knowledge in front-end development. In the distant future, I will be learning MySQL.
          Constantly broadening my knowledge of the Node.js and React ecosystem. Since then, I fell in love with & have primarily using React & Typescript in web applications with Next.js 13 app router small and big projects. 
          "
        />

        </div>
      


        <div 
        className="
          flex
          flex-wrap
          justify-start
          lg:justify-start
          md:gap-2
        "
        >

          {skills.map((items, idx) => {
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
    
    
        </div>
      </div>

    </Container>
    </section>
   );
}
 
export default AboutSection;