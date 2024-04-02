import styles from "./loading.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <p>Loading...</p>
    </div>
  );
}
