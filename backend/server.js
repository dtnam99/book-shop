import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./utils/config";
import cors from "cors";
import morgan from "morgan";

import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import orderRoute from "./routes/orderRoute";
import genreRoute from "./routes/genreRoute";
import authorRoute from "./routes/authorRoute";
import { 
    createInitialEnums, 
    createInitialAuthors,
    createInitialGenres,
    createInitialProducts
} from "./utils/createData";

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));
app.use(morgan(" :method :url :req[header] - :res[header]"));
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/genres", genreRoute);
app.use("/api/authors", authorRoute);
app.get("/api", (req, res) => {
    res.send("Atticus Literature's api is running");
});

const main = async () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
    try {   
        // await createInitialEnums();
        // await createInitialAuthors();
        // //await createInitialGenres();
        // await createInitialProducts();
        // await createInitialGenres();
        console.log('Initial data is successfully prepared!!!');
    } catch (error) {
        console.error(error);
    }
}

app.listen(config.PORT, () => {
    main();
})