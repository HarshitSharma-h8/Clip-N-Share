import mongoose, {Schema, model, models} from "mongoose";

export const VIDEO_DIMENTIONS = {
    width: 1080,
    height: 1920
} as const;

export interface IVedio {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    controls?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    transformation?:{
        width: number;
        height: number;
        quality: number;
    }
}

const vedioSchema = new Schema<IVedio>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true
    },
    controls: {
        type: Boolean,
        default: true
    },
    transformation: {
        width: {
            type: Number,
            default: VIDEO_DIMENTIONS.width
        },
        height: {
            type: Number,
            default: VIDEO_DIMENTIONS.height
        },
        quality: {
            type: Number,
            min : 1,
            max : 100,
        }
    }
}, {timestamps: true});

const Vedio = models?.Vedio || model<IVedio>("Vedio", vedioSchema);

export default Vedio;