import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
      <h1 className="text-3xl text-center">Reading Time: {readingTime}</h1>
      <h1 className="text-4xl text-center">
        BookMarked Blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
