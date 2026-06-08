import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema= new Schema(
    {
        videofile:{
            type: String,   //cloudnary
            required: true,
            
        },
        thumbnail:{
            type: String,   //cloudnary
            required: true,
            
        },
        title:{
            type: String,  
            required: true,
            
        },
        description:{
            type: String, 
            required: true,
            
        },
        duration:{
            type: Number,   //cloudnary
            required: true,
            
        },
        views:{
            type: Number,   
            required: true,
            
        },
        isPublished:{
            type: Boolean,  
            required: true,
            
        },
        owner:{
            type:Schema.Types.ObjectId, 
            ref:"User",
            required:true
            
        },

},
{
    timeseries: true
}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model.apply("Video",videoSchema)