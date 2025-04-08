// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./dB/index.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        })

        app.on()
    })
    .catch((error) => {
        console.log("mongo db connection failed !!!", error);

    })







// const app = express()

//     (async () => {

//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("Error", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`App is listening on ${process.env.PORT}`);
//             })
//         } catch (error) {
//             console.log(error);
//             process.exit(1)
//         }
//     })()