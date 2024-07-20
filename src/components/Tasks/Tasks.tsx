import { useState } from "react";
import styles from "./styles.module.scss";

export const Tasks: React.FC = () => {
    const [taskTitle, setTas] = useState("")
  return (
    <section className={styles.container}>
      <form>
        <div>
          <label htmlFor="task-title">Adicionar tarefas</label>
          <input type="text" id="task-title" placeholder="Título da Tarefa" />
        </div>
        <button>Adicionar Tarefas</button>
      </form>
    </section>
  );
};
