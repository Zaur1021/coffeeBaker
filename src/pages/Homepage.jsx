import DeliveryBoxButton from "../components/DeliveryBoxButton";
import OrderBoxButton from "../components/OrderBoxButton";

import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <nav>
        <h1>coffeeBaker</h1>
        <hr color="black" />
        <hr />
      </nav>
      <section>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          magnam vitae repellat dignissimos perferendis. Sit, quam? Cumque
          soluta eveniet iure magni suscipit minus exercitationem unde earum,
          ipsam possimus, consequatur libero.
        </h2>
      </section>
      <div>
        <OrderBoxButton />
        <DeliveryBoxButton />
      </div>

      <footer>Copyright &copy; by Zaurbek Shapiev</footer>
    </div>
  );
}

export default Homepage;
