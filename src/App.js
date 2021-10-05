import "./App.css";
import {
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

function App() {
  let variants = ["contained", "text", "outlined"];
  let size = ["small", "medium", "large"];
  let colors = ["primary", "secondary", "warning", "error", "info", "inherit"];
  const [variant, setVariant] = useState(variants[0]);
  const [disable, setDisable] = useState(false);
  const [selectedColor, setColor] = useState(colors[0]);
  const [selectedSize, setSize] = useState(size[0]);
  const [iconPosition, setIconPos] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "variant") {
      setVariant(event.target.value);
    } else if (event.target.name === "disable") {
      setDisable(event.target.checked);
    } else if (event.target.name === "color") {
      setColor(event.target.value);
    } else if (event.target.name === "size") {
      setSize(event.target.value);
    } else if (event.target.name === "position") {
      setIconPos(event.target.value);
    }
  };

  const GroceryIcon = () => {
    return (
      <AddShoppingCartIcon
        color="inherit"
        fontSize="inherit"
      ></AddShoppingCartIcon>
    );
  };
  return (
    <div className="App">
      <Grid class="filter-area">
        <Grid
          container
          spacing={2}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Grid item xs={2}>
            <InputLabel id="chk-disable">Disabled</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <InputLabel id="variant-label">Choose Variants</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <InputLabel id="color-label">Choose Color</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <InputLabel id="size-label">Choose Size</InputLabel>
          </Grid>
          <Grid item xs={2}>
            <InputLabel id="size-label">Icon Position</InputLabel>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Grid item xs={2}>
            <Checkbox
              name="disable"
              checked={disable}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Select
              labelId="variant-label"
              value={variant}
              name="variant"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {variants.map((v, indx) => {
                return (
                  <MenuItem value={v} key={"v" + indx}>
                    {v}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Select
              labelId="color-label"
              value={selectedColor}
              name="color"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {colors.map((v, indx) => {
                return (
                  <MenuItem value={v} key={"c" + indx}>
                    {v}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Select
              labelId="size-label"
              value={selectedSize}
              name="size"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {size.map((v, indx) => {
                return (
                  <MenuItem value={v} key={"s" + indx}>
                    {v}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={2}>
            <RadioGroup
              name="position"
              value={iconPosition}
              onChange={handleChange}
            >
              <FormControlLabel
                value="start"
                control={<Radio />}
                label="start-icon"
              />
              <FormControlLabel value="" control={<Radio />} label="No Icon" />
              <FormControlLabel
                value="end"
                control={<Radio />}
                label="end-icon"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </Grid>
      <Button
        disabled={disable}
        color="primary"
        variant={variant}
        color={selectedColor}
        size={selectedSize}
        startIcon={iconPosition === "start" && <GroceryIcon />}
        endIcon={iconPosition === "end" && <GroceryIcon />}
        style={{ margin: "44px" }}
      >
        Default
      </Button>
    </div>
  );
}

export default App;
