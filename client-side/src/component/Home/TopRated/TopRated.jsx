import React, { useContext, useEffect, useState } from "react";
import TopRatedCard from "./topRatedCard";
import { AuthContext } from "../../../AuthProvider";
import Loading from "../../Loading";
export default function TopRated() {
  const [topRatedGame, setTopRatedGame] = useState([]);
  const { loading, dataLoading, setDataLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://server-side-brown-sigma.vercel.app/topRated")
      .then((res) => res.json())
      .then((data) => {
        setTopRatedGame(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setDataLoading(false));
  }, []);

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="container py-5 px-3 mx-auto mb-[150px]">
      <div className="dark:text-white  mb-14 text-center max-w-3xl mx-auto">
      <h3 className="text-3xl font-semibold mb-3">Top Rated Games</h3>
      <p>Discover the best games as rated by our community. Dive into epic adventures, thrilling challenges, and unforgettable stories loved by gamers worldwide.</p>
      </div>
      {topRatedGame.length < 1 ? (
        <div className="h-64 flex items-center justify-center bg-gray-100 my-12 rounded-lg">
          No reviews found!
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topRatedGame.map((game) => {
            return <TopRatedCard key={game._id} game={game} />;
          })}
        </div>
      )}
    </div>
  );
}
