import { filterKeys } from "../helpers/filterKeys";
import { API_BASE_URL } from "../manifest";
import { User } from "../types/global";

export const getUsers = async (query: { name?: string }) => {
  const queryParams = filterKeys(query);

  /*
    in an ideal world with an endpoint that accepts query params, I'd call it passing the name query and it'd return me the filtered array.
    const res = await fetch(`${API_BASE_URL}/users?name=${queryParams?.name}`)

    I will simply filter out from my users endpoint using a Regex
  */

  const res = await fetch(`${API_BASE_URL}/users`)
  const data = await res.json()
  const users = data.data as User[]

  if (queryParams?.name) {
    const escapedInput = (queryParams?.name as string).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedInput, 'i');
    const returnedArr = users.filter((user) => regex.test(user.first_name))
    return returnedArr
  }
  
  return users;
};
