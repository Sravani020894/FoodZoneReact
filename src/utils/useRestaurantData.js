import { useEffect } from "react";

const useRestaurantData = ()=>{
    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    
        const json = await data.json();
        console.log(json);
         // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // updated state variable restaurants with Swiggy API data
          // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // if checkData is not undefined then return it
        if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
    };
    return resData;
}

export default useRestaurantData;