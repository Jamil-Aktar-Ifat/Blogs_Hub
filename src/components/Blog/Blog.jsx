import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-3">
      <img
        className="w-full mb-8 rounded-md"
        src={cover}
        alt={`Cover Picture of ${title}`}
      />
      <div className="flex justify-between mb-4 ">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl ">{title}</h2>
      <p className="flex gap-4">
        {hashtags.map((hash) => (
          <span className="">
            <a className="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="font-bold text-purple-800 underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
