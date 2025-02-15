import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useRef } from "react";
import Shimmer from "./Shimmer";

export default function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // Original restaurant data
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered data
  const inputRef = useRef(); // Ref for search input

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch restaurant data
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
        cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(resList); // Store the full list
      setFilteredRestaurants(resList); // Initially, filtered list is the same as full list
    } catch (err) {
      console.log(err.message);
    }
  };

  // Handle search
  const handleSearch = () => {
    const searchValue = inputRef.current.value.toLowerCase();

    const filteredResults = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchValue)
    );

    setFilteredRestaurants(filteredResults);
  };

  // Handle filter for top-rated restaurants
  const handleFilterTopRated = () => {
    const topRated = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurants(topRated);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search Bar */}
        <div className="search">
          <input type="text" ref={inputRef} className="search-box" />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Top Rated Filter Button */}
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}
