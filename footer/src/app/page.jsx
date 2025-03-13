import Footer from "@/components/footer";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}
