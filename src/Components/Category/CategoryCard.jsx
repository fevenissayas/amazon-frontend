import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

function CategoryCard(data) {
  // console.log(data);

  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.titleLink}</h2>{" "}
        </span>
        <img src={data?.imageLink} alt="" />

        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
