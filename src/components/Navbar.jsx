import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("الرئيسية");

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="text-xl relative">
      <ul className=" hidden md:flex items-center justify-center gap-x-4 ">
        {["الرئيسية", "من نحن", "اعمالنا", "إتصل بنا"].map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                active === item ? "text-skin-inverted" : ""
              } hover:text-skin-muted transition-all duration-200`}
              onClick={() => setActive(item)}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="md:hidden flex items-center  bg-skin-fill p-2 justify-center rounded-full">
        <Button
          handleClick={(e) => {
            handleClick(e);
          }}
          className=""
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </Button>

        {open && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="h-screen fixed
            w-2/4
            top-0 right-0 p-8 drop-shadow-xl bg-skin-fill z-50"
          >
            <AiOutlineClose
              className="text-2xl cursor-pointer "
              onClick={handleClick}
            />
            <ul className="flex flex-col items-center pt-10   w-full justify-center gap-y-4">
              {["الرئيسية", "من نحن", "اعمالنا", "إتصل بنا"].map(
                (item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setActive(item)}
                      className="hover:text-skin-muted transition-all duration-200"
                    >
                      <a onClick={handleClick} href={`#${item}`}>
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
