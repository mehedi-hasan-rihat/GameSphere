import React, { useContext } from "react";
import Banner from "../component/Home/Banner/Banner";
import TopRated from "../component/Home/TopRated/TopRated";
import PopularGenres from "../component/Home/Popular";
import UpcomingGamePreviews from "../component/Home/TopRated/Upcoming";
import { AuthContext } from "../AuthProvider";
import Loading from "../component/Loading";
import NewsLetter from "../component/Home/NewsLetter";

export default function HomePage() {
 
  return (
    <div className="dark:bg-gray-800">
      <Banner />
      <TopRated />
      <PopularGenres />
      <UpcomingGamePreviews />
      <NewsLetter/>
    </div>
  );
}
