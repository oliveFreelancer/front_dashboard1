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

  const start = <img alt="logo" src="" height="40" className="mr-2"></img>;
  const end = (
    <div className="flex align-items-center gap-2">
      <Image
        src="/assets/images/ds.png" // 이미지 파일 경로
        alt="로고" // 이미지 설명
        width={500} // 이미지 너비 (픽셀 단위)
        height={1} // 이미지 높이 (픽셀 단위)
        layout="responsive"
      />
    </div>
  );

  return <Menubar model={items} start={start} end={end} />;
};

export default Header;
