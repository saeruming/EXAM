import { useEffect } from "react";

const usePageTitle = (title) => {
  //컴포넌트가 마운트 되면 호출,
  useEffect(() => {
    const $title =
      document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, []);
};
export default usePageTitle;
