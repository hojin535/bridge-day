"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "../ui/Carousel";

export default function History12Slide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-gradient">History: 1~2학년</h2>
            <p className="text-2xl text-slate-300 italic">내실을 다지고, 프론트엔드 개발의 흥미를 발견하다</p>
          </motion.div>

          <div className="hidden md:block" />

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">1학년: 탐색기</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>전공 기초 확립: Java, Python, HTML/CSS, JS, IoT 기초</li>
                <li>진로 탐색: 다양한 기술 접목 및 적성 분야 발굴</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">2학년: 도전기</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Together 팀 프로젝트</h4>
                <p className="text-sm text-slate-400">봉사활동 모집 플랫폼 / FE 웹 개발</p>
                <p className="text-sm mt-1">Insight: <span className="text-white font-bold">'일단 시작하는 실행력'</span>의 중요성</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">IoT수업 팀 프로젝트</h4>
                <p className="text-sm text-slate-400">스마트 창문 / FE 웹, 센서 로직 개발</p>
              </div>

              <div>
                 <h4 className="font-semibold">🏆 캡스톤 디자인 팀 프로젝트 금상 (가보자)</h4>
                 <p className="text-sm text-slate-400">통합 버스 정보 제공 앱</p>
              </div>
            </motion.div>
          </div>

        <div className="space-y-4">
            {/* Image Placeholders */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-auto py-6 px-2 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-slate-500 overflow-hidden"
            >
              <Carousel 
                slides={[
                  // Slide 0: IoT Project (Placeholder)
                  <div key="iot" className="flex flex-col items-center justify-center h-full w-full">
                    <div className="w-full h-[250px] bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 p-2">
                      <div className="flex gap-6 items-center justify-center w-full h-full">
                        <div className="relative w-[300px] h-[300px]">
                            <Image src="/assets/iot/IoT2.jpg" alt="IoT Project2" fill className="object-contain rounded-lg" />
                        </div>
                        <iframe 
                            src="https://github.com/user-attachments/assets/9f0be10f-5396-457a-8a5c-ddc098e021f8" 
                            className="w-[350px] h-[200px] rounded-lg border-0"
                            allow="autoplay"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">[이미지] IoT 수업 프로젝트 (스마트 창문)</p>
                  </div>,
                  
                  // Slide 1: Gaboja Project (3 images)
                  <div key="gaboja" className="flex flex-col items-center justify-center h-full w-full">
                    <div className="flex justify-center items-center h-[200px]">
                      <div className="relative w-[200px] h-[200px]">
                        <Image src="/assets/gaboja/검색화면.jpg" alt="Together" fill className="object-contain" />
                      </div>
                      <div className="relative w-[200px] h-[200px]">
                        <Image src="/assets/gaboja/경로사진.jpg" alt="Together" fill className="object-contain" />
                      </div>
                      <div className="relative w-[200px] h-[200px]">
                        <Image src="/assets/gaboja/버스노선.jpg" alt="Together" fill className="object-contain" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-4">[이미지] 가보자 앱 시연 화면</p>
                  </div>
                ]} 
                className="h-[350px]" 
              />
            </motion.div>

        </div>
      </div>
    </Slide>
  );
}
