'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from '../api/config';
import { CardsListSection } from '../components/CardList/CardsListSection.jsx';
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
      <main className="main-inner">
        {TDSGames ? (
            <CardsListSection id="tds" title="TDS" data={TDSGames}/>
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
