'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from '../api/config';
import { CardsListSection } from '../components/CardList/CardsListSection.jsx';
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return (
      <main className="main-inner">
        {popularGames ? (
          <CardsListSection id="popular" title="Популярные" data={popularGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
