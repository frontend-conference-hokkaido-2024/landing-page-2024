import EventSummary from "@/components/EventSummary";
import AccessInfo from "@/components/AccessInfo";
import Footer from "@/components/Footer";
import EventOverView from "@/components/EventOverView";
import LinkMenu from "@/components/LinkMenu";
import SpMenu from "@/components/SpMenu";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 hidden md:block md:w-[calc((100%_-_360px)/4*3)] lg:w-[calc((100%_-_360px)/2)] h-dvh bg-fuchsia-700">
        {/* 左側エリア */}
        <LinkMenu />
      </div>
      <main className="w-full max-w-[500px] md:w-[360px] h-dvh mx-auto md:ml-[calc((100%_-_360px)/4*3)] lg:ml-auto place-items-center">
        {/* ここにSP用のタグとかを書いていく */}
        <EventSummary />
        <SpMenu menu={<LinkMenu />}/>
        <SpMenu menu={<LinkMenu />} />
        <EventOverView />
        <AccessInfo />
        <Footer />
      </main>
      <div className="fixed top-0 right-0 hidden md:block md:w-[calc((100%_-_360px)/4*1)] lg:w-[calc((100%_-_360px)/2)] h-dvh bg-fuchsia-700"></div>
    </>
  );
}
