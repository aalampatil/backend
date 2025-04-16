import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, //cloudinary url
            required: true,
        },
        coverImage: {
            type: String, //cloudinary url
        },
        watchHistory: [
            {
                type : Schema.Types.objectId,
                ref: "video"
            }
        ],
        passowrd: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String
        }

    }, { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) return next()

    this.passowrd = await bcrypt.hash(this.passowrd, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.isPasswordCorrect)
}

userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
           _id: this._id,
           email: this.email,
           username: this.username,
           fulllName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiredIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
           _id: this._id,
        },
        process.env.REFRESH_TOKEN,
        {
            expiredIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)