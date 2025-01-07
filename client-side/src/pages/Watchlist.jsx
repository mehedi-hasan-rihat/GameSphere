import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Loading from "../component/Loading";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const { loading, dataLoading, setDataLoading, user } =
    useContext(AuthContext);
  console.log(loading, dataLoading);
  useEffect(() => {
    fetch(`https://server-side-brown-sigma.vercel.app/myWishlist?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchlist(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      }).finally(() => setDataLoading(false));
  }, []);

  if (loading || dataLoading) {
    return <Loading/>;
  }

  return (
    <div className="my-watchlist container mx-auto pb-40">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center my-8">My Watchlist</h1>


{watchlist.length < 1 ? <div className="min-h-[calc(100vh-500px)] flex items-center justify-center bg-gray-100 my-28 mx-auto container rounded-lg">No reviews found!</div>:  ( 
        <div className="overflow-x-auto px-1 rounded-xl text-sm sm:text-md min-h-[calc(100vh-500px)]">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Genre</th>
                <th className="p-4">Peice</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((review, index) => (
                <tr
                  key={review._id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4">{review.title}</td>
                  <td className="p-4 text-center">{review.rating}</td>
                  <td className="p-4 text-center">{review.genre}</td>
                  <td className="p-4 text-center">{review.price}</td>
                </tr>
              ))}
            </tbody>
          </table>



        </div>
)}
    </div>
  );
}
