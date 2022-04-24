/* import axios from "axios";

export const obtainUsers = async (name = "octocat") => {
  let user = {};
  let msg = false;
  const url = `https://api.github.com/users/${name}`;
  await axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        user = response.data;
      } else {
        msg=true;
        console.log("Incorrect Status");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return {user, msg};
};
 */
