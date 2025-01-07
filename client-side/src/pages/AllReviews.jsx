import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Loading from "../component/Loading";
import ReactStars from "react-rating-stars-component";
import ReviewDetails from "./ReviewDetails";

export default function AllReviews() {
  const { loading, dataLoading, setDataLoading } = useContext(AuthContext);
  const reviewsData = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); // For modal data
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setReviews(reviewsData);
    setDataLoading(false);
  }, []);

  if (loading || dataLoading) {
    return <Loading />;
  }

  // Handle modal open
  const openModal = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedReview(null);
    setIsModalOpen(false);
  };

  return (
    <div className="all-reviews relative px-3 mx-auto container my-5 md:my-12">
      <h1 className="text-3xl font-semibold sm:font-bold text-center my-8">
        All Reviews
      </h1>

      {/* Sort and Filter */}
      <div className="flex px-3 gap-2 absolute right-0 -top-5 my-16">
        <div
          onChange={(e) => {
            fetch(`https://server-side-brown-sigma.vercel.app/sort?${e.target.value}`)
              .then((res) => res.json())
              .then((data) => setReviews(data))
              .catch((err) => console.log(err));
          }}
          className="form-control w-full max-w-[250px] my-4 relative"
        >
          <select
            id="sort"
            name="sort"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Sort by Year or Rating
            </option>
            <option value="rating=true&sortOrder=desc">
              Descending order by rating
            </option>
            <option value="year=true&sortOrder=desc">
              Descending order by Year
            </option>
          </select>
        </div>

        <div
          onChange={(e) => {
            fetch(`https://server-side-brown-sigma.vercel.app/filter?genre=${e.target.value}`)
              .then((res) => res.json())
              .then((data) => setReviews(data))
              .catch((err) => console.log(err));
          }}
          className="form-control w-full max-w-[250px] my-4 relative"
        >
          <select
            id="genres"
            name="genres"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Sort by Genre Name
            </option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>
      </div>

      {/* Reviews */}
      {reviews.length < 1 ? (
        <div className="h-[calc(100vh-500px)] flex items-center justify-center bg-gray-100 my-28 rounded-lg">
          No reviews found!
        </div>
      ) : (
        <div className="grid md:grid-cols-2 mt-24 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <article
              key={review?._id}
              className="flex flex-col bg-white transition hover:shadow-xl shadow-sm"
            >
              <div className="block sm:basis-56 relative">
                <img
                  alt=""
                  src={review.image}
                  className="aspect-square h-52 w-full object-cover"
                />
                <span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-yellow-400 cursor-default px-2.5 py-0.5 font-medium">
                  <p className="whitespace-nowrap text-sm">{review?.genre}</p>
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-3">
                  <h3 className="font-bold uppercase text-gray-900">
                    {review?.title}
                  </h3>
                  <div className="flex items-center">
                    <ReactStars
                      value={review?.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      ({review?.rating})
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-700">
                    {review?.description}
                  </p>
                </div>

                <div
                  className="sm:flex sm:items-end sm:justify-end cursor-pointer"
                  onClick={() => openModal(review)}
                >
                  <p className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                    Read More...
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedReview && (
        <ReviewDetails review={selectedReview} onClose={closeModal} />
      )}
    </div>
  );
}
