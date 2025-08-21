import { useState } from "react";
import styles from "../../style/Home/Home/index.module.scss";
import Slider from "./section/Slider";
import { data } from "../../lib/data/data";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section_home}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Відгуки</h1>
        <div className={styles.image_wrapper}>
          {data.map((el, index) => (
            <img
              key={el.id}
              src={el.image}
              className={`${styles.image} ${index === activeIndex ? styles.active : ""}`}
            />
          ))}
        </div>
        <Slider setActiveIndex={setActiveIndex} />
        <div className={styles.index_wrapper}>
          {data.map((_, index) => (
            <span
              key={index}
              className={`${styles.slider_index} ${index === activeIndex ? styles.active : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
