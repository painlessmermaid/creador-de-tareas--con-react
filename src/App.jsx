import TaskList from "./components/TaskList";
import TaskFrom from "./components/TaskFrom";

function App() {
  return (
    < div className="bg-zinc-900 h-screen">
      <div className="container mx-auto  p-10 ">
      <TaskFrom/>
      <TaskList />
      </div>
    </div>
  );
}

export default App;
