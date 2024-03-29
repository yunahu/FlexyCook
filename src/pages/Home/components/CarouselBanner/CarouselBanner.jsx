import { useState } from "react";
import { Carousel } from "react-bootstrap";

import SingleCarousel from "./SingleCarousel/SingleCarousel";

import styles from "./CarouselBanner.module.css";

const ControlledCarousel = ({ prop1, prop2, prop3 }) => {
  /**
   * three_props {
   *    item1: { object for carousel 1 },
   *    item2: { object for carousel 2 },
   *    item3: { object for carousel 3 }
   * }
   */
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={styles.banner}
      >
        <Carousel.Item>
          <SingleCarousel
            imgURL={prop1.imgURL}
            title={prop1.title}
            servings={prop1.size}
            time={prop1.time}
            calories={prop1.calories}
            tag={prop1.tags}
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleCarousel
            imgURL={prop2.imgURL}
            title={prop2.title}
            servings={prop2.size}
            time={prop2.time}
            calories={prop2.calories}
            tag={prop2.tags}
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleCarousel
            imgURL={prop3.imgURL}
            title={prop3.title}
            servings={prop3.size}
            time={prop3.time}
            calories={prop3.calories}
            tag={prop3.tags}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ControlledCarousel;
