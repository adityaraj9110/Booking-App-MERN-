import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [val, setVal] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
          <Tabs
            sx={{ml:'auto'}}
            textColor="inherit"
            indicatorColor="primary"
            value={val}
            onChange={(e, val) => {
              
              setVal(val);
            }}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>


        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
