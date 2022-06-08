import styles from "./styles.module.scss";
import Head from "next/head";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post |Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março</time>
            <strong>dadada</strong>
            <p>dadaopso´daosdóa´da</p>
          </a>
          <a href="#">
            <time>12 de março</time>
            <strong>dadada</strong>
            <p>dadaopso´daosdóa´da</p>
          </a>
        </div>
      </main>
    </>
  );
}
