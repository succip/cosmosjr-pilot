import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import store from "../../store/store";

const BookmarkList = ({ bookmarks, onRemoveBookmark }) => {
  const onBookmarkClick = (extent) => {
    const { view } = store.getState().app;
    view.goTo({ target: extent });
  };

  return (
    <>
      <List dense>
        {bookmarks.map(({ id, name, extent }, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton onClick={() => onBookmarkClick(extent)}>
                <ListItemText primary={name} />
              </ListItemButton>
              <Button onClick={() => onRemoveBookmark(id)}>
                <DeleteOutlineIcon />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default BookmarkList;
