import dotenv from "dotenv";

dotenv.config();

export default {
    ENVIRONMENT: process.env.ENV,
    PORT: process.env.ENV === "develop" ? 80 : 5000,
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://devHTTT2020:5T7Pr41EXIzDmWmi@cluster0.wfafv.mongodb.net/atticus-literature?retryWrites=true&w=majority',
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || 'pk_test_nqH70Fb8FmabuVsU5kp4gpYf00XGNeVxyf',
}