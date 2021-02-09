import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

const Users = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { data, error, isLoading } = useSelector((state) => state.users);

  return (
    <>
      {isLoading && <div class="loading"></div>}
      {data ? (
        <ul>
          {data.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Users;
