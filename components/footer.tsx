"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FooterProps {
  transitionProgress?: MotionValue<number>;
}

export function Footer({ transitionProgress }: FooterProps) {
  const [vnTime, setVnTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setVnTime(formatter.format(now));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Transition: white (255) → black (0) at 98%+
  const textColor = transitionProgress
    ? useTransform(
        transitionProgress,
        (v) => `rgb(${255 - v * 255}, ${255 - v * 255}, ${255 - v * 255})`
      )
    : "rgb(255, 255, 255)";

  // Pattern color: white → black at 98%+
  const patternColor = transitionProgress
    ? useTransform(
        transitionProgress,
        (v) => `rgb(${255 - v * 255}, ${255 - v * 255}, ${255 - v * 255})`
      )
    : "rgb(255, 255, 255)";

  return (
    <motion.section
      className="relative h-screen py-32 z-40"
      style={{ color: textColor }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-footer"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" />
        </svg>
      </div>

      {/* Vertical and horizontal lines with intersection circles - transition white to black */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
        style={{ color: patternColor }}
      >
        {/* 5 vertical lines dividing layout into 10:20:20:20:20:10 proportions */}
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-[70%] top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-[90%] top-0 bottom-0 w-px bg-current" />

        {/* Horizontal lines spaced by 40% of container width (doubled from 20%) */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-current" />
        <div
          className="absolute left-0 right-0 h-px bg-current"
          style={{ top: "calc(50% - 40%)" }}
        />
        <div
          className="absolute left-0 right-0 h-px bg-current"
          style={{ top: "calc(50% + 40%)" }}
        />

        {/* Circles at intersections with radius = 40% of container width (doubled from 20%) - only center row */}
        <div
          className="absolute left-[10%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current"
          style={{ width: "80%", height: "80%" }}
        />
        <div
          className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current"
          style={{ width: "80%", height: "80%" }}
        />
        <div
          className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current"
          style={{ width: "80%", height: "80%" }}
        />
        <div
          className="absolute left-[70%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current"
          style={{ width: "80%", height: "80%" }}
        />
        <div
          className="absolute left-[90%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current"
          style={{ width: "80%", height: "80%" }}
        />
      </motion.div>

      <div className="relative z-10 flex gap-24 min-h-[calc(100vh-256px)]">
        {/* Left side - INDEX list centered vertically, aligned to left vertical line */}
        <div
          className="w-[30%] flex items-center"
          style={{ paddingLeft: "10%" }}
        >
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ul className="flex flex-col justify-center gap-6 text-2xl font-light h-full">
              <li>
                <Link
                  href="/"
                  className="hover:opacity-60 transition-opacity"
                  data-cursor-text="HOME"
                >
                  INDEX
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:opacity-60 transition-opacity"
                  data-cursor-text="ABOUT ME"
                >
                  PROFILE
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="hover:opacity-60 transition-opacity"
                  data-cursor-text="MY PROJECTS"
                >
                  WORKS
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:opacity-60 transition-opacity"
                  data-cursor-text="GET IN TOUCH"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </motion.nav>
        </div>

        {/* Right side - Contact Info, aligned to 90% vertical line */}
        <div
          className="w-[60%] flex flex-col gap-24 justify-center items-end"
          style={{ paddingRight: "6.3%" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">LOCATION</p>
            <p className="text-sm font-light mb-1">Ho Chi Minh City, Vietnam</p>
            <p className="text-sm font-light">
              {"10°47'14.0\"N 106°44'23.7\"E"}
            </p>
            <p className="text-sm font-light mt-3">{vnTime}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">MAIL</p>
            <p className="text-sm font-light">ng.t.thien01@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-xs tracking-wider mb-4 italic">SNS</p>
            <div className="space-y-2 text-sm font-light">
              <a
                href="https://github.com/Panacea2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity"
                data-cursor-text="GITHUB"
              >
                GitHub <span className="text-xs">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thi%C3%AAn-nguy%E1%BB%85n-l%C3%AA-tr%C6%B0%E1%BB%9Dng-65773b29b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity"
                data-cursor-text="LINKEDIN"
              >
                LinkedIn <span className="text-xs">↗</span>
              </a>
              <a
                href="https://x.com/panacea___005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity"
                data-cursor-text="X / TWITTER"
              >
                X <span className="text-xs">↗</span>
              </a>
              <a
                href="https://www.youtube.com/@Panacea2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity"
                data-cursor-text="YOUTUBE"
              >
                YouTube <span className="text-xs">↗</span>
              </a>
              <a
                href="https://www.instagram.com/__tthien/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 hover:opacity-60 transition-opacity"
                data-cursor-text="INSTAGRAM"
              >
                Instagram <span className="text-xs">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
