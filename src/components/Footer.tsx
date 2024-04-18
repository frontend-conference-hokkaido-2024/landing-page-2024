import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 py-8">
      <div className="text-white text-center text-sm">
        <p className="py-4">フロントエンドカンファレンス北海道2024</p>
        <p className="py-4">
          @2024 フロントエンドカンファレンス
          <br />
          北海道実行委員会
        </p>
        <Link href="#" className="py-4 inline-block">
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
