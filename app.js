const express = require("express")
const dotenv=require("dotenv");
dotenv.config();
const app = express()
const PORT=process.env.PORT;
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})
//database connection
const connectDb=require("./utils/dbConnect")
app.use(express.json());
const postRoutes=require("./routes/post.routes")
app.use("/api",postRoutes);
