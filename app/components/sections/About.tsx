import Container from "../Container";
import Heading from "../Heading";

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
    { skill: "StepZen" },
    { skill: "Tremor 2.0" },
    { skill: "GraphQL" },
  ]
  
  return ( 
    <Container>
      <div className="pb-40 pt-5">
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
          lg:w-[140%]
          "
        >
        <p>      
        Hello, I&apos;m Anthony Neav. By day, you&apos;ll find me immersed, navigating through the challenges with a positive mindset. When the day winds down, I enjoy exploring books, gymnastics or running and finding simple joys in life. I&apos;m known for my kindness, and I believe in the power of genuine connections. Whether it&apos;s a thoughtful conversation or a shared laugh, I appreciate the beauty in the little things. Let&apos;s journey through life with kindness and authenticity, making each day a bit brighter for ourselves and those around us.
          </p>

        </div>  
        <div 
        className="
          flex
          flex-wrap
          justify-start
          lg:justify-start
          md:gap-2
          md:space-x-0
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
                  max-md:mt-2
                text-gray-500
                  rounded-sm
                  items-center
                  justify-center
                  max-h-10
                  
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
   );
}
 
export default AboutSection;