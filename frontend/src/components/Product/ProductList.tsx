import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProductList = () => {
  const products = useSelector((state: RootState) => state.products.list);

  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [category, setCategory] = useState<string>("all");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePriceRangeChange = (event: SelectChangeEvent<string>) => {
    setPriceRange(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && product.price < 50) ||
      (priceRange === "medium" &&
        product.price >= 50 &&
        product.price <= 100) ||
      (priceRange === "high" && product.price > 100);
    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <Box sx={{ paddingX: 5, marginTop: 1 }}>
      <Box
        sx={{
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
          sx={{
            maxWidth: "300px",
            bgcolor: "background.default",
            "& .MuiInputBase-root": { color: "text.primary" },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.primary",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "& .MuiInputLabel-root": { color: "text.secondary" },
            "&.Mui-focused .MuiInputLabel-root": { color: "primary.main" },
          }}
        />
        <FormControl
          size="small"
          sx={{
            minWidth: 150,
            bgcolor: "background.default",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.primary",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "& .MuiSelect-icon": {
              color: "text.primary",
            },
          }}
        >
          <InputLabel>Price Range</InputLabel>
          <Select
            value={priceRange}
            onChange={handlePriceRangeChange}
            label="Price Range"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="low">Below $50</MenuItem>
            <MenuItem value="medium">$50 - $100</MenuItem>
            <MenuItem value="high">$101 - $200</MenuItem>
            <MenuItem value="premium">Above $200</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          size="small"
          sx={{
            minWidth: 150,
            bgcolor: "background.default",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.primary",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "& .MuiSelect-icon": {
              color: "text.primary",
            },
          }}
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="running">Running</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="basketball">Basketball</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
