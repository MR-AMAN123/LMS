import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config({})


cloudinary.config({
    
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    cloud_name:process.env.CLOUD_NAME,
});

export const uploadMedia = async (file, mimetype) => {
  try {
    let resourceType = "auto";

    // 👇 Force video type if mimetype starts with "video/"
    if (mimetype && mimetype.startsWith("video/")) {
      resourceType = "video";
    }

    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: resourceType,
    });

    return uploadResponse;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};
export const deleteMediaFromCloudinary= async (publicId)=>{
    try {
        await cloudinary.uploader.destroy(publicId)
    } catch (error) {
        console.log(error);
        
        
    }
}
export const deleteVideoFromCloudinary= async (publicId)=>{
    try {
        await cloudinary.uploader.destroy(publicId,{resource_type:"video"})
    } catch (error) {
        console.log(error);
        
        
    }
}