import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

function Navbar({ openslidebar }) {
  return (
    <AppBar position="static">
      <div className="flex justify-between p-4  ">
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => {
              openslidebar();
            }}
            color="error"
            variant="outlined"
          >
            Open Menu
          </Button>
          <div>logo</div>
        </div>
        <div>{/* <Link>links</Link> */}</div>
      </div>
    </AppBar>
  );
}
export default Navbar;
