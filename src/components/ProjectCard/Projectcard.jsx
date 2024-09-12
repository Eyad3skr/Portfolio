import React from "react";
import styles from "./projectcard.module.css";
import PropTypes from "prop-types";
import borderBottom from "../../assets/ProjectCardDownBorder.svg";

const Projectcard = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.publishDate}>
              <span>{props.publish}</span>
            </div>
            <img
              src={
                props.img
                  ? props.img
                  : "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"
              }
              alt="Project mockup"
            />
            <div className={styles.viewLive}>
              <a href={props.read}>More Info</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.data}>
        <h3>{props.title ? props.title.slice(0, 30) : "No Title"}</h3>
        <span>
          {props.author ? props.author.slice(0, 20) + "..." : "No Author"}
        </span>
        <p>
          {props.description
            ? props.description.slice(0, 60) + "..."
            : "No Description"}
        </p>
      </div>
      <img
        className={styles.borderBottom}
        src={borderBottom}
        alt="border bottom"
      ></img>
    </div>
  );
};

Projectcard.propTypes = {
  publish: PropTypes.string,
  img: PropTypes.string,
  read: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Projectcard;