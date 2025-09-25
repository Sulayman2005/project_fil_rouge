import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.scss";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succed, setSucced] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des identifiants
    if (email === "canteausulayman@mail.fr" && password === "Sulayman49") {
      // Sauvegarde d'un token fake
      localStorage.setItem("isAuthenticated", "true");
      setSucced("Utilisateur connecté")
      navigate("/PortfolioPage"); // redirige vers ton portfolio
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-wrapper">
        <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label>Email</label>
            </div>
            <div className="input-group">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label>Password</label>
            </div>
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
            {succed && <p style={{ color: "green", fontsize: "14px" }}>{succed}</p>}
            <button type="submit">Sign in</button>
        </form>
        </div>
    </div>
  );
}

export default LoginPage;
