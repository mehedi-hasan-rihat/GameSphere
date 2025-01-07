require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
console.log(process.env.DB_PASS);

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sqw4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const reviewsCollection = client
      .db("B9A10")
      .collection("reviewsCollection");
    const wishlistCollection = client
      .db("B9A10")
      .collection("wishlistCollection");

    app.get("/reviews", async (req, res) => {
      const { email } = req.query;
      let option = {};
      if (email) {
        option = { reviewrEmail: { $regex: email, $options: "i" } };
      }

      const cursor = reviewsCollection.find(option);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.get("/review/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const data = await reviewsCollection.find(query).toArray();
      res.send(data);
    });

    app.delete("/review/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const data = await reviewsCollection.deleteOne(query);
      res.send(data);
    });

    app.get("/myReviews", async (req, res) => {
      const email = req.query.email;
      const query = { reviewrEmail: email };
      const data = await reviewsCollection.find(query).toArray();
      res.send(data);
    });

    app.get("/myWishlist", async (req, res) => {
      const email = req.query.email;
      const query = { userEmail: email };
      const data = await wishlistCollection.find(query).toArray();
      res.send(data);
    });

    app.patch("/update/:id", async (req, res) => {
      const id = req.params.id;
      const bodyData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          image: bodyData.image,
          price: bodyData.price,
          title: bodyData.title,
          rating: bodyData.rating,
          genre: bodyData.genre,
          release_date: bodyData.release_date,
          description: bodyData.description,
          platform: bodyData.platform,
        },
      };
      const data = await reviewsCollection.updateOne(query, updateDoc, options);
      res.send(data);
    });

    app.post("/addReview", async (req, res) => {
      const data = req.body;
      const doc = {
        image: data.image,
        title: data.title,
        rating: data.rating,
        genre: data.genre,
        release_date: data.release_date,
        description: data.description,
        reviewrEmail: data.reviewrEmail,
        reviewrName: data.reviewrName,
        price: data.price,
        platform: data.platform,
      };
      const result = await reviewsCollection.insertOne(doc);
      res.send(result);
    });

    app.post("/addWishlist", async (req, res) => {
      const data = req.body;
      const doc = {
        dataId: data.dataId,
        reviewrEmail: data.reviewrEmail,
        reviewrName: data?.reviewrName,
        userEmail: data?.userEmail,
        userName: data?.userName,
        title: data.title,
        genre: data.genre,
        rating: data.rating,
        price: data.price,
        platform: data.platform,
      };
      const result = await wishlistCollection.insertOne(doc);
      res.send(result);
    });

    app.get("/topRated", async (req, res) => {
      const data = await reviewsCollection
        .find({})
        .sort({ rating: -1 })
        .limit(6)
        .toArray();
      res.send(data);
    });

    app.get("/sort", async (req, res) => {
      const { rating, year, sortOrder } = req.query;
      let sort = {};

      if (rating) {
        sort.rating = sortOrder === "desc" ? -1 : 1;
      }
      if (year) {
        sort.release_date = sortOrder === "desc" ? -1 : 1;
      }
      const data = await reviewsCollection.find().sort(sort).toArray();
      res.send(data);
    });

    app.get("/filter", async (req, res) => {
      const { genre } = req.query;
      const query = { genre: genre };
      const data = await reviewsCollection.find(query).toArray();
      res.send(data);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Your server port : ${port}`);
});

