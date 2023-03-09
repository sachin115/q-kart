export const useAuth = () => {
    const token = localStorage.getItem("token");
    return token && token.length > 0
}


const Constants = {
    BASE_URL : "https://mkart-frontend.herokuapp.com/api/v1"
}

export default Constants;