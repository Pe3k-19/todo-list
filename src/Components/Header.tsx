import UserIcon from "../assets/user.svg";
import AlarmIcon from "../assets/alarm.svg";
import MenuIcon from "../assets/squared_menu.svg";
import MessageIcon from "../assets/chat_bubble.svg";

export const Header = () => (
  <div className="absolute flex items-center justify-end w-[100vw] h-[50px] pr-2 bg-white shadow-md">
    <div className="mx-2 cursor-pointer">
      <img src={AlarmIcon} />
    </div>
    <div className="mx-2 cursor-pointer">
      <img src={MessageIcon} />
    </div>
    <div className="mx-2 cursor-pointer">
      <img src={MenuIcon} />
    </div>
    <div className="mx-2 cursor-pointer">
      <img src={UserIcon} />
    </div>
  </div>
);