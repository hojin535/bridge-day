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
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">Advice</h2>
          <p className="text-2xl md:text-4xl text-slate-300 italic">"후배님들에게 전하고 싶은 이야기"</p>
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
              1학년 때는 폭넓은 학습을 통해 본인이 흥미를 느끼는 분야를 빠르게 파악하기
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
            <h3 className="text-3xl font-bold text-purple-400 mb-6">🚀 도전하기</h3>
            <ul className="space-y-4 text-xl text-slate-300">
              <li>"준비된 때"는 없다. 부족해 보여도 프로젝트, 해커톤등 다양한 활동에 지원하기</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
