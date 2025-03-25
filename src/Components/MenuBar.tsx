import { useState } from "react";
import { MenuItem } from "./MenuItem";
import SunIcon from "../assets/sun.svg";
import InfoIcon from "../assets/info.svg";
import LogoIcon from "../assets/logo.svg";
import LetterIcon from "../assets/letter.svg";
import LeftArrow from "../assets/double_left.svg";
import SettingsIcon from "../assets/settings.svg";
import StoresIcon from "../assets/microsoft.svg";
import Shoping_cartIcon from "../assets/shoping_cart_full.svg";

export const MenuBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("project_management");

  return (
    <div className={`absolute flex flex-col ${isBarOpen ? "w-[320px]" : "w-[56px]"} h-[100vh] px-2 pt-2 bg-white shadow-md`}>
      <div className="h-[35px] mx-1 flex items-center justify-between">
        <div className="w-[24px] mr-2 cursor-pointer">
          <img src={LogoIcon} onClick={() => setIsBarOpen((prevState) => !prevState)} />
        </div>
        {isBarOpen ? (
          <div className="w-[24px] mr-2 cursor-pointer">
            <img
              src={isBarOpen ? LeftArrow : ""}
              onClick={() => setIsBarOpen(false)}
            />
          </div>
        ) : null}
      </div>
      <MenuItem
        icon={LetterIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "project_management1"}
        label="project_management"
        onClick={() => setActiveItem("project_management1")}
      />
      <MenuItem
        showLabel={isBarOpen}
        icon={Shoping_cartIcon}
        label="business_agenda"
        isActive={activeItem === "business_agenda"}
        onClick={() => setActiveItem("business_agenda")}
      />
      <MenuItem
        label="stores"
        icon={StoresIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "stores"}
        onClick={() => setActiveItem("stores")}
      />
      <MenuItem
        icon={LetterIcon}
        showLabel={isBarOpen}
        label="project_management"
        isActive={activeItem === "project_management2"}
        onClick={() => setActiveItem("project_management2")}
      />
      <MenuItem
        icon={InfoIcon}
        label="option"
        showLabel={isBarOpen}
        isActive={activeItem === "option1"}
        onClick={() => setActiveItem("option1")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option2"}
        onClick={() => setActiveItem("option2")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option3"}
        onClick={() => setActiveItem("option3")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option4"}
        onClick={() => setActiveItem("option4")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option5"}
        onClick={() => setActiveItem("option5")}
      />
      <span className="h-[35px] pl-1 text-sm flex items-center">
        {isBarOpen ? "internal_agenda" : ""}
      </span>
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option6"}
        onClick={() => setActiveItem("option6")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option7"}
        onClick={() => setActiveItem("option7")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option8"}
        onClick={() => setActiveItem("option8")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option9"}
        onClick={() => setActiveItem("option9")}
      />
      <MenuItem
        label="option"
        icon={SunIcon}
        showLabel={isBarOpen}
        isActive={activeItem === "option10"}
        onClick={() => setActiveItem("option10")}
      />
      <div className="mt-[auto]">
        <MenuItem
          label="settings"
          icon={SettingsIcon}
          showLabel={isBarOpen}
          isActive={activeItem === "setings"}
          onClick={() => setActiveItem("setings")}
        />
      </div>
    </div>
  )
};