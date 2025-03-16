import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, resMenu } = useRestaurantmenu(resId);

  if (resInfo === null) return <Shimmer />;

  console.log("resMenu", resMenu);
  console.log("resInfo", resInfo);

  const { name, areaName, locality, avgRating, cuisines, costForTwoMessage } =
    resInfo;
  //use resid = 609737
  return (
    <div className="menu">
      <h1>{name}</h1>
      <ul>
        <li>Area Name: {areaName}</li>
        <li>Locality: {locality}</li>
        <li>Average Rating: {avgRating}</li>
        <li>Cost: {costForTwoMessage}</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
