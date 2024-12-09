import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./orders.module.css";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
function Orders() {
	const [{ user }, dispatch] = useContext(DataContext);
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		if (user) {
			const userOrdersRef = collection(db, "users", user.uid, "orders");
			const orderedQuery = query(userOrdersRef, orderBy("created", "desc"));
			const unsubscribe = onSnapshot(
				orderedQuery,
				(snapshot) => {
					console.log(snapshot);
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
					// const fetchedOrders = snapshot.docs.map((doc) => ({
					// 	id: doc.id,
					// 	...doc.data(),
					// }));
					// setOrders(fetchedOrders);
				},
				(error) => {
					console.error("Error fetching orders:", error);
				}
			);

			// Cleanup the listener on unmount
			return () => unsubscribe();

			// if (user) {
			// 	db.collection("users")
			// 		.doc(user.uid)
			// 		.collection("orders")
			// 		.orderBy("created", "desc")
			// 		.onSnapshot((snapshot) => {
			// 			console.log(snapshot);
			// 		});
		} else {
			setOrders([]);
		}
	}, []);
	return (
		<Layout>
			<section className={classes.container}>
				<div className={classes.orders_container}>
					<h2>Your Orders</h2>
					{orders?.length == 0 && (
						<div style={{ padding: "20px" }}>You don't have orders yet.</div>
					)}
					{/* Ordered items */}
					<div>
						{orders?.map((eachOrder, i) => {
							return (
								<div key={i}>
									<hr />
									<p>Order ID:{eachOrder.id}</p>
									{eachOrder?.data?.basket?.map((order) => (
										<ProductCard flex={true} product={order} key={order.id} />
									))}
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Orders;
