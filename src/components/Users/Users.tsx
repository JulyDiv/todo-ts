import { FC } from "react";
import { IUserProps } from "./types";
import { User, UsersBlock, UsersMail, UsersName } from "./Users.styled";

const Users: FC<IUserProps> = ({
  users,
  posts,
  setOpenPosts,
  setFiltered
}) => {

    const onClick = (id: any) => {
      let newPosts = [...posts].filter((item: any) => item.userId === id);
      setOpenPosts(true);
      setFiltered(newPosts);
    };
  return (
    <>
      {users.map(({ id, name, username, email }) => (
        <UsersBlock key={id} onClick={() => onClick(id)}>
          <User>{name}</User>
          <UsersName>{username}</UsersName>
          <UsersMail>{email}</UsersMail>
        </UsersBlock>
      ))}
    </>
  );
};

export default Users;
