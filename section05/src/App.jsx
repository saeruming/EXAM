import './App.css';
import Register from './components/Register'
import HookExam from './components/HookExam';

/* 함수 첫글자는 무조건 대문자: 
리액트에서 내부적으로 소문자이면 컴포넌트라고 인정안해기 때문 */
/* 선언형 함수 */
// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }



function App() {
  return (
    <>
      <HookExam /> {/*자식 컴포넌트임 */}
    </>
  );
}

export default App;
