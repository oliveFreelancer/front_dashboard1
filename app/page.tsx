"use client";
/* 대시보드 프론트엔드 퍼블리싱 구축 프리랜서 Olive*/
// https://blog.naver.com/webdesign_yumeekime
import React, { useState } from "react";
// import Image from "next/image";
//components
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Dropdown } from "primereact/dropdown";
import { Tree } from "primereact/tree";
import StockChartSimple from "@/app/components/chart/StockChartSimple";

export default function Home() {
  //패널
  const [isFirstPanelOpen, setIsFirstPanelOpen] = useState(true);
  const [isSecondPanelOpen, setIsSecondPanelOpen] = useState(true);

  //패널 토글 버튼
  const toggleFirstPanelOpen = () => {
    setIsFirstPanelOpen(!isFirstPanelOpen);
  };
  const toggleSecondPanelOpen = () => {
    setIsSecondPanelOpen(!isSecondPanelOpen);
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "최다 거래", code: "NY" },
    { name: "마케팅 회전율", code: "RM" },
    { name: "급등 거래", code: "LDN" },
    { name: "급락 거래", code: "IST" },
    { name: "최신 현황", code: "PRS" },
  ];

  const treeData = [
    {
      key: "0",
      label: "Root",
      children: [
        {
          key: "0-0",
          label: "Documents",
          children: [
            { key: "0-0-0", label: "Resume.docx" },
            { key: "0-0-1", label: "CoverLetter.docx" },
          ],
        },
        {
          key: "0-1",
          label: "Pictures",
          children: [
            { key: "0-1-0", label: "Vacation.jpg" },
            { key: "0-1-1", label: "Family.jpg" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="main relative h-full">
      {/* 패널 */}
      <div
        className={`absolute top-[70px] left-[22px] flex items-center w-[500px] z-50 transition-transform ${
          isFirstPanelOpen ? "translate-x-0" : "-translate-x-[490px]"
        }`}
      >
        <div className="neumorphism-1 p-4 w-full flex-1 flex flex-col gap-3 text-teal-950 rounded-lg border border-teal-400">
          <div className="flex items-center gap-3">
            <Avatar
              icon="pi pi-user"
              style={{ backgroundColor: "#091a14", color: "#ffffff" }}
              shape="circle"
            />
            <p className="font-bold text-lg">주요 중개 현황 실시간</p>
            <span className="ml-auto text-sm">
              Averate Rate Year 132,000 &#8361;
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="py-3 font-bold">
              다양한 데이터를 실시간으로 스트리밍
            </p>
            <div className="flex gap-3">
              <div className="neumorphism-2 flex-1 p-4 rounded-lg">
                <div className="flex w-full items-center justify-between">
                  <p>정산 예정 데이터</p>
                  <i className="pi pi-check" style={{ color: "gray" }}></i>
                </div>
                <div className="flex w-full items-center justify-between">
                  <strong>0.39%</strong>
                  <strong>0.022 p%</strong>
                </div>
              </div>
              <div className=" neumorphism-2 flex-1 p-4 rounded-lg">
                <div className="flex w-full items-center justify-between">
                  <p>이벤트 등급</p>
                  <i className="pi pi-check" style={{ color: "gray" }}></i>
                </div>
                <div className="flex w-full items-center justify-between">
                  <strong>0.39%</strong>
                  <strong>0.022 p%</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="py-3 font-bold">
              협업 및 진행 상황을 관리하는 대시보드
            </p>
            <div className="flex items-center justify-between">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="옵션"
                className="w-1/3"
              />
              <span className="text-sm font-bold text-gray-600">
                실시간 데이터
              </span>
            </div>
            <ProgressBar
              mode="indeterminate"
              style={{ height: "3px" }}
            ></ProgressBar>
            <span>Data for the last 7 Days (단위 : 일자)</span>
          </div>
          <div>
            <Button
              label="확인하기"
              className="py-3 w-full bg-emerald-900 rounded-full border border-teal-700 text-white"
            />
          </div>
        </div>
        <button
          className="flex flex-col justify-center items-center w-[32px] py-2  transition-transform -translate-x-[0]"
          onClick={toggleFirstPanelOpen}
        >
          <i className="pi pi-sort-up-fill rotate-90 text-white"></i>
        </button>
      </div>
      {/* 패널 */}
      <div
        className={`absolute top-[500px] left-[22px] flex items-center w-[500px] z-50 transition-transform ${
          isSecondPanelOpen ? "translate-x-0" : "-translate-x-[490px]"
        }`}
      >
        <div className="neumorphism-1 p-4 w-full flex-1 flex flex-col gap-3 text-teal-950 rounded-lg border border-teal-400">
          <div className="flex items-center gap-2">
            <Avatar
              icon="pi pi-user"
              style={{ backgroundColor: "#091a14", color: "#ffffff" }}
              shape="circle"
            />
            <p className="font-bold text-lg">고객 분포 및 분석</p>
            <span className="ml-auto text-sm">
              Averate Rate Year 550 &#8361;
            </span>
          </div>
          <div className="max-h-[200px] overflow-y-auto">
            <Tree
              value={treeData}
              className="w-full md:w-30rem"
              pt={{ root: { style: { padding: "0" } } }}
            />
          </div>
        </div>
        <button
          className="flex flex-col justify-center items-center w-[32px] py-2  transition-transform -translate-x-[0]"
          onClick={toggleSecondPanelOpen}
        >
          <i className="pi pi-sort-up-fill rotate-90 text-white"></i>
        </button>
      </div>

      {/* 가운데 */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: "100%", height: "100%" }}
      >
        <StockChartSimple />
      </div>
    </div>
  );
}
