import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  // ✅ Login Function
  const login = (email, password) => {
    if (email === "test@example.com" && password === "password123") {
      localStorage.setItem("user", email);
      setUser(email);
    } else {
      alert("Invalid credentials");
    }
  };

  // ✅ Logout Function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
