"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import Image from "next/image"
export default function History3Slide() {
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-[85%]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">History: 3학년</h2>
          <p className="text-3xl md:text-5xl text-slate-300 italic">경험 확장 - 해커톤, 동아리, 캡스톤</p>
        </motion.div>

        <div className="hidden md:block" />
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-10"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-6">경험 확장</h3>
            <ul className="space-y-6">
              <li>
                <span className="font-semibold block text-2xl mb-1">AWS-ART 해커톤</span>
                <span className="text-lg text-slate-400">타 학교 교류 & 팀 프로젝트</span>
              </li>
              <li>
                <span className="font-semibold block text-2xl mb-1 ">🥈 2024 캡스톤 디자인 은상 (NetCustomaster)</span>
                <span className="text-lg text-slate-400">ICGHIT 국제 학술대회</span>
              </li>
              <li>
                <span className="font-semibold block text-2xl mb-1">교내 활동</span>
                <span className="text-lg text-slate-400">원정 푸드 쇼핑몰, UFO (축제 주문 서비스)</span>
              </li>
            </ul>
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
                // Slide 0: AWS-ART Hackathon
                <div key="aws-art" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white">AWS-ART 해커톤</span>
                    <span className="text-sm text-slate-400 block">Javis</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 flex-1">
                    <div className="w-full flex justify-center">
                      <iframe src="https://drive.google.com/file/d/1bxMbK92L7m2OuE3SEWryrmBa2RFgsTUo/preview" className="w-[550px] h-[300px] rounded-lg border-0"></iframe>
                    </div>
                    <div className="relative w-[350px] h-[180px]">
                      <Image src="/assets/ART-AWS/ART-AWS.jpeg" alt="그룹사진" fill className="object-contain rounded-lg" />
                    </div>
                  </div>
                </div>,

                // Slide 1: Capstone Design
                <div key="capstone" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white">🥈 캡스톤 디자인 은상</span>
                    <span className="text-sm text-slate-400 block">NetCustomaster</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 flex-1">
                    {/* 첫줄: 실물, 홈 사진 */}
                    <div className="flex flex-row justify-center gap-3">
                      <div className="relative w-[280px] h-[200px]">
                        <Image src="/assets/NetCustomaster/실물.png" alt="실물" fill className="object-contain rounded-lg" />
                      </div>
                      <div className="relative w-[320px] h-[200px]">
                        <Image src="/assets/NetCustomaster/홈.png" alt="홈" fill className="object-contain rounded-lg" />
                      </div>
                    </div>
                    {/* 둘째줄: 설정 사진 */}
                    <div className="flex justify-center">
                      <div className="relative w-[320px] h-[180px]">
                        <Image src="/assets/NetCustomaster/설정.png" alt="설정" fill className="object-contain rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>,

                // Slide 2: ICGHIT
                <div key="icghit" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg text-white">ICGHIT 학술대회</span>
                    <span className="text-sm text-slate-400 block mb-2">논문 등재 및 구두 발표 영어</span>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-center flex-1">
                    {/* 논문 사진 - 세로로 길게 */}
                    <div className="relative h-[400px] w-[280px]">
                      <Image 
                        src="/assets/NetCustomaster/논문.png" 
                        alt="논문" 
                        fill
                        className="object-contain rounded-lg bg-white"
                      
                      />
                    </div>
                    {/* 단체 사진 - 가로로 길게 */}
                    <div className="relative w-[350px] h-[230px]">
                      <Image 
                        src="/assets/NetCustomaster/단체사진.jpeg" 
                        alt="단체사진" 
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ]} 
              className="h-full" 
            />
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
