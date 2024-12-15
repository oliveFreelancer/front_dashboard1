/* 대시보드 프론트엔드 퍼블리싱 구축 프리랜서 Olive*/
// https://blog.naver.com/webdesign_yumeekime
import React from "react";
import Image from "next/image";
//components
import { Menubar } from "primereact/menubar";

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
        },
      ],
    },
  ];

  const start = (
    <Image
      src="/assets/images/ds.png" // 이미지 파일 경로
      alt="로고" // 이미지 설명
      width={46} // 이미지 너비 (픽셀 단위)
      height={18} // 이미지 높이 (픽셀 단위)
      layout="responsive"
    />
  );
  const end = <div className="flex align-items-center gap-2">ddd</div>;

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
          },
        },
      }}
    />
  );
};

export default Header;
