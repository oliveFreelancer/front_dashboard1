/* 대시보드 프론트엔드 퍼블리싱 구축 프리랜서 Olive*/
// https://blog.naver.com/webdesign_yumeekime
import React from "react";
import Image from "next/image";
//components
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval을 클리어
  }, []);

  const formattedTime = new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 24시간 형식
  }).format(time);

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
    />
  );
  const end = (
    <div className="flex items-center gap-2">
      <p>현재 시각 : {formattedTime}</p>
      <p>관리자</p>
      <Button
        label="Submit"
        icon="pi pi-check"
        className="px-3 py-1 bg-emerald-900 rounded-full border border-teal-700"
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
        },
      }}
    />
  );
};

export default Header;
