import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart, RemoveFromFav } from "../state/action/productAction";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
const Wishlist = () => {
  const favItems = useSelector((state) => state.HandleCart.FavArray);
  const totalItems = favItems.length;
  const dispatch = useDispatch();
  const removeItem = (event) => {
    event.preventDefault();
    dispatch(RemoveFromFav(event.currentTarget.id));
  };
  const renderFavItem = favItems.map((curr, index) => {
    const { id, title, image, price } = curr;
    return (
      <Card
        component={NavLink}
        to={`/shoppingcart/cart/productdetail/${id}`}
        key={index}
        sx={{
          display: "flex",
          textDecoration:"none",
          width: "100%",
          padding: "8px",
          boxShadow: "0 0",
          borderBottom: "1px solid #bbbb",
          borderRadius: "0",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            width: { xs: "50px", sm: "80px" },
            minHeight: "80px",
            display: "inline-block",
            objectFit: "contain",
          }}
        />
        <Box sx={{ padding: "17px", width: { xs: "calc(100% - 50px)" } }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: { xs: "12px", sm: "1rem" } }}
          >
            {title}
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "green" }}>
            {" "}
            ${price}
          </Typography>
          {/* <Typography  sx={{fontWeight:"bold"}}>{category}</Typography> */}
          <IconButton id={id} onClick={removeItem}>
            {<DeleteIcon />}
          </IconButton>
        </Box>
      </Card>
    );
  });
  return (
    <>
      {totalItems === 0 ? (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "12px",
              fontSize: "32px",
              color: "#bbbb",
              fontWeight: "550",
            }}
          >
            Nothing here!!!!
          </p>
        </Container>
      ) : (
        <Box sx={{}}>
          <Box sx={{ width: "90%", margin: "auto" }}>{renderFavItem}</Box>
        </Box>
      )}
    </>
  );
};

export default Wishlist;
