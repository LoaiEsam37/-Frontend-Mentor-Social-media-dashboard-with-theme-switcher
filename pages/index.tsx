import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
			<main className={styles.main}>
				<div className={styles.container}>
					<header className={styles.header}>
						<div>
							<h1>Social Media Dashboard</h1>
							<p>Total Followers: 23,004</p>
						</div>
						<div>
							<span>Dark Mode</span>
							<label className={styles.switch}>
								<input type="checkbox" />
								<span className={styles.slider}></span>
							</label>
						</div>
					</header>
					<section className={styles.followers}>
						<div className={styles.card}> @nathanf 1987 Followers 12 Today</div>
						<div className={styles.card}> @nathanf 1044 Followers 99 Today</div>
						<div className={styles.card}>
							@realnathanf 11k Followers 1099 Today
						</div>
						<div className={styles.card}>
							Nathan F. 8239 Subscribers 144 Today
						</div>
					</section>
					<h2>Overview - Today</h2>
					<section className={styles.overview}>
						<div>
							<div className={styles.card}> Page Views 87 3%</div>
							<div className={styles.card}> Likes 52 2%</div>
							<div className={styles.card}> Likes 5462 2257%</div>
							<div className={styles.card}> Profile Views 52k 1375%</div>
						</div>
						<div>
							<div className={styles.card}> Retweets 117 303%</div>
							<div className={styles.card}> Likes 507 553%</div>
							<div className={styles.card}> Likes 107 19%</div>
							<div className={styles.card}> Total Views 1407 12%</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
