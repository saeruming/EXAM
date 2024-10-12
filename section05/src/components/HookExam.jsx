import useInput from "../hooks/useInput";
// 3가지 hook 관련 팁
// 1. 함수 컴포넌트 , 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 불가능
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있음(완전 중요함)


const HookExam = () => {
  const [input, onChange] = useInput();

  return (
    <div>
      <input 
      value={input}
      onChange={onChange} />
    </div>
  );
};

export default HookExam;