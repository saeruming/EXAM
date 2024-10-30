import { useContext } from "react";
import {
  DiaryStateContext,
  DiaryDispatchContext,
} from "../DiaryContext";

export const useDiaryState = () =>
  useContext(DiaryStateContext);
export const useDiaryDispatch = () =>
  useContext(DiaryDispatchContext);
