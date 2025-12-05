"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import Image from "next/image";

export default function History4Slide2() {
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 h-[85%] grid-rows-[150px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">History: 4학년</h2>
          <p className="text-2xl md:text-4xl text-slate-300 italic">협업 경험</p>
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
                <h4 className="font-semibold text-2xl mb-3">DND (개발 연합 동아리) 8주 프로젝트</h4>
                <p className="text-xl text-white mb-2">Project 'Runky': 러닝 크루를 위한 소셜 러닝 플랫폼</p>
                <p className="text-lg text-slate-400 mb-4">2025년 7월 ~ 2025년 9월</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    👥 팀 프로젝트
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    🎨 FE: 2명
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    ⚙️ BE: 2명
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    ✨ Designer: 2명
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    📱 iOS 배포 심사중
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    🚀 기획→개발→배포
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    🤝 Slack • Figma 협업
                  </span>
                </div>
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
                // Slide 0: Runky 로고
                <div key="runky-logo" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white text-[1.5rem]">Runky</span>
                    <span className="text-sm text-slate-400 block text-[1.25rem]">러닝 크루를 위한 소셜 러닝 플랫폼</span>
                  </div>
                  <div className="flex items-center justify-center flex-1">
                    {/* <iframe src="https://indigo-result-179765.framer.app/#contact" width="800" height="450"></iframe> */}
                    <Image src="/assets/Runky/첫화면.png" alt="Runky" width={800} height={600}/>
                  </div>
                </div>,
                // Slide 1: Runky 시연 영상
                <div key="runky-demo" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white text-[1.5rem]">Runky 시연 영상</span>
                    <span className="text-sm text-slate-400 block text-[1.25rem]">주요 기능 데모</span>
                  </div>
                  <div className="flex items-center justify-center flex-1">
                    <iframe src="https://drive.google.com/file/d/1-_ctNxkW2BSrPAs_JAfpc-Vf_QK8SgSC/preview" width="640" height="480"></iframe>
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
