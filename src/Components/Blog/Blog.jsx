import React, { useState } from "react";
import "./blog.scss";
import BlogItem from "../BlogItem/BlogItem";
import Button from "../../StyledComponent/Button/Button";
const Blog = ({ blogData }) => {
  const [surrentSlide, setCurentSlide] = useState(null);

  const renderBlogItems = () => {
    return blogData.blog_items?.map((item) => {
      return (
        <BlogItem
          key={item.id}
          {...item}
          surrentSlide={surrentSlide}
          setCurentSlide={setCurentSlide}
        />
      );
    });
  };

  return (
    <section className="blog container__out">
      <div className="blog__wrapper container">
        <div className="blog__title">
          <h2>Article and News</h2>
          <p>News, tips, tricks and more</p>
        </div>

        <div className="blog__items">{renderBlogItems()}</div>
        <div className="block__btn">
          <Button btnColor>BROWSE ALL</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
