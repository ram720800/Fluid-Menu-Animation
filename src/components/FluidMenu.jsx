import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon } from "./ui/home";
import { MailCheckIcon } from "./ui/mail-check";
import { MenuIcon } from "./ui/menu";
import { SettingsGearIcon } from "./ui/settings-gear";
import { UserIcon } from "./ui/user";
import { XIcon } from "./ui/x";

const menuItems = [
  {
    icon: <HomeIcon className="hover:scale-110 transition-transform" />,
    label: "Home",
  },
  {
    icon: <MailCheckIcon className="hover:scale-110 transition-transform" />,
    label: "Messages",
  },
  {
    icon: <UserIcon className="hover:scale-110 transition-transform" />,
    label: "Profile",
  },
  {
    icon: <SettingsGearIcon className="hover:scale-110 transition-transform" />,
    label: "Settings",
  },
];

export default function FluidMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-6 left-6 z-50`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5"
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", damping: 15, stiffness: 100 },
            }}
            exit={{
              scale: 1,
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
              filter: "blur(10px)",
            }}
            className="mt-4 flex flex-col gap-4"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{
                  y: -20,
                  opacity: 0,
                  borderRadius: "50% 50% 40% 40% / 50% 50% 40% 40%",
                }}
                animate={{ y: 0, opacity: 1, borderRadius: "50%" }}
                transition={{
                  delay: 0.25 * index,
                  duration: 0.8,
                  borderRadius: {
                    delay: 0.25 * index + 1,
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                className="group p-2 rounded-full cursor-pointer transition shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5"
              >
                {item.icon}

                <div className="fixed left-[6rem] top-auto bg-bl1 text-wl1 text-sm font-semibold px-3 py-1 rounded opacity-0 scale-90 group-hover:opacity-100 whitespace-nowrap group-hover:scale-100 transition-all duration-300 max-sm:hidden pointer-events-none z-100">
                  {item.label}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      </div>
  );
}
