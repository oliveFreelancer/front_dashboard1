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
  //현황정보 패널
  const [isSituationPanelOpen, setIsSituationPanelOpen] = useState(false);
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  //장비연결상태 패널
  const [isEquipmentPanelOpen, setIsEquipmentPanelOpen] = useState(false);
  //QUIK MENU 패널
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  //관리 패널
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  //발생 현황 패널
  const [isOccurrenceOpen, setIsOccurrenceOpen] = useState(false);
  //Selected location name 패널
  const [isSelectedLocationOpen, setIsSelectedLocationOpen] = useState(false);

  //현황정보 패널 토글 버튼
  const toggleSituationPanel = () => {
    setIsSituationPanelOpen(!isSituationPanelOpen);
  };

  //장비연결상태 패널토글 버튼
  const toggleEquipmentPanel = () => {
    setIsEquipmentPanelOpen(!isEquipmentPanelOpen);
  };

  //QUIK MENU 패널토글 버튼
  const toggleQuickMenuPanel = () => {
    setIsQuickMenuOpen(!isQuickMenuOpen);
  };

  //관리 패널토글 버튼
  const toggleManagementPanel = () => {
    setIsManagementOpen(!isManagementOpen);
  };

  //발생 현황 패널토글 버튼
  const toggleOccurrencePanel = () => {
    setIsOccurrenceOpen(!isOccurrenceOpen);
  };

  //Selected location name
  const toggleSelectedLocationPanel = () => {
    setIsSelectedLocationOpen(!isSelectedLocationOpen);
  };

  const dropDown1 = [{ name: "전체" }, { name: "옵션1" }];
  const tablesample = [
    {
      id: 1,
      date: "2024.01.02 13:54:24",
      type: "진동 (2)",
      level: "단계",
      location: "F-11",
      manage: "미대응",
    },
    {
      id: 2,
      date: "2024.01.02 13:54:24",
      type: "진동 (2)",
      level: "단계",
      location: "F-11",
      manage: "알림종료",
    },
    {
      id: 3,
      date: "2024.01.02 13:54:24",
      type: "진동 (2)",
      level: "단계",
      location: "F-11",
      manage: "알림종료",
    },
    {
      id: 4,
      date: "2024.01.02 13:54:24",
      type: "진동 (2)",
      level: "단계",
      location: "F-11",
      manage: "알림종료",
    },
    {
      id: 5,
      date: "2024.01.02 13:54:24",
      type: "진동 (2)",
      level: "단계",
      location: "F-11",
      manage: "알림종료",
    },
  ];

  return (
    <div className="main relative h-full">
      {/* 퀵 메뉴 */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-b from-blue-500 to-blue-800 transition-transform rounded-t-lg ${
            isQuickMenuOpen ? "translate-y-0" : "-translate-y-[-62px]"
          }`}
          onClick={toggleQuickMenuPanel}
        >
          <i className="pi pi-sort-up-fill"></i>
        </button>
        <div
          className={`quick-toggle-panel flex-1 text-white transition-transform ${
            isQuickMenuOpen ? "translate-y-0" : "-translate-y-[-112px]"
          }`}
        >
          <div className="flex items-center gap-4">
            <h2 className="flex gap-2 text-lg font-bold max-medium:text-sm">
              QUICK MENU
            </h2>
            <div className="flex items-center gap-2">
              <Button className="size-8 p-0 bg-gradient-to-b from-sub-900 via-sub-400 to-sub-400 rounded-lg">
                <Image
                  src="/assets/images/ic_small_home.svg"
                  alt="홈버튼"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-main-800 rounded-lg">
                <Image
                  src="/assets/images/ic_small_weather.svg"
                  alt="날씨"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-gradient-to-b from-sub-900 via-sub-400 to-sub-400 rounded-lg">
                <Image
                  src="/assets/images/ic_small_menu.svg"
                  alt="메뉴"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-main-800 rounded-lg">
                <Image
                  src="/assets/images/ic_small_marker.svg"
                  alt="메뉴"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-gradient-to-b from-sub-900 via-sub-400 to-sub-400 rounded-lg">
                <Image
                  src="/assets/images/ic_small_statics.svg"
                  alt="통계"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-gradient-to-b from-sub-900 via-sub-400 to-sub-400 rounded-lg">
                <Image
                  src="/assets/images/ic_small_monitoring.svg"
                  alt="모니터링"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
              <Button className="size-8 p-0 bg-gradient-to-b from-sub-900 via-sub-400 to-sub-400 rounded-lg">
                <Image
                  src="/assets/images/ic_small_security_camera.svg"
                  alt="보안카메라"
                  width={16}
                  height={16}
                  className="mx-auto"
                  priority
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 현황정보 */}
      <div className="absolute top-4 left-[22px] flex items-center w-[432px] z-50">
        <div
          className={`main-toggle-panel w-full flex-1 text-white transition-transform ${
            isSituationPanelOpen ? "translate-x-0" : "-translate-x-[432px]"
          }`}
        >
          <button className="inline-block absolute right-2 top-2">
            <Image
              src="/assets/images/ic_expand_btn.svg"
              alt="화면 확장"
              width={18}
              height={18}
              priority
            />
          </button>
          <h2 className="flex gap-2 text-lg font-bold">
            <Image
              src="/assets/images/ic_main_home.svg"
              alt="홈"
              width={24}
              height={24}
              priority
            />
            현황정보
          </h2>
          <div className="flex items-center gap-2">
            <Dropdown
              // value={selectedCity}
              // onChange={(e) => setSelectedCity(e.value)}
              options={dropDown1}
              optionLabel="name"
              placeholder="전체"
              className="w-1/3 h-[40px]"
            />
            <div className="flex-1 flex justify-between h-[40px] overflow-hidden bg-main-100 rounded-md overflow-hidden">
              <InputText
                placeholder="검색어 입력"
                className="p-2 w-full h-[40px] bg-main-100"
              />
              <Button icon="pi pi-search" className="bg-sub-700 rounded-none" />
            </div>
          </div>
          <div className="main-toggle-content">
            <div className="py-1 flex flex-col gap-1">
              <Accordion activeIndex={0}>
                <AccordionTab header="서울특별시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="종로구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={1}>
                <AccordionTab header="부산광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="중구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                    <Button
                      label="서구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                    <Button
                      label="동구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                    <Button
                      label="영도구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                    <Button
                      label="부산진구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={2}>
                <AccordionTab header="대구광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="남구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={3}>
                <AccordionTab header="인천광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="남구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={4}>
                <AccordionTab header="광주광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="남구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={5}>
                <AccordionTab header="대전광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="남구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
              <Accordion activeIndex={6}>
                <AccordionTab header="울산광역시" className="text-sm">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      label="남구"
                      size="small"
                      className="bg-main-100 rounded-full text-sm"
                    />
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
          <h2 className="text-lg font-bold">요양원</h2>
          <div className="main-toggle-content p-1 bg-main-800/40 border border-zinc-700">
            <Tree
              value={nodes}
              selectionMode="single"
              // selectionKeys={selectedKey}
              // onSelectionChange={(e) => setSelectedKey(e.value)}
              className="w-full"
            />
          </div>
        </div>
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-r from-blue-500 to-blue-800 transition-transform rounded-r-lg ${
            isSituationPanelOpen ? "translate-x-0" : "-translate-x-[425px]"
          }`}
          onClick={toggleSituationPanel}
        >
          <i className="pi pi-sort-up-fill rotate-90"></i>
        </button>
      </div>

      {/* 장비 연결 상태 */}
      <div className="absolute left-[22px] bottom-4 flex items-center w-[432px] z-50">
        <div
          className={`main-toggle-panel flex-1 text-white transition-transform ${
            isEquipmentPanelOpen ? "translate-x-0" : "-translate-x-[432px]"
          }`}
        >
          <button className="inline-block absolute right-2 top-2">
            <Image
              src="/assets/images/ic_expand_btn.svg"
              alt="화면 확장"
              width={18}
              height={18}
              priority
            />
          </button>
          <h2 className="flex gap-2 text-lg font-bold">
            <Image
              src="/assets/images/ic_main_menu.svg"
              alt="메뉴 아이콘"
              width={24}
              height={24}
              priority
            />
            장비 연결 상태
          </h2>
          <div className="main-toggle-content">
            <div className="flex justify-between items-center gap-4">
              <div className="size-24">
                <Image
                  src="/assets/images/ic_pie_img.svg"
                  alt="파이그래프 이미지"
                  width={100}
                  height={100}
                  layout="responsive"
                  priority
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="basis-24 text-green-500">
                    <i className="pi pi-circle-fill"></i> 정상
                  </p>
                  <p>
                    <strong>985</strong>대
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="basis-24 text-rose-600">
                    <i className="pi pi-circle-fill"></i> 비정상
                  </p>
                  <p>
                    <strong>50</strong>대
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">디바이스 현황</h2>
              <div className="py-2">
                <ul className="flex gap-3 overflow-x-scroll">
                  <li>
                    <div className="flex flex-col justify-center items-center size-20 rounded-xl border border-sub-700">
                      <Image
                        src="/assets/images/ic_camera_equipment.svg"
                        alt="카메라"
                        width={32}
                        height={32}
                        priority
                      />
                      <div className="text-sub-700 text-xs text-align">
                        <strong className="text-lg font-bold ">166</strong>대
                      </div>
                    </div>
                    <div className="text-sub-700 text-center font-bold max-medium:text-xs">
                      카메라
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center size-20 rounded-xl border border-sub-700">
                      <Image
                        src="/assets/images/ic_bell_equipment.svg"
                        alt="비상벨"
                        width={32}
                        height={32}
                        priority
                      />
                      <div className="text-sub-700 text-xs text-align">
                        <strong className="text-lg font-bold">166</strong>대
                      </div>
                    </div>
                    <div className="text-sub-700 text-center font-bold max-medium:text-xs">
                      비상벨
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center size-20 rounded-xl border border-sub-700">
                      <Image
                        src="/assets/images/ic_fire_equipment.svg"
                        alt="소방장비"
                        width={32}
                        height={32}
                        priority
                      />
                      <div className="text-sub-700 text-xs text-align">
                        <strong className="text-lg font-bold">166</strong>대
                      </div>
                    </div>
                    <div className="text-sub-700 text-center font-bold max-medium:text-xs">
                      소방장비
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center size-20 rounded-xl border border-sub-700">
                      <Image
                        src="/assets/images/ic_generator_equipment.svg"
                        alt="나무 이미지"
                        width={32}
                        height={32}
                        priority
                      />
                      <div className="text-sub-700 text-xs text-align">
                        <strong className="text-lg font-bold">166</strong>대
                      </div>
                    </div>
                    <div className="text-sub-700 text-center font-bold max-medium:text-xs">
                      발전기
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col justify-center items-center size-20 rounded-xl border border-sub-700">
                      <Image
                        src="/assets/images/ic_camera_equipment.svg"
                        alt="나무 이미지"
                        width={32}
                        height={32}
                        priority
                      />
                      <div className="text-sub-700 text-xs text-align">
                        <strong className="text-lg font-bold">166</strong>대
                      </div>
                    </div>
                    <div className="text-sub-700 text-center font-bold max-medium:text-xs">
                      발전기
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-r from-blue-500 to-blue-800 transition-transform rounded-r-lg ${
            isEquipmentPanelOpen ? "translate-x-0" : "-translate-x-[425px]"
          }`}
          onClick={toggleEquipmentPanel}
        >
          <i className="pi pi-sort-up-fill rotate-90"></i>
        </button>
      </div>

      {/* 관리 시설 수, 관리 고객수 */}
      <div className="absolute top-4 right-[22px] flex items-center w-[432px] z-50">
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-r from-blue-500 to-blue-800 transition-transform rounded-l-lg ${
            isManagementOpen ? "translate-x-0" : "-translate-x-[-425px]"
          }`}
          onClick={toggleManagementPanel}
        >
          <i className="pi pi-sort-up-fill rotate-90"></i>
        </button>
        <div
          className={`main-toggle-panel flex-1 text-white transition-transform ${
            isManagementOpen ? "translate-x-0" : "-translate-x-[-432px]"
          }`}
        >
          <div className="main-toggle-content">
            <div className="flex justify-between items-center">
              <Image
                src="/assets/images/ic_main_statistics.svg"
                alt="통계아이콘"
                width={24}
                height={24}
                priority
              />
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/ic_building.svg"
                    alt="빌딩아이콘"
                    width={32}
                    height={32}
                    priority
                  />
                  <div className="flex flex-col text-cyan-400">
                    <span className="text-sm font-bold">관리 시설 수</span>
                    <span className="text-xs">
                      <strong className="text-lg">25,202,300</strong>명
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/ic_customers.svg"
                    alt="빌딩아이콘"
                    width={32}
                    height={32}
                    priority
                  />
                  <div className="flex flex-col text-cyan-400">
                    <span className="text-sm font-bold">관리 고객 수</span>
                    <span className="text-xs">
                      <strong className="text-lg">25,202,300</strong>명
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 발생 현황 */}
      <div className="absolute top-32 right-[22px] flex items-center w-[432px] z-50">
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-r from-blue-500 to-blue-800 transition-transform rounded-l-lg ${
            isOccurrenceOpen ? "translate-x-0" : "-translate-x-[-425px]"
          }`}
          onClick={toggleOccurrencePanel}
        >
          <i className="pi pi-sort-up-fill rotate-90"></i>
        </button>
        <div
          className={`main-toggle-panel flex-1 text-white transition-transform ${
            isOccurrenceOpen ? "translate-x-0" : "-translate-x-[-432px]"
          }`}
        >
          <button className="inline-block absolute right-2 top-2">
            <Image
              src="/assets/images/ic_expand_btn.svg"
              alt="화면 확장"
              width={18}
              height={18}
              priority
            />
          </button>
          <h2 className="flex gap-2 text-lg font-bold">
            <Image
              src="/assets/images/ic_main_home.svg"
              alt="홈"
              width={24}
              height={24}
              priority
            />
            발생 현황
          </h2>
          <div className="main-toggle-content">
            <div className="w-full">
              <DataTable
                value={tablesample}
                scrollable
                style={{ width: "100%" }} // minWidth로 테이블의 최소 너비를 설정하여 가로 스크롤이 활성화됨
                className="w-full"
                rowClassName={(data) =>
                  data.manage === "미대응" ? "row-red-background" : ""
                }
              >
                <Column
                  field="date"
                  header="발생일시"
                  className="text-xs"
                  style={{ width: "20%" }}
                ></Column>
                <Column
                  field="type"
                  header="상황유형"
                  className="text-xs"
                  style={{ width: "20%" }}
                ></Column>
                <Column
                  field="level"
                  header="단계"
                  className="text-xs"
                  style={{ width: "20%" }}
                ></Column>
                <Column
                  field="location"
                  header="위치"
                  className="text-xs"
                  style={{ width: "20%" }}
                ></Column>
                <Column
                  field="manage"
                  header="대응상태"
                  className="text-xs"
                  style={{ width: "20%" }}
                ></Column>
              </DataTable>
            </div>
          </div>
          <h2 className="text-lg font-bold">일간 경보 발생 현황</h2>
          <div className="flex gap-2">
            <div className="py-1 flex-1 flex flex-col justify-center items-center border-2 border-indigo-500 bg-gradient-to-r from-indigo-950/50 to-indigo-950/10 rounded-xl">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/images/forbidden.svg"
                  alt="출입통제아이콘"
                  width={16}
                  height={16}
                  priority
                />
                <strong>43</strong>
              </div>
              <div className="text-indigo-500 font-bold">출입통제</div>
            </div>
            <div className="py-1 flex-1 flex flex-col justify-center items-center border-2 border-rose-600 bg-gradient-to-r from-rose-950/50 to-rose-950/10 rounded-xl">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/images/fire.svg"
                  alt="출입통제아이콘"
                  width={16}
                  height={16}
                  priority
                />
                <strong>20</strong>
              </div>
              <div className="text-rose-600 font-bold">화제</div>
            </div>
            <div className="py-1 flex-1 flex flex-col justify-center items-center border-2 border-green-500 bg-gradient-to-r from-green-950/50 to-green-950/10 rounded-xl">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/assets/images/emergency.svg"
                  alt="출입통제아이콘"
                  width={16}
                  height={16}
                  priority
                />
                <strong>52</strong>
              </div>
              <div className="text-green-500 font-bold">비상벨</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected location name */}
      <div className="absolute bottom-4 right-[22px] flex items-center w-[432px] z-50">
        <button
          className={`flex flex-col justify-center items-center w-[32px] y-[32px] bg-gradient-to-r from-blue-500 to-blue-800 transition-transform rounded-l-lg ${
            isSelectedLocationOpen ? "translate-x-0" : "-translate-x-[-425px]"
          }`}
          onClick={toggleSelectedLocationPanel}
        >
          <i className="pi pi-sort-up-fill rotate-90"></i>
        </button>
        <div
          className={`main-toggle-panel flex-1 text-white transition-transform ${
            isSelectedLocationOpen ? "translate-x-0" : "-translate-x-[-432px]"
          }`}
        >
          <button className="inline-block absolute right-2 top-2">
            <Image
              src="/assets/images/ic_expand_btn.svg"
              alt="화면 확장"
              width={18}
              height={18}
              priority
            />
          </button>
          <h2 className="flex gap-2 text-lg font-bold">
            <Image
              src="/assets/images/ic_main_home.svg"
              alt="홈"
              width={24}
              height={24}
              priority
            />
            Selected location name
          </h2>
          <div className="main-toggle-content">
            <div className="grid grid-cols-2 gap-2 max-medium:grid-cols-4">
              <p>
                <Image
                  src="/assets/images/fg1.jpg"
                  alt="장소1"
                  width={188}
                  height={82}
                  layout="respoonsive"
                  priority
                  className="object-fit w-full h-full"
                />
              </p>
              <p>
                <Image
                  src="/assets/images/fg2.jpg"
                  alt="장소2"
                  width={188}
                  height={82}
                  layout="respoonsive"
                  priority
                  className="object-fit w-full h-full"
                />
              </p>
              <p>
                <Image
                  src="/assets/images/fg3.jpg"
                  alt="장소3"
                  width={188}
                  height={82}
                  layout="respoonsive"
                  priority
                  className="object-fit w-full h-full"
                />
              </p>
              <p>
                <Image
                  src="/assets/images/fg4.jpg"
                  alt="장소4"
                  width={188}
                  height={82}
                  layout="respoonsive"
                  priority
                  className="object-fit w-full h-full"
                />
              </p>
            </div>
            <h2 className="text-lg font-bold">산소감지기</h2>
            <div className="px-4 flex justify-between items-center gap-3">
              <div>
                <Image
                  src="/assets/images/sampleimg1.svg"
                  alt="장소4"
                  width={188}
                  height={82}
                  priority
                />
              </div>
              <div className="px-3 py-1 flex justify-center items-center gap-3 bg-zinc-700 rounded-md">
                <span>02</span>
                <i className="w-px h-3 bg-white"></i>
                <strong className="text-lg text-yellow-400 font-bold">
                  0%
                </strong>
              </div>
            </div>
          </div>
        </div>
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
