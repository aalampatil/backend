import { mongoose, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videofile : {
            type: String, //cloudnary
            required: true
        },
        thumbnail : {
            type: String, //cloudnary
            required: true
        },
        title: {
            type: String,
            required: true
        },
       description: {
            type: String,
            required: true
        },
       duration: {
            type: String,
            required: true
        },
       views: {
            type: Number,
            default: 0,
        },
       isPublished: {
            type: Number,
            default: true,
        },
        

    }, { timestamps: true }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)