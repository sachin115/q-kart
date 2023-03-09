


const token = localStorage.getItem("token")

const axiosIntance = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

export default axiosIntance;