import React from "react";
import "./blogitem.scss";
const BlogItem = ({
  img,
  title,
  text,
  tag,
  tags,
  data,
  id,
  setCurentSlide,
  surrentSlide,
}) => {
  const global_path_server = process.env.REACT_APP_STORAGE_SERVER;

  const renderTags = () => {
    return tags.split(",").map((item) => {
      return <li key={item}>{item}</li>;
    });
  };

  const style = {
    titleColor: { color: "" },
    shadow: { boxShadow: "" },
  };

  if (id === surrentSlide) {
    style.titleColor.color = "#CD4631";
    style.shadow.boxShadow = "10px 10px 0px 0px rgba(34, 60, 80, 1)";
  }

  return (
    <div
      className="blog_item"
      onClick={() => setCurentSlide(id)}
      style={style.shadow}
    >
      <div className="blog__img">
        <img src={global_path_server + img} alt="" />
      </div>

      <div className="blot__top">
        <span>{tag}</span>
        <h3 style={style.titleColor}>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="blog__bottom">
        <div className="blog__tags">
          <ul>{renderTags()}</ul>
        </div>
        <span>{data}</span>
      </div>
    </div>
  );
};

export default BlogItem;
