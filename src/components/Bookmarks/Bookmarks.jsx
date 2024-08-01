import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
      <h1 className="text-4xl text-center">BookMarked Blogs: {bookmarks.length}</h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
