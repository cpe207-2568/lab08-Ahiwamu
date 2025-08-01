import { TaskInput } from "./TaskInput";

export function Task() {
  return (
    <div className="container text-center">
      <main className="flex-grow-1 p-4">
        {/* input ด้านบน*/}
        <div className="m-2 p-2">
          <form className="row">
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                placeholder="Insert a task here.."
              ></input>
            </div>
            <div className="col-2">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
        {/* Card รายการ */}
        <TaskInput id={1} title="Read a book" description="Vite + React + Bootstrap + TS" isDone = {true}></TaskInput>
        <TaskInput id={2} title="Write code" description="Finish project for class" isDone = {true}></TaskInput>
        <TaskInput id={3} title="Deploy app" description="Push project to GitHub Pages" isDone = {true}></TaskInput>
      </main>
    </div>
  );
}
