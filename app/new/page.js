'use client';

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const games = useGetDataByCategory(endpoints.games);
  const newGames = games?.filter(game => game.categories?.some(category => category.name === 'new'));
  return (
    <main className="main-inner">
      {newGames ? <CardsListSection id="new" title="Новые" data={newGames} /> : <Preloader />}
    </main>
  );
}