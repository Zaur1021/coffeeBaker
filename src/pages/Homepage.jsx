import styles from "./Homepage.module.css";
function Homepage() {
  return (
    <div className={styles.homepage}>
      <nav>
        <h3>ABOUT</h3>
        <h1>coffeeBaker</h1>
        <h3>CONTACT US</h3>
      </nav>
      <main>
        <h2>
          <strong>You</strong> enjoy our coffee and bakery
        </h2>
        <h2>coffeeBaker keeps track of the quality and low prices</h2>
        <div>
          <button>Order</button>
          <button>Delivery</button>
        </div>
      </main>
      <footer>Copyright &copy; by coffeeBaker CO</footer>
    </div>
  );
}

export default Homepage;
