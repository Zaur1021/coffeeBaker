import styles from "./BoxButton.module.css";

function BoxButton({ imgName, name }) {
  return (
    <div className={styles.div}>
      <h1>{name}</h1>
      <img src={`../public/img/${imgName}`} alt="" />
    </div>
  );
}

export default BoxButton;
