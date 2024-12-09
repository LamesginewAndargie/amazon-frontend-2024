import React from "react";
import classes from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
	return (
		<div className={classes.lower_container}>
			<ul>
				<li>
					<AiOutlineMenu />
					<p>All</p>
				</li>
				<li>
					<p>Today's Deals</p>
				</li>
				<li>
					<p>Customer Service</p>
				</li>
				<li>
					<p>Registry</p>
				</li>
				<li>
					<p>Gift Cards</p>
				</li>
				<li>
					<p>Sell</p>
				</li>
			</ul>
		</div>
	);
}

export default LowerHeader;
