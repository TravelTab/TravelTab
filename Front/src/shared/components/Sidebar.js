import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ width = 50, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    alert(xPosition);
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
    alert(xPosition);
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);

    if (isOpen && (!sideArea || !sideChildren)) {
      await setX(width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}%`,
          height: "100%",
          transform: `translatex(${-xPosition}%)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? <span>X</span> : <span>=</span>}
        </button>
        <div className={styles.content}>
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
