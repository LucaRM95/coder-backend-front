import { Grid } from "@mui/material";

interface Props{
    element: boolean;
    index: number;
    styles: any;
}

const ProductCard = ({ element, index, styles }: Props) => {
  return (
    <Grid
      key={index}
      item
      xs={12}
      sm={6}
      md={4}
      lg={2.5}
      className={styles.container__item}
    >
      <div className={styles.container__item_image}>
        <img src="/assets/img/iphone12.webp" alt="iphone_image" />
      </div>
      <div className={styles.container__item_text}>
        {element ? (
          <div className={styles.container__item_boxsuccess}>Hay stock!</div>
        ) : (
          <div className={styles.container__item_boxerror}>
            Últimas unidades!
          </div>
        )}
        <h3>$1.099.999</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          repudiandae ab hic officia obcaecati deserunt ipsa iure possimus
          architecto odio tempore reprehenderit maxime fuga? Fugiat alias
          corrupti dolorem ex necessitatibus.
        </p>
      </div>
    </Grid>
  );
};

export default ProductCard;
