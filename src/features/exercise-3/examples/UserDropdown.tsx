import { useState } from "react";
import { useGetUsers } from "../api/useGetUsers";
import SearchBar from "../components/SearchBar";
import { User } from "../model/User";

import { TProps } from "../utils/type";
import Wrapper from "./Wrapper";

const UserDropdown = (props: TProps) => {
  const { renderSelectedItem } = props;
  const { data: users } = useGetUsers();

  const [selectedUser, setSelectedUser] = useState<User>();

  const handleChangeUser = (value: User) => {
    setSelectedUser(value);
  };

  return (
    <Wrapper
      title="User list"
      renderSelectedItem={renderSelectedItem}
      selectedItem={selectedUser}
      itemSelectedType="user"
    >
      <SearchBar
        options={users}
        labelFilterKey="name"
        valueChange={handleChangeUser}
      />
    </Wrapper>
  );
};

export default UserDropdown;
