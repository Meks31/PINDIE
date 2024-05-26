'use client'

import { endpoints } from "@/app/api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function TDS() {
  const games = useGetDataByCategory(endpoints.games);
  const tdsGames = games?.filter(game => game.categories?.some(category => category.name === 'TDS'));
  return (
    <main className="main-inner">
      {tdsGames ? <CardsListSection id="tds" title="TDS" data={tdsGames} /> : <Preloader />}
    </main>
  );
}