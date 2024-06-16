import LogoTextWhite from "./images/logoTextWhite";
import MenuList from "./menu/MenuList";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full bg-slate-900 pb-6 pt-12 px-7">
      <LogoTextWhite className="mb-12"/>
      <MenuList color="white" className="mb-4" />
      <p className="text-sm text-white text-center">
        ©2024 フロントエンドカンファレンス
        <br />
        北海道実行委員会
      </p>
    </footer>
  );
};

export default Footer;
