import Title from "./elements/Title";
import CalendarClock from "./images/icon/CalendarClock";

export default function TimeTable() {
  return (
    <section id="streaming">
      <Title icon={<CalendarClock />}>タイムテーブル</Title>
      <p className="text-2xl text-center">Coming soon...</p>
    </section>
  );
}
