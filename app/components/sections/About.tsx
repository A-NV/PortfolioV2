import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";

const AboutSection = () => {
  return ( 
    <section id="about">
    <Container>
      <div 
        className="
          py-15
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

        <Text
          center
          text="Front End Developer currently studying Bachelor of Commerce in Information Systems and Finance. 
          I am a dedicated, open-minded person, developing professional skills, constantly adapting and learning to new things all the time.
          Currently learning react, node.js to further deepen my knowledge in front-end development. In the distant future, I will be learning back-end development."
        />
        
      </div>
    </Container>
    </section>
   );
}
 
export default AboutSection;