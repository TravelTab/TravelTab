import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "./TermOfUse.module.css";

const TermOfUse = forwardRef((props, ref) => {
  // button 클릭 시 토글
  const toggleMenu = () => {
    alert(YPosition);
    if (YPosition > 0) {
      setY(0);
      setOpen(true);
    } else {
      setY(-height);
      setOpen(false);
    }
  };
  useImperativeHandle(ref, () => ({
    toggleMenu,
  }));

  const height = 350;
  const [isOpen, setOpen] = useState(false);
  const [YPosition, setY] = useState(-height);
  const side = useRef();
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);

    if (isOpen && (!sideArea || !sideChildren)) {
      await setY(height);
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
          height: `${height}px`,
          width: "100%",
          transform: `translatey(${-YPosition}%)`,
        }}
      >
        <div className={styles.content}>
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default TermOfUse;
