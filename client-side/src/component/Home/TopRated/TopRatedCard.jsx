import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewDetails from "../../../pages/ReviewDetails";

export default function TopRatedCard({ game }) {
  const { _id, image, title,  rating, description } = game;
 const [selectedReview, setSelectedReview] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

 // Handle modal open
 const openModal = () => {
  setSelectedReview(game);
  setIsModalOpen(true);
};

// Handle modal close
const closeModal = () => {
  setSelectedReview(null);
  setIsModalOpen(false);
};

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img alt={title} src={image} className="h-52 w-full object-cover" />

      <div className="p-2 sm:p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className=" line-clamp-3 text-sm/relaxed text-gray-500">{description}</p>

        <div className=" flex items-center">
          <ReactStars value={rating} size={20} edit={false} activeColor="#ffd700" />
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
        <p
           onClick={() => openModal()}
          className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer  h-2 "
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-1 rtl:rotate-180 -rotate-45 group-hover:rotate-0 group-hover:text-xl text-lg"
          >
            &rarr;
          </span>
        </p>
      </div>

       {/* Modal */}
       {isModalOpen && selectedReview && (
        <ReviewDetails review={selectedReview} onClose={closeModal} />
      )}
    </article>
  );
}
