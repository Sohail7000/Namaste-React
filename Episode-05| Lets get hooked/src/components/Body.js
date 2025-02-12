import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

export default Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const arr = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() =>
            setRestaurantList(
              restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              )
            )
          }
        >
          {" "}
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
