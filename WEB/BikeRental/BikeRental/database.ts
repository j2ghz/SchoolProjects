﻿import mongoose = require("mongoose") //TODO FIX

(mongoose as any).Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/BikeRental");
export { mongoose };