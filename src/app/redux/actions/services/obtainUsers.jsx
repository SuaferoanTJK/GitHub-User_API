import axios from "axios";

export const obtainUsers = async (name = "octocat") => {
  let user = {};
  const url = `https://api.github.com/users/${name}`;
  await axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        user = response.data;
      } else {
        console.log("Incorrect Status");
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return user;
};
