const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose.connect("mongodb+srv://saad:2113@clus.19ej5.mongodb.net/PakScholarsInstitute", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
// mongodb+srv://saadd:2113@cluster0.ee2rk.mongodb.net/PakScholarsInstitute