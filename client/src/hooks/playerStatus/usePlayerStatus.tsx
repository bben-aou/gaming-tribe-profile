import InfoBox from "@/components/profile/playerStatus/InfoBox";

export default function usePlayerStatus() {
  const statsData = [
    { title: "Played Games", value: 153 },
    { title: "Total Hours", value: "12,032" },
    { title: "Most Played Game", value: "Call of Duty: MW" },
    { title: "Skill Title", value: "Legendary Warrior" },
    { title: "Achievements", value: 287 },
    { title: "Win Rate", value: "68%" },
    { title: "Matches Played", value: 2456 },

  ];
  const playerStatus = statsData.map((status) => (
    <InfoBox key={status.title} title={status.title} value={status.value} />
  ));

  return {playerStatus};
}
