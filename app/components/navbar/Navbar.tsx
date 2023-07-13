'use client'

import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Switch from "./Switch";
import Link from "next/link";
import useNavModal from "@/app/hooks/useNavModal";



interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  }
];

const Navbar = () => {
  const navbarModal = useNavModal();
  const [navbar, setNavbar] = useState(false);
  
  return ( 
  <div className="fixed w-full z-10 shadow-md">
    <div
      className="
        py-4
        border-b-[1px]
      "
    >
      <Container>
        <div 
          className="
            flex
            items-center
            justify-between
            py-3
          "
          >
            <Logo />

            <button
              onClick={navbarModal.onOpen}
            >
                <UserMenu/>
            </button>
          

            <div
              className="
                flex-1 
                justify-self-center 
                pb-3 
                mt-8 
                mt:block
                md:pb-0
                md:mt-0
                max-md:hidden
              "
            >
              <div
                className="
                  flex
                  flex-row
                  items-center
                  justify-end
                  gap-3
                  md:gap-0
                  md:space-x-6
                "
              >
              
               {NAV_ITEMS.map((item, idx) => {
                return <Link key={idx} href={""}>{item.label}</Link>
               })}

               <Switch/>
              </div>
            </div>
        </div>
      </Container>

    </div>
  </div> );
}
 
export default Navbar;