import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useRef } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // functions
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const cardObj = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid")
      );

      const resList =
        cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(resList);
      setFilteredRestaurants(resList);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = () => {
    const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your internet connection </h1>
    );
  }

  return filteredRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            className="border border-solid border-black rounded-xs"
          ></input>
          <button
            className="px-5 py-2 m-4 bg-green-100 rounded-lg "
            onClick={() => {
              handleSubmit();
            }}
          >
            Search
          </button>
        </div>
        <div className=" search m-4 p-4">
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() =>
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.3
                )
              )
            }
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
