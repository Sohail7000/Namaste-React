import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useRef } from "react";
import Shimmer from "./Shimmer";

export default Body = () => {
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

  console.log(listOfRestaurants);
  return filteredRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            className="search-box"
          ></input>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
