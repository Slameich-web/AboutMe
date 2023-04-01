import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { postApi } from "./services/PostService";
import { fetchUsers } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, error, isLoading } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { data: posts } = postApi.useFetchAllPostsQuery(5);
  console.log(posts);

  console.log(users, error, isLoading);
  return <div className="App"></div>;
}

export default App;
