import styles from "./Homepage.module.css";
function Homepage() {
  return (
    <div className={styles.homepage}>
      <nav>
        <h3>ABOUT</h3>
        <h1>coffeeBaker</h1>
        <h3>CONTACT US</h3>
      </nav>
    </div>
  );
}

export default Homepage;
