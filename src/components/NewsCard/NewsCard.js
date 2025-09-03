import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  //  console.log(newsItem);

  const fulldate = new Date(newsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
        }
        className="newsImage"
      />

      <div className="newsText" />

      <div>
        <span className="title">{newsItem.title}</span>
        <br />{" "}
        <span className="author">
          <a href={newsItem.url} target="_blank">
            <b>short</b>
          </a>
          <span className="muted">
            by {newsItem.author ? newsItem.author : "unknown"} /
            {time
              ? `${hour - 12}:${date[4].substring(3, 5)} pm`
              : `${hour} : ${date[4].substring(3, 5)} am`}{" "}
            on {date[2]} {date[1]} {date[3]}, {date[0]}
          </span>
        </span>
      <div className="lowerNewsText">
        <div className="description">{newsItem.description}</div>
        <span className="readmore">
          read more at{" "}
          <a href={newsItem.url} target="_blank">
            <b>{newsItem.source.name}</b>
          </a>
        </span>
      </div>
      </div>

    </div>
  );
};

export default NewsCard;
