import axios from "axios";
axios.defaults.baseURL = "https://hiring-test-task.vercel.app/api/";

let refresh = false;
const user = JSON.parse(localStorage.getItem("user"));
let token;
if (user.token) {
  token = user.token;
}

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log(token);
      const response = await axios.post(
        "/refresh-token",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log("JSON", response);

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["token"]}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
