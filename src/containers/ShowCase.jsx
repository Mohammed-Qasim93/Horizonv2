import React from "react";
import { Button } from "../components";
import { motion } from "framer-motion";

const ShowCase = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="الرئيسية"
      className="h-screen grid items-center px-40 justify-center grid-cols-2 pt-20"
    >
      <motion.div
        className=" flex flex-col gap-y-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="flex flex-col gap-y-4">
          <h1 className="text-6xl">اهلا بك في موقعنا</h1>
          <p className="text-2xl">حيث نضع كل خبراتنا لتحقيق احلامك</p>
        </motion.div>
        <motion.div variants={item} className="flex gap-x-4 text-base">
          <Button
            text="إتصل بنا"
            className="bg-skin-fill hover: px-4 rounded-md py-2 border-2"
          />
          <Button
            text="اعمالنا"
            className="bg-skin-button-accent text-skin-muted hover:bg-skin-button-accent-hover px-4 rounded-md py-2 border-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShowCase;
