import "./WorkerBtn.css"
import { useRoute } from "../context/RouteContext";

function WorkerBtn() {

    const { activeWorkerId, setActiveWorkerId } = useRoute();

    return (
        <div className="worker-btn-container">
            <button className={activeWorkerId === "w1" ? "worker-btn active" : "worker-btn"} onClick={() => setActiveWorkerId("w1") }>Worker 1</button>
            <button className={activeWorkerId === "w2" ? "worker-btn active" : "worker-btn"} onClick={() => setActiveWorkerId("w2") }>Worker 2</button>
        </div>
    )
}

export default WorkerBtn;



/* TO CONSIDER REFACTORING:::

function WorkerBtn({ id, label }) {
  const { activeWorkerId, setActiveWorkerId } = useRoute();

  return (
    <button
      className={activeWorkerId === id ? "worker-btn active" : "worker-btn"}
      onClick={() => setActiveWorkerId(id)}
    >
      {label}
    </button>
  );
} */