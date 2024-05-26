'use client';

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Popular() {
  const games = useGetDataByCategory(endpoints.games);
  const popularGames = games?.filter(game => game.categories?.some(category => category.name === 'popular'));
  return (
    <main className="main-inner">
      {popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames} /> : <Preloader />}
    </main>
  );
}
