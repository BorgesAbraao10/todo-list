import { Stats } from "fs";
import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vindo, Abraão Borges</span>
        </div>

        <div>
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
    </header>
  );
};
