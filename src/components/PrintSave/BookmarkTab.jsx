import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BookmarkList from "./BookmarkList";
import store from "../../store/store";
import { useState } from "react";

const BookmarkTab = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkName, setBookmarkName] = useState("");

  const onAddBookmark = () => {
    const { view } = store.getState().app;
    setBookmarks([...bookmarks, { name: bookmarkName, extent: view.extent }]);
    setBookmarkName("");
  };

  return (
    <>
      <TextField
        label="Bookmark Name"
        value={bookmarkName}
        onChange={(e) => setBookmarkName(e.target.value)}
      />
      <Button variant="contained" onClick={onAddBookmark}>
        Add Bookmark
      </Button>
      <BookmarkList bookmarks={bookmarks} />
    </>
  );
};

export default BookmarkTab;
