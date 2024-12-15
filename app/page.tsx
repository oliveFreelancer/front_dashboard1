"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
//components
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Dropdown } from "primereact/dropdown";
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
  return (
    <div className="main relative h-full">
      {/* 패널 */}
      <div
        className={`absolute top-4 left-[22px] flex items-center w-[500px] z-50 transition-transform ${
          isFirstPanelOpen ? "translate-x-0" : "-translate-x-[490px]"
        }`}
      >
        <div className="p-4 w-full flex-1 flex flex-col gap-2 text-white bg-emerald-950">
          <div className="flex items-center gap-2">
            <Avatar
              icon="pi pi-user"
              className="mr-2"
              size="large"
              style={{ backgroundColor: "#091a14", color: "#ffffff" }}
              shape="circle"
            />
            <p>주요 중개 현황 실시간</p>
          </div>
          <div>
            <p>알림</p>
            <div className="flex gap-2">
              <div className="flex-1 p-4 border border-teal-700">
                <div className="flex w-full items-center justify-between">
                  <p>title</p>
                  <i className="pi pi-check" style={{ color: "slateblue" }}></i>
                </div>
                <div className="flex w-full items-center justify-between">
                  <strong>0.39%</strong>
                  <strong>0.022 p%</strong>
                </div>
              </div>
              <div className="flex-1 p-4 border border-teal-700">
                <div className="flex w-full items-center justify-between">
                  <p>title</p>
                  <i className="pi pi-check" style={{ color: "slateblue" }}></i>
                </div>
                <div className="flex w-full items-center justify-between">
                  <strong>0.39%</strong>
                  <strong>0.022 p%</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="옵션"
                className="w-1/3"
              />
              <span>실시간 데이터</span>
            </div>
            <ProgressBar
              mode="indeterminate"
              style={{ height: "3px" }}
            ></ProgressBar>
            <span>실시간 데이터 : 13:50:54</span>
          </div>
          <div>
            <Button
              label="Submit"
              icon="pi pi-check"
              className="p-2 w-full bg-emerald-900 rounded-full border border-teal-700"
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
        className={`absolute top-96 left-[22px] flex items-center w-[500px] z-50 transition-transform ${
          isSecondPanelOpen ? "translate-x-0" : "-translate-x-[490px]"
        }`}
      >
        <div className={`p-4 w-full flex-1 text-white bg-emerald-950 `}>
          <div className="flex items-center gap-2">
            <Avatar
              icon="pi pi-user"
              className="mr-2"
              size="large"
              style={{ backgroundColor: "#091a14", color: "#ffffff" }}
              shape="circle"
            />
            <p>워크2</p>
          </div>
        </div>
        <button
          className="flex flex-col justify-center items-center w-[32px] py-2  transition-transform -translate-x-[0]"
          onClick={toggleSecondPanelOpen}
        >
          <i className="pi pi-sort-up-fill rotate-90 text-white"></i>
        </button>
      </div>

      {/* 가운데 지도 */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: "100%", height: "100%" }}
      >
        <StockChartSimple />
      </div>
    </div>
  );
}
