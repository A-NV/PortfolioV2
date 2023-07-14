'use client'

interface TextProps {
  text: string;
  center?: boolean;
}

const Text: React.FC<TextProps> = ({
  text,
  center,
}) => {
  return ( 
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-xl mt-2 md:text-left md:text-lg text-neutral-600 dark:text-neutral-300">
        {text}
      </div>
    </div>
   );
}
 
export default Text;