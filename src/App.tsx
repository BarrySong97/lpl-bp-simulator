import { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";

const leftTeamdata = [
  {
    player: "breathe",
    position: "top",
    chapionImageUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp.ssl.qhimg.com%2Ft0126aa19893fa87c1d.jpg%3Fsize%3D800x500&refer=http%3A%2F%2Fp.ssl.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652428003&t=08429a4c45216c231f42db1dd22e73f0https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp.ssl.qhimg.com%2Ft0126aa19893fa87c1d.jpg%3Fsize%3D800x500&refer=http%3A%2F%2Fp.ssl.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652428003&t=08429a4c45216c231f42db1dd22e73f0",
  },
  {
    player: "weiwie",
    position: "jug",
    chapionImageUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.tt98.com%2Fd%2Ffile%2Ftt98%2F20191128151411431%2Fa0c87c9c34.jpg&refer=http%3A%2F%2Fimg.tt98.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652428567&t=da904c8c30cef4bc949d4d89ba93bbae",
  },
  { player: "fofo", position: "mid", chapionImageUrl: "" },
  { player: "doggo", position: "ad", chapionImageUrl: "" },
  { player: "lqs", position: "sub", chapionImageUrl: "" },
];

const rightTeamData = [
  { player: "the shy", position: "sub" },
  { player: "sofm", position: "sub" },
  { player: "angle", position: "sub" },
  { player: "huanfeng", position: "sub" },
  { player: "on", position: "sub" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div className={styles.leftTeam}>
        {leftTeamdata.map((v) => (
          <div
            style={{
              backgroundImage: `url(${v.chapionImageUrl})`,
              backgroundSize: "cover",
            }}
            key={v.player}
            className={styles.teamPickItem}
          >
            <div className={styles.chapionPickItem}></div>
            <div className={styles.teamPlayerInfo}>
              <div>{v.position}</div>
              <div>{v.player}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.mid}>
        <div className={styles.gameInfo}>
          <div className={styles.leftTeamInfo}>
            <div className={styles.leftTeamName}>FPX</div>
            <div className={styles.leftTeamScore}>2</div>
            <div className={styles.leftTeamBp}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>

          <div className={styles.matchTeamInfo}>
            <div className={styles.countdown}>32</div>
            <div>patch 1.2.3</div>
          </div>
          <div className={styles.rightTeamInfo}>
            <div className={styles.rightTeamName}>EDG</div>
            <div className={styles.rightTeamScore}>0</div>
            <div className={styles.rightTeamBp}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
        </div>

        <div>pool</div>
      </div>
      <div className={styles.rightTeam}>
        {rightTeamData.map((v) => (
          <div key={v.player} className={styles.teamPickItem}>
            <div>img</div>
            <div>
              <div>{v.position}</div>
              <div>{v.player}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
