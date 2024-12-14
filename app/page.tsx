"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

//components
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tree } from "primereact/tree";
import { TreeNode } from "primereact/treenode";

// import ViewerContainer from "@/components/viewer/ViewerContainer";

export default function Home() {
  //패널
  const [isFirstPanelOpen, setIsFirstPanelOpen] = useState(true);

  //현황정보 패널 토글 버튼
  const toggleFirstPanelOpen = () => {
    setIsFirstPanelOpen(!isFirstPanelOpen);
  };

  return (
    <div className="main relative h-full">
      <div
        className={`absolute top-4 left-[22px] flex items-center w-[500px] z-50 transition-transform ${
          isFirstPanelOpen ? "translate-x-0" : "-translate-x-[490px]"
        }`}
      >
        <div className={`p-4 w-full flex-1 text-white bg-emerald-950 `}>
          ddd
        </div>
        <button
          className="flex flex-col justify-center items-center w-[32px] py-2  transition-transform -translate-x-[0]"
          onClick={toggleFirstPanelOpen}
        >
          <i className="pi pi-sort-up-fill rotate-90 text-white"></i>
        </button>
      </div>

      {/* 가운데 지도 */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: "100%", height: "100%" }}
      >
        {/* <ViewerContainer /> */}
      </div>
    </div>
  );
}
