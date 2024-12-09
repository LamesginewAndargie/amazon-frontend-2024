import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";
function Product() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				// console.log(res);
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				// console.log(err);
				setIsLoading(false);
			});
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<section className={classes.product_container}>
					{products.map((singleProduct, i) => {
						return (
							<ProductCard key={i} product={singleProduct} renderAdd={true} />
						);
					})}
				</section>
			)}
		</>
	);
}

export default Product;
