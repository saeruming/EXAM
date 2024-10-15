import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); //객체의 id를 위해

  // 추가 기능
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    //setTodos를 무조건 호출해야 State변화 감지함
    setTodos([newTodo, ...todos]);
  };

  // 체크박스 ON/OFF 기능
  const onUpdate = (targetId) => {
    /*todos State 값들 중
    targetID와 일치하는 ID를 갖는 투두 아이템의 isDone 변경 */

    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운배열

    setTodos(
      todos.map((todo) =>
        todo.id === targetId
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  // 삭제 버튼 기능
  const onDelete = (targetId) => {
    /*인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 */
    setTodos(
      todos.filter((todo) => todo.id !== targetId)
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
