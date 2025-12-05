"use client";

import React, { useState } from "react";
import Slide from "../Slide";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";
import Image from "next/image"
export default function History3Slide() {
  // AWS-ART: 0=그룹사진, 1=iframe
  const [awsArtImageIndex, setAwsArtImageIndex] = useState(0);
  // Capstone: 0=실물, 1=홈, 2=설정
  const [capstoneImageIndex, setCapstoneImageIndex] = useState(0);
  // ICGHIT: 0=논문, 1=단체사진
  const [icghitImageIndex, setIcghitImageIndex] = useState(0);

  return (
    <Slide>
      <div className="w-full max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 h-[85%] grid-rows-[150px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">History: 3학년</h2>
          <p className="text-2xl md:text-4xl text-slate-300 italic">경험 확장 - 해커톤, 동아리, 캡스톤</p>
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
                <span className="font-semibold block text-2xl mb-1">AWS-ART 해커톤(Javis)</span>
                <span className="text-lg text-slate-400">타 학교 교류 & 팀 프로젝트</span>
                <ul className="ml-6 text-lg text-slate-400 list-disc">
                  <li>자소서 아카이빙 및 AI 평가 프로젝트</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold block text-2xl mb-1 ">🥈 2024 캡스톤 디자인 은상 (NetCustomaster)</span>
                <span className="text-lg text-slate-400"> 공유기 설정 어려움 → 디스플레이 공유기</span>
                <ul className="ml-6 text-lg text-slate-400 list-disc">
                  <li>ICGHIT 국제 학술대회</li>
                </ul>
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
                     <h4 className="font-semibold text-[1.5rem] text-white">AWS-ART 해커톤</h4>
                    <span className="text-sm text-slate-400 text-[1.25rem] block">Javis</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 flex-1">
                    <div className="w-full flex justify-center relative">
                      {awsArtImageIndex === 0 ? (
                        <div 
                          className="relative w-[800px] h-[450px] bg-slate-800 rounded-lg cursor-pointer"
                          onClick={() => setAwsArtImageIndex(1)}
                        >
                          <Image src="/assets/ART-AWS/ART-AWS.jpeg" alt="그룹사진" fill className="object-contain rounded-lg" />
                        </div>
                      ) : (
                        <div 
                          className="cursor-pointer"
                          onClick={() => setAwsArtImageIndex(0)}
                        >
                          <iframe src="https://drive.google.com/file/d/1bxMbK92L7m2OuE3SEWryrmBa2RFgsTUo/preview" className="w-[800px] h-[450px] rounded-lg border-0"></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </div>,
                // Slide 1: Capstone Design
                <div key="capstone" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <h4 className="font-semibold text-[1.5rem] text-white">🥈 캡스톤 디자인 은상</h4>
                    <span className="text-sm text-slate-400 text-[1.25rem] block">NetCustomaster</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 flex-1">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setCapstoneImageIndex((prev) => (prev + 1) % 3)}
                    >
                      {capstoneImageIndex === 0 && (
                        <div className="relative w-[600px] h-[400px]">
                          <Image src="/assets/NetCustomaster/기기사진.jpeg" alt="기기사진" fill className="object-contain rounded-lg" />
                        </div>
                      )}
                      {capstoneImageIndex === 1 && (
                        <div className="relative w-[600px] h-[400px]">
                          <Image src="/assets/NetCustomaster/홈.png" alt="홈" fill className="object-contain rounded-lg" />
                        </div>
                      )}
                      {capstoneImageIndex === 2 && (
                        <div className="relative w-[600px] h-[400px]">
                          <Image src="/assets/NetCustomaster/설정.png" alt="설정" fill className="object-contain rounded-lg" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>,

                // Slide 2: ICGHIT
                <div key="icghit" className="flex flex-col h-full w-full p-4">
                  <div className="mb-4">
                    <h4 className="font-semibold text-white text-[1.5rem]">ICGHIT 학술대회</h4>
                    <span className="text-sm text-slate-400 block mb-2 text-[1.25rem]">ICGHIT 학술대회 논문 제출 및 발표</span>
                  </div>
                  <div className="flex items-center justify-center flex-1">
                    <div className="w-full flex justify-center relative">
                      {icghitImageIndex === 0 ? (
                        <div 
                          className="relative h-[500px] w-[400px] cursor-pointer"
                          onClick={() => setIcghitImageIndex(1)}
                        >
                          <Image 
                            src="/assets/NetCustomaster/논문.png" 
                            alt="논문" 
                            fill
                            className="object-contain rounded-lg bg-white"
                          />
                        </div>
                      ) : (
                        <div 
                          className="relative w-[700px] h-[500px] cursor-pointer"
                          onClick={() => setIcghitImageIndex(0)}
                        >
                          <Image 
                            src="/assets/NetCustomaster/단체사진.jpeg" 
                            alt="단체사진" 
                            width={700}
                            height={500}
                            className="object-contain rounded-lg"
                          />
                        </div>
                      )}
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
