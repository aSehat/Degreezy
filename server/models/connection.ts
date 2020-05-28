import mongoose from 'mongoose';

export async function get_connection() {
//    mongoose.connect("Insert Remote Mongoose URL Here", {useNewUrlParser: true, useUnifiedTopology: true})
//       .catch(error => console.log(error));
    mongoose.connect("mongodb://localhost", {useNewUrlParser: true, useUnifiedTopology: true})
        .catch(error => console.log(error));
}
