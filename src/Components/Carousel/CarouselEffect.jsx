import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import classes from "./carousel.module.css";
function CarouselEffect() {
	return (
		<div>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				interval={2000}
				transitionTime={500}
				showIndicators={false}
				showThumbs={false}
				showStatus={false}
				// autoFocus={true}
			>
				{img.map((imageItemLink, i) => {
					return <img key={i} src={imageItemLink} />;
				})}
			</Carousel>
			<div className={classes.hero_img}></div>
		</div>
	);
}

export default CarouselEffect;
