'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Shooters() {
  const games = useGetDataByCategory(endpoints.games);
  const shooterGames = games?.filter(game => game.categories?.some(category => category.name === 'shooter'));
  return (
    <main className="main-inner">
      {shooterGames ? <CardsListSection id="shooter" title="Шутеры" data={shooterGames} /> : <Preloader />}
    </main>
  );
}