import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const nav = useNavigate();

  //모든 일기 데이터 불러오기
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState();

  //수정하기 페이지에서 기존의 데이터 값들을 불러오기 위해
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(curDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
