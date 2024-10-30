import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../DiaryContext";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const editPrams = useParams();

  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(
    DiaryDispatchContext
  );

  const curDiaryItem = useDiary(editPrams.id);
  usePageTitle(`${editPrams.id}번 일기 수정`);

  //삭제하기 버튼 눌렀을때 팝업
  const onClickDelete = () => {
    if (
      window.confirm(
        "일기를 정말 삭제할가요? 다시 복구되지 않아요!"
      )
    ) {
      //일기 삭제 로직
      onDelete(editPrams.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        editPrams.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      console.log(editPrams.id);
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => nav(-1)}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
