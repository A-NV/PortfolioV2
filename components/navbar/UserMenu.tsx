'use client'

import { useState } from "react";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const UserMenu = () => {
  const [navbar] = useState(false);

  return ( 
    <div
      className="
      md:hidden
     "
     >
      {navbar ? 
        <IoMdClose
          size={30}
        /> 
          : 
        <IoMdMenu
          size={30}
        /> 
      }

    </div>
   );
}
 
export default UserMenu;