"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-soft-green shadow-lg bg-white max-w-xs w-full" key={i}>
                  <div className="text-tertiary leading-relaxed text-sm md:text-base mb-4 md:mb-6">{text}</div>
                  <div className="flex items-center gap-3 mt-4 md:mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-dark text-sm md:text-base">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-primary text-xs md:text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};