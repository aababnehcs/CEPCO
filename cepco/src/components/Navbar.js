import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
function Navbar({ openslidebar }) {
  return (
    <AppBar position="static">
      <div className="flex justify-between p-4  ">
        <div className="flex gap-3 items-center">
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              openslidebar();
            }}
          >
            <MenuIcon />
          </IconButton>
          <div>logo</div>
        </div>
        <div>{/* <Link>links</Link> */}</div>
      </div>
    </AppBar>
  );
}
export default Navbar;
