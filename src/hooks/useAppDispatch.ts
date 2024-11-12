import { useDispatch } from "react-redux";

import { Dispatch } from "../redux";

export const useAppDispatch = useDispatch.withTypes<Dispatch>();