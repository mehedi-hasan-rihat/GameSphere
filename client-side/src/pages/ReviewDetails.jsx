import React from "react";
import ReactStars from "react-rating-stars-component";
const ReviewDetails = ({ review, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-max mx-auto relative ">
        <button
          className="absolute top-3 right-3 text-gray-600 px-3"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="flex gap-8 mt-5">
          <img
            src={review.image}
            alt={review.title}
            className="mt-3 h-96 rounded-md mb-5 w-full object-contain"
          />
          <div className="max-w-xl pt-2">
            <div className="flex items-center justify-between">
              <div className="">
                {" "}
                <h2 className="text-xl font-semibold">{review.title}</h2>
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
              </div>
             {review?.platform && ( <div className="inline-flex items-center justify-center rounded-full bg-yellow-400 cursor-default px-2.5 py-0.5 font-medium">
                <p className="whitespace-nowrap text-sm">{review?.platform}</p>
              </div>)}
            </div>
            <p className="mt-1 text-gray-700">{review.description}</p>
            <p className="mt-2 text-sm text-gray-700">
              It's only for ${review?.price}
            </p>
            <div className="divider"></div>
            <div className="">
              Reviewed by : {review?.reviewrName} - ({review?.reviewrEmail}){" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
