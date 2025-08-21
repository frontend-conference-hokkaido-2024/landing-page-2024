import Link from "next/link";
import CommonButton from "./elements/CommonButton";
import Title from "./elements/Title";
import CalendarClock from "./images/icon/CalendarClock";

export default function TimeTable() {
  return (
    <section id="streaming">
      <Title icon={<CalendarClock />}>タイムテーブル</Title>
      <CommonButton className="lg:w-3/4 mx-auto" asChild>
        <Link href="https://fortee.jp/frontend-conf-hokkaido-2025/timetable" target="_blank" rel="noopener noreferrer">
          タイムテーブルはこちら
        </Link>
      </CommonButton>
    </section>
  );
}
