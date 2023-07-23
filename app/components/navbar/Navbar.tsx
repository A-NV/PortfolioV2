'use client'

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Switch from "./Switch";
import {Link } from "react-scroll";
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
    label: "Skills",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  }
];

const Navbar = () => {
  const navbarModal = useNavModal();
  
  return ( 
  <div className="fixed w-full top-0 z-10 shadow-md bg-white dark:bg-[rgb(36,36,36,36)] dark:border-b dark:border-stone-600">
    <div
      className="
        py-2
      "
    >
      <Container>
        <div 
          className="
            flex
            items-center
            justify-between
            py-2
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
                max-md:hidden              "
            >
              <div
                className="
                  flex
                  flex-row
                  items-center
                  justify-end
                  gap-3
                  md:gap-0
                  md:space-x-3
                "
              >
              
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link 
                    key={idx} 
                    to={item.page}
                      className="
                        cursor-pointer
                        px-4
                        py-1
                        rounded-full
                        hover:bg-gray-300
                        transition
                        ease-in-out
                        duration-300
                        "
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >
                      {item.label}
                  </Link>
                )
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