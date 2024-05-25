'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Pixel() {
  const games = useGetDataByCategory(endpoints.games);
  const pixelGames = games?.filter(game => game.categories?.some(category => category.name === 'pixel'));
  return (
    <main className="main-inner">
      {pixelGames ? <CardsListSection id="pixel" title="Пиксельные" data={pixelGames} /> : <Preloader />}
    </main>
  );
}