'use client'

import { useTheme } from "next-themes"

import { RiMoonFill, RiSunLine } from "react-icons/ri"

const Switch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return ( 
    <div>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="
            bg-slate-100
            p-2
            rounded-xl
          "
        >
          <RiSunLine 
            size={25}
            color="#06b6d4"
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="
            bg-slate-100
            p-2
            rounded-xl
          "
        >
        <RiMoonFill 
          size={25}
        />
      </button>
      )
    
    }
    </div>
   );
}
 
export default Switch;