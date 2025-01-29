import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";
import { useProducts } from "hooks/Product/useProducts";
export default function BestSellers() {
  const filterData = { filters: {} };
  const { data, isLoading } = useProducts(filterData);
  return (
    data && (
      <Box>
        <Grid container spacing={1}>
          {data?.data?.products?.slice(-6)?.map((item, idx) => (
            <Grid item xs="12" lg="2" md="3" sm="6" spacing={4}>
              <ProductCard
                productImage={item?.images[0]?.image_path}
                productName={item?.name}
                Price={item?.price}
                link={`/store/product/${item?.id}/${item.name}`}
                purchasable={item?.purchasable === "always"}
                offer={item?.compare_price}
                id={item?.id}
                category={item?.attributes[0]?.value}
                loading={isLoading}
                quantity={item?.quantity}
                
              />  
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}
