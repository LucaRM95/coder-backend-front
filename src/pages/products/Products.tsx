import { Grid } from "@mui/material";
import Template from "../../shared/Template";
import styles from "../../assets/components/products/index.module.scss";
import ProductCard from "../../components/atoms/ProductCard";

const Products = () => {
  const products = [true, true, false, true, true, true, false, false];

  return (
    <Template>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        className={styles.container}
      >
        {products.map((e: any, index: number) => (
          <ProductCard key={index} element={e} index={index} styles={styles} /> 
        ))}
      </Grid>
      {/* <NavLink to="/login">logeate</NavLink> */}
    </Template>
  );
};

export default Products;
