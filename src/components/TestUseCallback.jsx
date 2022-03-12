import { useEffect, useState, useCallback } from "react";

function CallbackHook(props) {
  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.userId}`
    );
    const newUser = await res.json();
    setUser(newUser);
  }, [props.userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]); // ✅ fetchUser stays the same between renders

  return <h1>{JSON.stringify(user)}</h1>;
}

export default CallbackHook;
