import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Social media dashboard with theme switcher
        </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Made by Loai Esam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className={`${styles.main} ${theme ? styles.light : styles.dark}`}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
            </div>
            <div>
              <p>Dark Mode</p>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  onChange={(e) => setTheme(e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </header>
          <section className={styles.followers}>
            <div className={styles.card}>
              <span>
                {" "}
                <Image
                  src={"/icon-facebook.svg"}
                  width={20}
                  height={20}
                  alt={"facebook icon"}
                />{" "}
                @nathanf
              </span>
              <span>1987</span>
              <span>Followers</span>
              <span>12 Today</span>
            </div>
            <div className={styles.card}>
              <span>
                <Image
                  src={"/icon-twitter.svg"}
                  width={20}
                  height={20}
                  alt={"twitter icon"}
                />
                @nathanf
              </span>
              <span>1044</span>
              <span>Followers</span>
              <span>99 Today</span>
            </div>
            <div className={styles.card}>
              <span>
                <Image
                  src={"/icon-instagram.svg"}
                  width={20}
                  height={20}
                  alt={"instagram icon"}
                />
                @realnathanf
              </span>
              <span>11k</span>
              <span>Followers</span>
              <span>1099 Today</span>
            </div>
            <div className={styles.card}>
              <span>
                <Image
                  src={"/icon-youtube.svg"}
                  width={20}
                  height={20}
                  alt={"youtube icon"}
                />
                @Nathan F.
              </span>
              <span>8239</span>
              <span>Subscribers</span>
              <span>144 Today</span>
            </div>
          </section>
          <h2>Overview - Today</h2>
          <section className={styles.overview}>
            <div className={styles.row}>
              <div className={styles.card}>
                <div>
                  <span>Page Views</span>
                  <span>87</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-facebook.svg"}
                      width={20}
                      height={20}
                      alt="facebook icon"
                    />
                  </span>
                  <span>3%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Likes </span>
                  <span>52</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-facebook.svg"}
                      width={20}
                      height={20}
                      alt="facebook icon"
                    />
                  </span>
                  <span>2%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Likes </span>
                  <span>5462</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-instagram.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>2257%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Profile Views</span>
                  <span>52k</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-instagram.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>1375%</span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.card}>
                <div>
                  <span>Retweets</span>
                  <span>117</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-twitter.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>303%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Likes</span>
                  <span>507</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-twitter.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>553%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Likes</span>
                  <span>107</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-youtube.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>19%</span>
                </div>
              </div>
              <div className={styles.card}>
                <div>
                  <span>Total Views</span>
                  <span>1407</span>
                </div>
                <div>
                  <span>
                    <Image
                      src={"/icon-youtube.svg"}
                      width={20}
                      height={20}
                      alt="instagram icon"
                    />
                  </span>
                  <span>12%</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
