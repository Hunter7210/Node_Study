import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={"/register"}>Registrar-se</button>
      </main>
    </div>
  );
}
