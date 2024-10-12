const Button = ({ text, color = "black", children }) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return (
        <button
            onClick={onClickButton}
            //onMouseEnter={onClickButton}
            style={{ color: color }}>
            {text} - {color}
            {children}
        </button>
    );
};

//props 값이 전달되지 않았을때 기본값 설정
//콘솔창에 오류가 난다.
// Button.defaultProps = {
//     color: "black",
// };

export default Button;