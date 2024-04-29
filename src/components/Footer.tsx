import Link from "next/link";

import { Button } from "./ui/button";

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
        <Button asChild>
          <Link
            href="https://aback-jasmine-06b.notion.site/cf184497a6414a97aea49c1f1b2f5b5f"
            className="py-4"
          >
            プライバシーポリシー
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
