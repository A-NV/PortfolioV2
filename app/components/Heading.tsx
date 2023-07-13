'use client'

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
}) => {
  return ( 
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold pt-40 md:text-3xl">
        {title}
      </div>
      <div className="font-normal text-neutral-800 mt-5">
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;