import React, { useEffect, useState } from "react";
import "./mobilemenu.scss";
import Navigation from "../Navigation/Navigation";

const MobileMenu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalAnimate, setModalAnimate] = useState("");

  const openMobileMenu = () => {
    if (!openModal) {
      setOpenModal(true);
      setModalAnimate("animate__bounceInRight");
    } else if (openModal) {
      setModalAnimate("animate__backOutRight");

      setTimeout(() => {
        setOpenModal(!openModal);
        setModalAnimate("");
      }, 500);
    }
  };

  useEffect(() => {
    if (openModal) document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <>
      <div className="mobile-menu__btn" onClick={() => openMobileMenu()}></div>
      {openModal ? (
        <>
          <div className="mobile__bg "></div>
          <div
            className={`mobile-menu__wrapper animate__animated ${modalAnimate}`}
          >
            <Navigation />
          </div>
        </>
      ) : undefined}
    </>
  );
};

export default MobileMenu;
