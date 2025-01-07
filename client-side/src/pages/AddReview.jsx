import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import ReviewImg from '../assets/addReview.png'
export default function AddReview() {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const rating = form.rating.value;
    const genres = form.genres.value;
    const publishing_year = form.publishing_year.value;
    const description = form.description.value;
    const reviewrEmail = user?.email;
    const reviewrName = user?.displayName;
    const price = form.price.value;
    const platform = form.platform.value;

    const data = {
      image: thumbnail,
      price: price,
      title: title,
      rating: rating,
      genre: genres,
      release_date: publishing_year,
      description: description,
      reviewrEmail: reviewrEmail,
      reviewrName: reviewrName,
      platform: platform,
    };
    console.log(data);

    fetch("https://server-side-brown-sigma.vercel.app/addReview", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added Review",
            text: " ",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto pt-12 pb-40 px-3 ">
      <div className="text-3xl font-semibold text-center pb-20">Add Reivew</div>
   <div className="flex flex-col lg:flex-row justify-between  gap-10">   <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 max-w-xl max-h-fit">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Share Your Thoughts
        </h2>
        <p className="text-gray-600 mb-4">
          Your feedback matters! Take a moment to share your experience with
          this game. Whether it's the immersive gameplay, stunning graphics, or
          room for improvement, we'd love to hear your thoughts.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Rate the game based on your experience.</li>
          <li>Highlight what you loved or what could be better.</li>
          <li>Be honest and constructive!</li>
        </ul>
        <p className="text-gray-600">
          <strong className="font-medium">Thank you</strong> for making your
          voice heard!
        </p>

        <div className="h-full">
          <img src={ReviewImg} alt="" />
        </div>
      </div>
      <div className="max-w-5xl shadow-md rounded-lg border border-gray-200 flex-1">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="sm:flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Game Cover Image</span>
              </label>
              <input
                type="url"
                name="thumbnail"
                placeholder="thumbnail_url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="sm:flex gap-5 items-center justify-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Publishing year</span>
              </label>
              <select
                id="publishing_year"
                name="publishing_year"
                className="select select-bordered w-full"
                defaultValue=""
                required
              >
                <option disabled value="">
                  Select One
                </option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className="form-control w-full relative top-1">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control w-full relative top-1">
            <label htmlFor="genres">Genres</label>
            <select
              id="genres"
              name="genres"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option disabled value="">
                Select One
              </option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Platform</span>
              </label>
              <input
                type="text"
                name="platform"
                placeholder="platform"
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>

              <input
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                defaultValue={user?.rating}
                type="number"
                id="rating"
                min="1"
                max="5"
                step="1"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Add a Description"
              required
              className="textarea textarea-bordered textarea-md w-full h-64"
            ></textarea>
          </div>


          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div></div>
    </div>
  );
}
