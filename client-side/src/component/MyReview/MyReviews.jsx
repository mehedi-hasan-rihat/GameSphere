import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Lottie from "lottie-react";
import TableAnimation from "../../assets/table.json";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const { loading, dataLoading, setDataLoading, user } =
    useContext(AuthContext);

  // Handle review deletion
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-brown-sigma.vercel.app/review/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            setReviews((prevReviews) =>
              prevReviews.filter((review) => review._id !== id)
            );
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Failed to delete the review. Try again later.",
              "error"
            );
          });
      }
    });
  };

  // Fetch user reviews on component mount
  useEffect(() => {
    if (user) {
      setDataLoading(true);
      fetch(`https://server-side-brown-sigma.vercel.app/myReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Error fetching reviews:", err))
        .finally(() => setDataLoading(false));
    }
  }, [user, setDataLoading]);

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-6 my-reviews min-h-[calc(100vh-250px)]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        My Reviews
      </h1>

      {reviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] bg-gray-100 rounded-lg p-10">
          <Lottie
            animationData={TableAnimation}
            loop={true}
            className="w-64 h-64"
          />
          <p className="text-lg text-gray-500 mt-4">
            No reviews found! Start reviewing to see your list here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="table-auto w-full text-sm text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3 text-center">Rating</th>
                <th className="px-6 py-3 text-center">Genre</th>
                <th className="px-6 py-3 text-center">Year</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr
                  key={review._id}
                  className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{index + 1}</td>
                  <td className="px-6 py-4">{review.title}</td>
                  <td className="px-6 py-4 text-center">{review.rating}</td>
                  <td className="px-6 py-4 text-center">{review.genre}</td>
                  <td className="px-6 py-4 text-center">
                    {review.release_date}
                  </td>
                  <td className="px-6 py-4 text-center flex items-center justify-center gap-4">
                    <Link
                      to={`/updateReview/${review._id}`}
                      className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition"
                      title="Update Review"
                    >
                      <GrDocumentUpdate size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                      title="Delete Review"
                    >
                      <MdDeleteForever size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
