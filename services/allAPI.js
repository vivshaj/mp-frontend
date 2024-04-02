import { commonAPI } from "./commonAPI"
import { SERVER_URL} from './serverurl'


//upload new videos
//we need to 'export' whatever we obtain here inorder to use in our application
export const uploadVideoAPI = async (video)=> {
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//get alluploadedVideos

export const getAllUploadedVideosAPI = async ()=> {
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//get a Video

export const getAVideoAPI = async (id)=> {
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//add Video to history 

export const addVideoHistoryAPI = async (video)=> {
    return await commonAPI("POST",`${SERVER_URL}/watchhistory`,video)
}

//get History 

export const getHistoryAPI = async ()=> {
    return await commonAPI("GET",`${SERVER_URL}/watchhistory`,"")
}

//delete History

export const deleteHistoryAPI = async (id)=> {
    return await commonAPI("DELETE",`${SERVER_URL}/watchhistory/${id}`,{})
}

//delete Video

export const deleteVideoAPI = async (id)=> {
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}


// add videos to category

export const addCategoryAPI = async (category)=> {
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

// get Category 

export const getAllCategoryAPI = async ()=> {
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//delete category

export const deleteCategoryAPI = async (id)=> {
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update video to category

export const updateCategoryAPI = async (id,categoryDetails)=> {
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}

