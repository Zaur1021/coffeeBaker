import DeliveryBoxButton from "../components/DeliveryBoxButton";
import OrderBoxButton from "../components/OrderBoxButton";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <nav>
        <h1>coffeeBaker</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam vitae repellat dignissimos perferendis. Sit, quam? Cumque
          soluta eveniet iure magni suscipit minus exercitationem unde earum,
          ipsam possimus, consequatur libero.
        </h2>
      </nav>

      <OrderBoxButton />
      <DeliveryBoxButton />

      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        similique at placeat perferendis! Fuga rerum modi, suscipit velit quod
        eius eveniet officia et iste facere dolorem labore minus commodi quis?
      </footer>
    </div>
  );
}

export default Homepage;
