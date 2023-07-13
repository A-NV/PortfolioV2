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
          max-lg:flex-col
          md:flex-col
        "
      >
        <div
          className="
            flex
            md:w-[100%]
          "
        >
        <Text
          center
          text="Front End Developer currently studying Bachelor of Commerce in Information Systems and Finance. I am a dedicated, open-minded person, developing professional skills, constantly adapting and learning to new things all the time. Currently learning React, Tailwind CSS to further deepen my knowledge in front-end development. In the distant future, I will be learning MySQL.
          Constantly broadening my knowledge of the Node.js and React ecosystem. Since then, I fell in love with & have primarily using React & Typescript in web applications with Next.js 13 app router small and large projects. 
          "
        />

        </div>
      


        <div 
        className="
          flex
          flex-wrap
          md:justify-center-start
          md:gap-1
        "
        >

          {skills.map((items, idx) => {
            return (
              <div
                key={idx}
                className="
                  flex
                  bg-slate-800 
                  dark:bg-white
                  px-5
                  py-2
                  mr-2
                  mt-10
                  text-white
                  dark:text-black
                  rounded-[25px]
                  font-sans
                  items-center
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