"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";

export default function History4Slide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-2 text-gradient">History: 4학년</h2>
            <p className="text-2xl text-slate-300 italic">"Professionalism: 완성과 공유, 더 넓은 세상으로"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">Activity & Growth</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">DND (개발 연합 동아리) 8주 프로젝트</h4>
                <p className="text-sm text-slate-400">Project 'Runky': 러닝 크루를 위한 소셜 러닝 플랫폼</p>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
                <li>협업 툴(Jira, Slack)을 활용한 애자일 프로세스 경험</li>
                <li>현직자 멘토링을 통한 코드 품질 개선 및 리팩토링</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
             {/* Image Placeholders */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-64 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-500"
            >
                [이미지] DND 활동 단체 사진
            </motion.div>
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="w-full h-64 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-500"
            >
                [이미지] Runky 최종 결과물 시연
            </motion.div>
        </div>
      </div>
    </Slide>
  );
}
