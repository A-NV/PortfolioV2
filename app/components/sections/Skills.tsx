import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-scroll";

const Skills = () => {
  return ( 
    <section id="skills">
      <Container>
        <Heading 
          center
          title="Skills"
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
          ></hr>
        <div>
          skills here
        </div>
      </Container>
    </section>
   );
}
 
export default Skills;