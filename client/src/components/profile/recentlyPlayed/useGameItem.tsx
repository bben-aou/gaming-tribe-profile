import GameItem from "@components/profile/recentlyPlayed/GameItem";

export default function useGameItem() {
  const recentGames = [
    {
      id: 1,
      gameName: "Valorant",
      lastPlayed: "Today 11:40",
    },
    {
      id: 2,
      gameName: "Counter-Strike 2",
      lastPlayed: "Today 10:15",
    },
    {
      id: 3,
      gameName: "League of Legends",
      lastPlayed: "Yesterday 23:20",
    },
    {
      id: 4,
      gameName: "Apex Legends",
      lastPlayed: "Yesterday 20:45",
    },
    
  ];
  const recentGamesMapping = recentGames.map((game) => (
    <GameItem
      key={game.id}
      id={game.id}
      gameName={game.gameName}
      lastPlayed={game.lastPlayed}
    />
  ));
  return {recentGamesMapping};
}
