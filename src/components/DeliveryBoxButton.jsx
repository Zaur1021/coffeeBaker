import { Link } from "react-router-dom";
import styles from "./DeliveryBoxButton.module.css";

function DeliveryBoxButton() {
  return (
    <div className={styles.div}>
      <h1>Delivery</h1>
      <Link to="delivery">
        <img
          src="../public/img/yu-hosoi-ViR3a0rx18w-unsplash.jpg"
          alt="Delivery"
        />
      </Link>
    </div>
  );
}

export default DeliveryBoxButton;
