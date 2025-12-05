"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";

export default function AdviceSlide() {
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">Advice & Takeaway</h2>
          <p className="text-3xl md:text-5xl text-slate-300">"후배님들에게 전하고 싶은 이야기"</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-9xl font-bold">1</span>
            </div>
            <h3 className="text-3xl font-bold text-blue-400 mb-6">💡 다양한 언어로 '내 길' 찾기</h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              1학년 때는 폭넓은 학습을 통해 본인이 흥미를 느끼는 분야(Web, App, AI 등)를 빠르게 파악하는 것이 중요합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel p-10 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-9xl font-bold">2</span>
            </div>
            <h3 className="text-3xl font-bold text-purple-400 mb-6">🚀 기회는 실행하는 자의 것</h3>
            <ul className="space-y-4 text-xl text-slate-300">
              <li>"준비된 때"는 없습니다. 부족해 보여도 프로젝트와 해커톤에 지원하세요.</li>
              <li>AWS 해커톤 사례: 비전공자나 초심자도 열정만으로 참여하여 성장했습니다.</li>
              <li>네트워킹이 예상치 못한 기회(외주, 프로젝트)로 이어집니다.</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-16"
        >
            <p className="text-slate-500 text-sm">Thank you for listening</p>
        </motion.div>
      </div>
    </Slide>
  );
}
