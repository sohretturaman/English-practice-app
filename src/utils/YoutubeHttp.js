/** @format */


import { YOUTUBE_API_KEY } from "@env";



export const getOnYoutubeSearch = async (searchInput) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${searchInput}&type=video&part=snippet&maxResults=2`
          ) 
        const data = response.json();
        return data ; 
        
    } catch (error) {
        console.log('got an error while fetching response', error.message); 
        return null; 
    }
  
};

