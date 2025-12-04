"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";

export default function History3Slide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-2 text-gradient">History: 3학년</h2>
          <p className="text-2xl text-slate-300 italic">"경험의 확장 - 해커톤, 외주"</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-6"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">경험 확장</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold block">AWS-ART 해커톤</span>
                <span className="text-sm text-slate-400">타 학교 교류 & 팀 프로젝트</span>
              </li>
              <li>
                <span className="font-semibold block">실무 경험: 사진 스튜디오 웹사이트</span>
                <span className="text-sm text-slate-400">TrippleS 동아리 외주, 클라이언트 요구사항 분석 및 배포</span>
              </li>
              <li>
                <span className="font-semibold block">교내 활동</span>
                <span className="text-sm text-slate-400">원정 푸드 홈쇼핑, UFO (축제 주문 서비스)</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel p-6"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4">Academic Achievement (학술 성과)</h3>
            <Carousel 
              slides={[
                // Slide 0: AWS-ART Hackathon
                <div key="aws-art" className="flex flex-col h-full w-full">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg">AWS-ART 해커톤</span>
                    <span className="text-sm text-slate-400 block mb-2">타 학교 교류 &rarr; '자비스' 프로젝트로 고도화</span>
                  </div>
                  <div className="w-full h-[200px] bg-slate-700/50 rounded-lg flex items-center justify-center mb-2">
                  <div>
                    <iframe src="https://drive.google.com/file/d/1bxMbK92L7m2OuE3SEWryrmBa2RFgsTUo/view?usp=sharing"/>
                  </div>
                    <p className="text-slate-500 text-sm">[이미지] 해커톤 활동 / 자비스 프로젝트</p>
                  </div>
                </div>,

                // Slide 1: Capstone Design
                <div key="capstone" className="flex flex-col h-full w-full">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg">🥉 캡스톤 디자인 동상</span>
                    <span className="text-sm text-slate-400 block mb-2">(NetCustomaster)</span>
                  </div>
                  <div className="w-full h-[200px] bg-slate-700/50 rounded-lg flex items-center justify-center mb-2">
                    <p className="text-slate-500 text-sm">[이미지] NetCustomaster 시연/발표</p>
                  </div>
                </div>,

                // Slide 2: ICGHIT
                <div key="icghit" className="flex flex-col h-full w-full">
                  <div className="mb-4">
                    <span className="font-semibold block text-lg">ICGHIT 국제 학술대회</span>
                    <span className="text-sm text-slate-400 block mb-2">논문 등재 및 구두 발표 (영어/국문)</span>
                  </div>
                  <div className="w-full h-[200px] bg-slate-700/50 rounded-lg flex items-center justify-center mb-2">
                    <p className="text-slate-500 text-sm">[이미지] 학술대회 발표 사진 / 논문 표지</p>
                  </div>
                </div>
              ]} 
              className="h-[320px]" 
            />
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
