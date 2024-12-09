import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Currencyformat from "../Currencyformat/Currencyformat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function ProductCard({ product, flex, renderDesc, renderAdd }) {
	const { image, title, id, rating, price, description } = product;
	// console.log(product);
	const [state, dispatch] = useContext(DataContext);
	// console.log(state);

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				image,
				title,
				id,
				rating,
				price,
				description,
			},
		});
	};

	return (
		<div
			className={`${classes.card_container} ${
				flex ? classes.product_flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt="" />
			</Link>
			<div>
				<h4 style={{ paddingLeft: "10px" }}>{title}</h4>
				{renderDesc && (
					<div style={{ maxWidth: "750px", textAlign: "justify" }}>
						{description}
					</div>
				)}
				<div className={classes.rating}>
					{/* rating */}
					<Rating value={rating?.rate} precision={0.1} />
					{/* count */}
					<small>{rating?.count}</small>
				</div>
				<div style={{ paddingLeft: "10px" }}>
					{/* price */}
					<Currencyformat amount={price} />
				</div>
				{renderAdd && (
					<button className={classes.button} onClick={addToCart}>
						add to cart
					</button>
				)}
			</div>
		</div>
	);
}

export default ProductCard;
