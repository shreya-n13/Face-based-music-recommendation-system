import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		
			
		<div className={styles.main_container}>
			
			<nav className={styles.navbar}>
				<div class="headss">
				<h1 align="center">Here is your Emotion Based Music Detector</h1>
				</div>
				

				<button className={styles.white_btn} onClick={handleLogout}>
					
					Logout
				</button>

			</nav>

			<div className ={styles.head}><h1 align="center"><i>Click here on the link below to detect your Mood and see the list of songs according to it!</i></h1>
		<b>	<a className={styles.doit} href="http://localhost:8501/" target="_blank">Emotion Dector</a></b></div>
		</div>
		
		
	);
};

export default Main;