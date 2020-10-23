import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from "react";
import banner1 from "../../../images/banner-image.jpeg";
import banner2 from "../../../images/banner-logo.jpg";

export class HomePageSlider extends Component {
  render() {
    const images = [banner1, banner2];
    return (
      <div
        style={{
          overflow: "hidden",
          paddingBottom: "30px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {images.map((item) => (
            <img
              src={item}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                margin: "auto",
                position: "relative",
                left: "-15px",
              }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default HomePageSlider;
