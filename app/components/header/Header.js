/* 대시보드 프론트엔드 퍼블리싱 구축 프리랜서 Olive*/
// https://blog.naver.com/webdesign_yumeekime
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
//components
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Header = () => {
  const timeRef = useRef(null);
  const router = useRouter();
  useRouter;
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = new Intl.DateTimeFormat("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24시간 형식
      }).format(currentTime);

      if (timeRef.current) {
        timeRef.current.textContent = `현재 시각 : ${formattedTime}`;
      }
    };

    updateTime(); // 컴포넌트 마운트 시 최초 시간 설정
    const interval = setInterval(updateTime, 1000); // 1초마다 시간 갱신

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
  }, []);

  const items = [
    {
      label: "메인",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "관리자",
      icon: "pi pi-star",
      command: () => router.push("/admin"),
    },
    {
      label: "대시보드",
      icon: "pi pi-search",
      items: [
        {
          label: "매출 통계",
          icon: "pi pi-bolt",
          command: () => router.push("/dashboard"),
        },
      ],
    },
  ];

  const start = (
    <div className="flex items-end gap-1 mr-6">
      <Image
        src="/assets/images/logo.svg" // 이미지 파일 경로
        alt="로고" // 이미지 설명
        width={180} // 이미지 너비 (픽셀 단위)
        height={1} // 이미지 높이 (픽셀 단위)
      />
      <h1 className="font-bold text-sm">데이터 특화 대시보드</h1>
    </div>
  );
  const end = (
    <div className="flex items-center gap-6">
      <p ref={timeRef} className="text-xs">
        현재 시각 :
      </p>
      <p className="text-xs font-bold">관리자</p>
      <Button
        label="로그인"
        icon="pi pi-check"
        className="px-3 py-1 bg-emerald-900 rounded-full border border-teal-700 text-xs"
      />
    </div>
  );

  return (
    <Menubar
      model={items}
      start={start}
      end={end}
      className="z-9999"
      pt={{
        root: {
          style: {
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            borderRadius: "0",
            backgroundColor: "#041c19",
            color: "#fff",
          },
          className: "border-b border-teal-900",
        },
        icon: { style: { color: "#134e4a" } },
        label: { style: { color: "#fff" } },
      }}
    />
  );
};

export default Header;
