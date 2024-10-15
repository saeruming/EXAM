import "./TodoItem.css";

// 젤 하위 컴포넌트
const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  console.log("TotoItem 컴포넌트 실행");

  const onChangeCheckbox = () => {
    onUpdate(id);
    console.log("체크박스: " + id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={onClickDelete}>
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
