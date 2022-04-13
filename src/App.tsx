import { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div className={styles.leftTeam}>
        <div className={styles.teamPickItem}>first</div>
        <div className={styles.teamPickItem}>second</div>
        <div className={styles.teamPickItem}>third</div>
        <div className={styles.teamPickItem}>fourth</div>
        <div className={styles.teamPickItem}>fifth</div>
      </div>
      <div className={styles.mid}>
        <div className={styles.gameInfo}>
          <div className={styles.leftTeamInfo}>
            <div className={styles.leftTeamName}>FPX</div>
            <div className={styles.leftTeamScore}>2</div>
          </div>

          <div className={styles.matchTeamInfo}>
            <div className={styles.countdown}>32</div>
            <div>patch 1.2.3</div>
          </div>
          <div className={styles.rightTeamInfo}>
            <div className={styles.rightTeamName}>EDG</div>
            <div className={styles.rightTeamScore}>0</div>
          </div>
        </div>

        <div className={styles}>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>

          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
        <div>pool</div>
      </div>
      <div className={styles.rightTeam}>
        <div className={styles.teamPickItem}>first</div>
        <div className={styles.teamPickItem}>second</div>
        <div className={styles.teamPickItem}>third</div>
        <div className={styles.teamPickItem}>fourth</div>
        <div className={styles.teamPickItem}>fifth</div>
      </div>
    </div>
  );
}

export default App;
