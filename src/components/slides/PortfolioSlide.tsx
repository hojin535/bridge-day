"use client";

import React from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";

export default function PortfolioSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-2 text-gradient">Deep Dive: 핵심 포트폴리오</h2>
          <p className="text-2xl text-slate-300 italic">"Main Projects Overview"</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-6 flex flex-col"
          >
            <div className="mb-4 h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 text-sm">
                [이미지] Runky 앱 스크린샷
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">1. Runky (러닝 소셜 플랫폼)</h3>
            <div className="space-y-2 text-sm text-slate-300 flex-grow">
              <p><span className="font-semibold text-white">Stack:</span> React Native, TypeScript</p>
              <p><span className="font-semibold text-white">Key Feature:</span> 실시간 러닝 트래킹, 크루 커뮤니티</p>
              <p><span className="font-semibold text-white">Contribution:</span> [본인이 개발한 핵심 기능 1~2줄 요약]</p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel p-6 flex flex-col"
          >
            <div className="mb-4 h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 text-sm">
                [이미지] 사진 스튜디오 웹사이트 스크린샷
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">2. 사진 스튜디오 웹사이트 (외주)</h3>
            <div className="space-y-2 text-sm text-slate-300 flex-grow">
              <p><span className="font-semibold text-white">Stack:</span> React, AWS S3/CloudFront</p>
              <p><span className="font-semibold text-white">Challenge:</span> 비전공자 클라이언트와의 커뮤니케이션 및 유지보수 용이성 확보</p>
              <p><span className="font-semibold text-white">Outcome:</span> 실제 상용 서비스 런칭 및 운영</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
