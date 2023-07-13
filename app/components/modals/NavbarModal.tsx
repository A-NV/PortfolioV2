"use client"

import useNavModal from "@/app/hooks/useNavModal";
import Modal from "./Modal";
import Switch from "../navbar/Switch";
import {Link } from "react-scroll";

interface NavItem {
  label: string
  page: string
}

const NavbarModal: React.FC<NavItem> = () => {
  const navbarModal = useNavModal();

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
      page: "page",
    },
    {
      label: "Projects",
      page: "projects",
    }
  ];

  let bodyContent = (
    <div className="flex flex-col gap-8 ">
      <div 
        className="
        flex 
        flex-col 
        gap-8 
        space-y-8
        "
        >
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link 
                    onClick={navbarModal.onClose}
                    key={idx} 
                    to={item.page}
                      className="
                        cursor-pointer
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
  )

  return ( 
    <Modal
      isOpen={navbarModal.isOpen}
      onClose={navbarModal.onClose}
      onSubmit={navbarModal.onOpen}
      title="Navbar"
      actionLabel="Contact me"
      body={bodyContent}
    />
   );
}
 
export default NavbarModal;