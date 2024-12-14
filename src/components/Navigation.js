import { Search as SearchIcon } from '@mui/icons-material';
import { AppBar, Avatar, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu state
  const [searchQuery, setSearchQuery] = useState(""); // For search query
  const [avatarMenuAnchor, setAvatarMenuAnchor] = useState(null); // For avatar dropdown

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarMenuClick = (event) => {
    setAvatarMenuAnchor(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuAnchor(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar position="sticky" sx={{
      background: '#ffffff'
    }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src="https://phi-v3.vercel.app/assets/fractal%20logo.png" alt="Logo" style={{ height: 30 }} />
        </Typography>

        {/* Search Bar */}
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{ marginRight: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Avatar */}
        <IconButton onClick={handleAvatarMenuClick} color="inherit">
          <Avatar alt="Ahad" src="https://your-avatar-url.com/avatar.png" />
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}
