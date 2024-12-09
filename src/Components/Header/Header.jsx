import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
// import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
function Header() {
	const [{ user, basket }, dispatch] = useContext(DataContext);
	// console.log(basket.length);
	const totalItem = basket.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	return (
		<section className={classes.fixed}>
			<section>
				<div className={classes.header_container}>
					{/* logo section */}
					<div className={classes.logo_container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						<div className={classes.delivery}>
							{/* delivery */}
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>
					{/* search section */}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search Amazon" />
						<FaSearch size={38} />
					</div>
					{/* right side link */}
					<div className={classes.order_container}>
						<Link to="#" className={classes.language}>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
								alt="flag"
							/>
							<select>
								<option value="">EN</option>
							</select>
						</Link>
						{/* three components */}
						<Link to={!user && "/auth"}>
							<div>
								{user ? (
									<>
										<p>Hello, {user?.email?.split("@")[0]}</p>
										<span onClick={() => auth.signOut()}>Sign Out</span>
									</>
								) : (
									<>
										<p>Hello, sign in</p>
										<span>Account & Lists</span>
									</>
								)}
							</div>
						</Link>
						{/* orders */}
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>
						{/* cart */}
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>{totalItem}</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
}

export default Header;
