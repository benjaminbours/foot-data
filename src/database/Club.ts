import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
    },
    slugName: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    squad: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    foreigners: {
        type: Number,
        required: true,
    },
    totalMarketValue: {
        type: String,
        required: true,
    },
    averageMarketValue: {
        type: String,
        required: true,
    },
});

const Club = mongoose.model("Club", ClubSchema);

export default Club;
