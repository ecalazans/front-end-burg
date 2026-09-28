import { useState } from "react";
import { Link } from "react-router";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);
  // console.log(document.cookie);

  const navigate = useNavigate();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setError("É preciso informar usuário e senha!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.status === 400) {
        setError("Usuário e senha são obrigatórios!");
        return;
      }

      if (response.status === 404) {
        setError("Usuário não encontrado!");
        return;
      }

      if (response.status === 401) {
        setError("Credenciais inválidas!");
        return;
      }

      if (response.status === 500) {
        setError("Erro no servidor!");
        return;
      }

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <div className="flex w-full justify-center">
          <Link className="mb-5" to="/">
            <img src="./logo.png" alt="" />
          </Link>
        </div>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>

        <Button type="submit" variant="default" title="Fazer login" />
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
