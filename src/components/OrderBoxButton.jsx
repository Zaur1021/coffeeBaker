import { Link } from "react-router-dom";
import styles from "./OrderBoxButton.module.css";

function OrderBoxButton() {
  return (
    <div className={styles.div}>
      <h1>Order</h1>
      <Link to="order">
        <img
          src="../public/img/bhuwan-bansal-Imq-jC1zPMM-unsplash.jpg"
          alt="Ordering"
        />
      </Link>
    </div>
  );
}

export default OrderBoxButton;
