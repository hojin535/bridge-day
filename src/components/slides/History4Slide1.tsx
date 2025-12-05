"use client";

import React, { useState } from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import Image from "next/image";

export default function History4Slide1() {
  // Search Exposure: 0=구글검색, 1=네이버 검색
  const [searchImageIndex, setSearchImageIndex] = useState(0);
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 h-[85%] grid-rows-[150px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">History: 4학년</h2>
          <p className="text-2xl md:text-4xl text-slate-300 italic">서비스 배포 경험</p>
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
                                // Slide 0: 홈페이지 영상
                <div key="homepage" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white text-[1.5rem]">순간 스튜디오 홈페이지</span>
                    <span className="text-sm text-slate-400 block text-[1.25rem]">반응형 웹 제작 및 배포</span>
                  </div>
                  <div className="flex items-center justify-center flex-1">
                    <iframe src="https://drive.google.com/file/d/1p7tQ3PEASRvNNZIogyLCu4VXqVuh5sjh/preview" width="800" height="450"></iframe>
                  </div>
                </div>,
                // Slide 1: 검색 노출
                <div key="search" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white text-[1.5rem]">순간 스튜디오 검색 노출</span>
                    <span className="text-sm text-slate-400 block text-[1.25rem]">구글 및 네이버 검색 결과</span>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4 flex-1">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setSearchImageIndex((prev) => (prev + 1) % 2)}
                    >
                      {searchImageIndex === 0 && (
                        <div className="relative w-[700px] h-[500px]">
                          <Image src="/assets/sungan/구글검색.png" alt="구글검색" fill className="object-contain"/>
                        </div>
                      )}
                      {searchImageIndex === 1 && (
                        <div className="relative w-[700px] h-[500px]">
                          <Image src="/assets/sungan/네이버 검색.png" alt="네이버검색" fill className="object-contain"/>
                        </div>
                      )}
                    </div>
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
