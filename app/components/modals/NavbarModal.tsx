"use client"

import useNavModal from "@/app/hooks/useNavModal";
import Modal from "./Modal";
import Switch from "../navbar/Switch";
import Link from "next/link";

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
      label: "Projects",
      page: "projects",
    }
  ];

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div 
        className="
        flex 
        flex-col 
        gap-8 
        space-y-8
        "
        >
          {NAV_ITEMS.map((item, idx) => {
                    return <Link key={idx} href={""}>{item.label}</Link>
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