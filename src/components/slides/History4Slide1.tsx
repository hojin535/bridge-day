"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import Image from "next/image";

export default function History4Slide1() {
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-[85%]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">History: 4학년</h2>
          <p className="text-3xl md:text-5xl text-slate-300 italic">서비스 배포 경험</p>
        </motion.div>

        <div className="hidden md:block" />
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-10"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-6">Activity & Growth</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-2xl mb-1">순간 스튜디오 홈페이지 제작</h4>
                <p className="text-lg text-slate-400">팀 프로젝트(TrippleS 동아리)</p>
                <p>2025년 1월 ~ 2025년 3월</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  📱 반응형 웹
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  🚀 배포
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  🔍 검색 노출
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full h-full py-6 px-2 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-slate-500 overflow-hidden"
          >
            <Carousel 
              slides={[
                                // Slide 1: Runky 프로젝트
                <div key="runky" className="flex flex-col h-full w-full p-4">

                  <div className="flex items-center justify-center flex-1">
                      <iframe src="https://drive.google.com/file/d/1p7tQ3PEASRvNNZIogyLCu4VXqVuh5sjh/preview" width="640" height="480"></iframe>
                  </div>
                </div>,
                // Slide 0: DND 활동
                <div key="sungan" className="flex flex-row items-center justify-center h-full w-full p-4">
                  <div className="flex flex-row items-center justify-center gap-4 flex-1" >
                      <Image src="/assets/sungan/구글검색.png" alt="Sungan" width={440} height={350} className="object-contain"/>
                      <Image src="/assets/sungan/네이버 검색.png" alt="Sungan" width={440} height={250} className="object-contain"/>
                  </div>
                </div>,

              ]} 
              className="h-full" 
            />
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
