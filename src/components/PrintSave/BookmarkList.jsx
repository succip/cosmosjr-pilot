import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import store from "../../store/store";

const BookmarkList = ({ bookmarks }) => {
  const onBookmarkClick = (extent) => {
    const { view } = store.getState().app;
    view.goTo({ target: extent });
  };
  return (
    <>
      <List dense>
        {bookmarks.map(({ name, extent }, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton onClick={() => onBookmarkClick(extent)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default BookmarkList;
