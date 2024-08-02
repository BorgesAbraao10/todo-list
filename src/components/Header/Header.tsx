import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { task } = useContext(TasksContext);

  const totalTasks = task.length;
  const totalPending = task.reduce((total, task) => {
    if (!task.done) return total + 1;

    return total;
  }, 0);
  const totalDone = totalTasks - totalPending;

  console.log("Header:", task);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vindo, Abraão Borges</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas Concluidas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
