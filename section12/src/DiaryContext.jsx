import {
  useReducer,
  useRef,
  createContext,
  useEffect,
  useState,
} from "react";

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [...state, action.data];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

const DiaryContext = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);
  const [isLoading, setIsLoading] = useState(true);

  const idRef = useRef(0);

  useEffect(() => {
    const storedDate = localStorage.getItem("diary");

    if (!storedDate) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedDate);
    //배열인지 아닌지
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);

      return;
    }

    //item의 id 중에 가장 큰 값+1으로 id 인덱스 지정
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    //data stata 초기값을 설정하는 순간, 로딩이 끝나면 됨
    dispatch({ type: "INIT", data: parsedData });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };
  if (isLoading) {
    return <div>데이터를 로딩중입니다 ...</div>;
  }
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{ onCreate, onUpdate, onDelete }}
      >
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};
export default DiaryContext;
