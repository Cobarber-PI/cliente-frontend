import api from "@/plugin/axios";

class AuthService {
    async login(email, password) {
        try {
            const response = await api.post("/token/", { email, password });
            return response.data;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    }

    async register(userData) {
        try {
            const response = await api.post("/usuarios/", userData);
            return response.data;
        } catch (error) {
            console.log("Register error:", error);
            throw error;
        }
    }
}

export default new AuthService();
