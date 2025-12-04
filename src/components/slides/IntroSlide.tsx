"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Image from "next/image";

const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500 transition-colors">
    <div className="w-5 h-5 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium text-slate-200">{name}</span>
  </div>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full fill-[#61dafb]">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full fill-white">
    <mask id="mask0_next" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#mask0_next)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
      <rect x="115" y="54" width="12" height="72" fill="white" />
    </g>
  </svg>
);

const JSIcon = () => (
<img src="/assets/javascript.svg"></img>
);

const TSIcon = () => (
<img src="/assets/typescript.svg"></img>
);


export default function IntroSlide() {
  return (
    <Slide>
      <div className="text-center space-y-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            Bridge Day
          </h1>
          <h2 className="text-3xl md:text-5xl font-light text-slate-300">
            <span className="text-gradient font-semibold">4년간의 발자취</span>
          </h2>
        </motion.div>



        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-panel p-12 mt-12"
        >
          <div className="flex items-center gap-8 mb-6">
            <Image 
              src="/assets/profile.jpg" 
              alt="Profile" 
              width={160} 
              height={160} 
              className="w-40 h-40 rounded-full border-4 border-slate-700 object-cover"
            />
            <h3 className="text-5xl font-bold">김호진</h3>
          </div>
          <p className="text-3xl text-slate-400 mb-10 text-left">스마트소프트웨어학과 4학년</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-2xl font-bold text-blue-400 mb-4">Profile</h4>
              <div className="space-y-2 text-xl">
                <p>Web Front-end</p>
                <p className="mt-4">Contact: hojin5353@gmail.com</p>
              </div>

              <h4 className="text-2xl font-bold text-green-400 mt-8 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                <TechBadge name="React" icon={<ReactIcon />} />
                <TechBadge name="Next.js" icon={<NextIcon />} />
                <TechBadge name="React Native" icon={<ReactIcon />} />
                <TechBadge name="JavaScript" icon={<JSIcon />} />
                <TechBadge name="TypeScript" icon={<TSIcon />} />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-purple-400 mb-4">Awards</h4>
              <ul className="space-y-3 text-xl">
                <li>🏆 2023 캡스톤 디자인 금상 (가보자)</li>
                <li>🥈 2024 캡스톤 디자인 은상 (버슬버스)</li>
                <li>🥉 2025 캡스톤 디자인 동상 (NetCustomaster)</li>
              </ul>
            </div>
          </div>
        </motion.div>


      </div>
    </Slide>
  );
}
