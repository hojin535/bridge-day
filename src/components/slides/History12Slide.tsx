"use client";

import Slide from "../Slide";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "../ui/Carousel";

export default function History12Slide() {
  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-[85%]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">History: 1~2학년</h2>
            <p className="text-3xl md:text-5xl text-slate-300 italic">기초를 다지고, 프론트엔드 개발의 흥미를 찾다</p>
          </motion.div>

          <div className="hidden md:block" />

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-10"
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-4">1학년: 탐색</h3>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-lg">
                <li>전공 기초 확립: Java, Python, HTML/CSS, JS, IoT 기초</li>
                <li>진로 탐색: 다양한 기술 접목 및 적성 분야 발굴</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-panel p-10"
            >
              <h3 className="text-3xl font-bold text-purple-400 mb-4">2학년: 도전</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-2xl mb-1">Together 팀 프로젝트</h4>
                <p className="text-lg text-slate-400">봉사활동 모집 플랫폼 / FE 웹 개발</p>
                <p className="text-lg mt-2">Insight: <span className="text-white font-bold">'일단 시작하는 실행력'</span>의 중요성</p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-2xl mb-1">IoT수업 팀 프로젝트</h4>
                <p className="text-lg text-slate-400">스마트 창문 / FE 웹, 센서 로직 개발</p>
              </div>

              <div>
                 <h4 className="font-semibold text-2xl mb-1">🏆 캡스톤 디자인 팀 프로젝트 금상 (가보자)</h4>
                 <p className="text-lg text-slate-400">통합 버스 정보 제공 앱</p>
              </div>
            </motion.div>
          </div>

        <div className="space-y-4 h-full">
            {/* Image Placeholders */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-full py-6 px-2 bg-slate-800 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-slate-500 overflow-hidden"
            >
              <Carousel 
                slides={[
                  // Slide 0: IoT Project (Placeholder)
                  <div key="iot" className="flex flex-col items-center justify-center h-full w-full p-4">
                    <span className="font-semibold block text-lg text-white">IoT 수업 프로젝트(스마트 창문)</span>
                    <div className="flex gap-4 w-full justify-center items-center">
                        <div className="relative w-[400px] h-[400px]">
                            <Image src="/assets/IoT/IoT.jpg" alt="IoT Project" className="object-contain rounded-lg" fill />
                        </div>
                        <div className="relative w-[400px] h-[400px]">
                            <Image src="/assets/IoT/up.jpg" alt="IoT Project2" className="object-contain rounded-lg rotate-90" fill />
                        </div>
                    </div>
                  </div>,
                  <div key="iot" className="flex flex-col items-center justify-center h-full w-full p-4">
                    <span className="font-semibold block text-lg text-white">IoT 수업 프로젝트(스마트 창문)</span>
                        <div className="relative w-[700px] h-[500px]">
                            <Image src="/assets/IoT/코드화면.png" alt="IoT Project" className="object-contain rounded-lg" fill />
          
                    </div>
                  </div>,
                  <div key="iot" className="flex flex-col items-center justify-center h-full w-full p-4">
                    <span className="font-semibold block text-lg text-white">IoT 수업 프로젝트(스마트 창문)</span>

                  <div className="w-full flex justify-center mb-2">
                        <iframe 
                            width="750"
                            height="400"
                            src="https://github.com/user-attachments/assets/9f0be10f-5396-457a-8a5c-ddc098e021f8" 
                            className="rounded-lg border-0"
                            allow="autoplay"
                        />
                    </div>
                  </div>,
                  // <div key="gaboja">
                  //  <div className="flex justify-center items-center h-[250px]"> <span className="font-semibold text-lg text-white mb-4">가보자 프로젝트</span></div>

                  // <div className="flex flex-col items-center justify-center h-full w-full p-4">

                  //   <div className="flex justify-center items-center h-[250px]">
                  //     <div className="relative w-[250px] h-[450px]">
                  //       <Image src="/assets/gaboja/검색화면.jpg" alt="Together" fill className="object-contain" />
                  //     </div>
                  //     <div className="relative w-[250px] h-[450px]">
                  //       <Image src="/assets/gaboja/경로사진.jpg" alt="Together" fill className="object-contain" />
                  //     </div>
                  //     <div className="relative w-[250px] h-[450px]">
                  //       <Image src="/assets/gaboja/버스노선.jpg" alt="Together" fill className="object-contain" />
                  //     </div>
                  //   </div>
                  // </div>
                  //   </div>
                ]} 
                className="h-full" 
              />
            </motion.div>

        </div>
      </div>
    </Slide>
  );
}
