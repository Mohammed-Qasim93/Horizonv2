import React from "react";
import { Button } from "../components";
import { motion } from "framer-motion";
import { container, item } from "../animations";

const ShowCase = () => {
  return (
    <div
      id="الرئيسية"
      className="h-screen grid items-center lg:px-40 px-10 grid-cols-2"
    >
      <motion.div
        className=" flex flex-col justify-center items-center col-span-2 mr-6 w-full gap-y-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="flex flex-col gap-y-3">
          <h1 className="md:text-6xl text-4xl ">اهلا بك في موقعنا</h1>
          <p className="text-3xl">حيث نضع كل خبراتنا لتحقيق احلامك</p>
        </motion.div>
        <motion.div className="flex gap-x-4 text-base">
          <Button
            href="#من نحن"
            text="إعرف المزيد"
            className="bg-skin-fill hover: px-4 rounded-md py-2 border-2"
          />
          <Button
            href="#أعمالنا"
            text="أعمالنا"
            className="bg-skin-button-accent text-skin-muted hover:bg-skin-button-accent-hover px-4 rounded-md py-2 border-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShowCase;
