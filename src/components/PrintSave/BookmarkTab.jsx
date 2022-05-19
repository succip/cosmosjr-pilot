import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BookmarkList from "./BookmarkList";
import store from "../../store/store";
import { useState } from "react";
import { generateId } from "../../js/Utilities";

const BookmarkTab = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkName, setBookmarkName] = useState("");

  const onAddBookmark = () => {
    const { view } = store.getState().app;
    setBookmarks([...bookmarks, { id: generateId(), name: bookmarkName, extent: view.extent }]);
    setBookmarkName("");
  };

  const onRemoveBookmark = (bookmarkId) => {
    setBookmarks(bookmarks.filter(({ id }) => id !== bookmarkId));
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
      <BookmarkList bookmarks={bookmarks} onRemoveBookmark={onRemoveBookmark} />
    </>
  );
};

export default BookmarkTab;
