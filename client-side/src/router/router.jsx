import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignIn from "../component/Signin/SignIn";
import Login from "../component/Login/Login";
import AuthLAyout from "../layout/AuthLAyout";
import HomePage from '../pages/HomePage'
import AddReview from "../pages/AddReview";
import ReviewDetails from "../pages/ReviewDetails";
import AllReviews from "../pages/AllReviews";
import MyReview from "../pages/MyReview.jsx";
import PrivateRoute from "../component/PrivateRoute.jsx";
import Watchlist from "../pages/Watchlist.jsx";
import UpdateReview from '../pages/UpdateReview.jsx'
import Error from "../pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path : '/addReview',
        element : <PrivateRoute><AddReview/></PrivateRoute>
      },
      {
        path : '/review/:id',
        element : <ReviewDetails/>,
        loader : ({params}) => fetch(`https://server-side-brown-sigma.vercel.app/review/${params.id}`)
      },
      {
        path : '/reviews',
        element : <AllReviews/>,
        loader : () => fetch(`https://server-side-brown-sigma.vercel.app/reviews`)
      },
      {
        path : '/myReviews',
        element :<PrivateRoute><MyReview/></PrivateRoute>,
      },
      {
        path : '/myWatchlist',
        element :<PrivateRoute><Watchlist/></PrivateRoute>,
      },
      {
        path : '/updateReview/:id',
        element :<UpdateReview/>,
        loader : ({params}) => fetch(`https://server-side-brown-sigma.vercel.app/review/${params.id}`)
      }
    ]
  },
  {
    path:'/auth',
    element: <AuthLAyout/>,
    children : [
      {
        path : "registration",
        element : <SignIn/>
      },
      {
        path : "login",
        element : <Login/>
      }
    ]
  }
]);

export default router
