"use client"

import { Typography, Box, Button, Stack, Container, Menu, MenuItem } from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import CardComponent from "./CardComponent";
import { venueData as initialVenueData } from '../../data';
import { useState } from "react";
import AddVenueModal from "./AddVenueModal";

function Venue() {
    const [sortAnchorEl, setSortAnchorEl] = useState(null);
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const [sortedData, setSortedData] = useState(initialVenueData);
    const [open,setOpen]=useState(false);

    const openSort = Boolean(sortAnchorEl);
    const openFilter = Boolean(filterAnchorEl);
   
    const handleSortClick = (event) => setSortAnchorEl(event.currentTarget);
    const handleSortClose = () => setSortAnchorEl(null);

    const handleFilterClick = (event) => setFilterAnchorEl(event.currentTarget);
    const handleFilterClose = () => setFilterAnchorEl(null);

    const handleSort = (order) => {
        const sorted = [...sortedData].sort((a, b) =>
            order === "asc"
                ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                : b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
        setSortedData(sorted);
        handleSortClose();
    };

    const handleFilter = (type) => {
        const filtered = initialVenueData.filter((item) => item.type === type);
        setSortedData(filtered);
        handleFilterClose();
    };

    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }


    return (
        <>
            <Container sx={{ py: 4 }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "center" }}
                    spacing={2}
                >
                    <Box>
                        <Typography variant="h3" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" }, fontWeight: 700 }}>
                            Manage Your Venues
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, opacity: 0.6, mt: 1,lineHeight:"1.5" }}>
                            Elevate your event planning experience with our comprehensive event management<br />
                            dashboard, delivering real-time insights to streamline operations.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={{ xs: 1, sm: 2 }} flexWrap="wrap" mt={{ xs: 2, md: 0 }}>
                        <Button
                            id="sort-button"
                            aria-controls={openSort ? 'sort-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openSort ? 'true' : undefined}
                            onClick={handleSortClick}
                            variant="text"
                            size="small"
                            sx={{ textTransform: "none", bgcolor: "white", color: "black" }}
                        >
                            <span style={{ fontSize: "1rem", fontWeight: "bold", opacity: 0.4 }}>Sort</span>
                            <SwapVertIcon sx={{ ml: 1, opacity: 0.4 }} />
                        </Button>

                        <Button
                            id="filter-button"
                            aria-controls={openFilter ? 'filter-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openFilter ? 'true' : undefined}
                            onClick={handleFilterClick}
                            variant="text"
                            size="small"
                            sx={{ textTransform: "none", bgcolor: "white", color: "black" }}
                        >
                            <span style={{ fontSize: "1rem", fontWeight: "bold", opacity: 0.4 }}>Filter</span>
                            <FilterListIcon sx={{ ml: 1, opacity: 0.4 }} />
                        </Button>

                        <Button variant="contained" size="small" sx={{ textTransform: "none", bgcolor: "red", color: "white" }} onClick={handleOpen}>
                            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Add Venue</span>
                            <AddIcon/>
                        </Button>
                    </Stack>
                </Stack>
            </Container>

            <Menu
                id="sort-menu"
                anchorEl={sortAnchorEl}
                open={openSort}
                onClose={handleSortClose}
                MenuListProps={{ 'aria-labelledby': 'sort-button' }}
            >
                <MenuItem onClick={() => handleSort("asc")}>A-Z</MenuItem>
                <MenuItem onClick={() => handleSort("desc")}>Z-A</MenuItem>
            </Menu>

            <Menu
                id="filter-menu"
                anchorEl={filterAnchorEl}
                open={openFilter}
                onClose={handleFilterClose}
                MenuListProps={{ 'aria-labelledby': 'filter-button' }}
            >
                <MenuItem onClick={() => handleFilter("Active")}>Active</MenuItem>
                <MenuItem onClick={() => handleFilter("Inactive")}>Inactive</MenuItem>
            </Menu>

            <CardComponent venueData={sortedData} />
            {
                open &&(
                    <AddVenueModal open={open} handleClose={handleClose}/>
                )
            }
        </>
    );
}

export default Venue;

