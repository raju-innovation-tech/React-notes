import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to My App</h1>
      <p>This is a simple hero section</p>
    </section>
  );
}

export default Hero;