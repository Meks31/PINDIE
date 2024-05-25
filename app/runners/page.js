'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Runners() {
  const games = useGetDataByCategory(endpoints.games);
  const runnerGames = games?.filter(game => game.categories?.some(category => category.name === 'runner'));
  return (
    <main className="main-inner">
      {runnerGames ? <CardsListSection id="runner" title="Раннеры" data={runnerGames} /> : <Preloader />}
    </main>
  );
}