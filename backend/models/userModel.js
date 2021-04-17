import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    nickName: { type: String, required: true},
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true, trim: true},
    address: { type: String },
    city: { 
        name: { type: String },
    },
    state: { 
        name: { type: String, required: false },
        isoCode: { type: String, required: false },
    },
    country:  { 
        name: { type: String },
        isoCode: { type: String },
    },
    phone: { type: String },
    role: { 
        type: String,
        ref: 'UserEnumRole',
        required: true,
        default: 'client',
    },
    favorites: [{type: mongoose.Schema.ObjectId, ref: 'Product', unique: true}],
    orders: [{type: mongoose.Schema.ObjectId, ref: 'Order', unique: true}],
})

const userModel = mongoose.model("User", userSchema);

export default userModel;