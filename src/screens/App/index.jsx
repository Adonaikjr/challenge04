import { Input } from "../../components/Input";
import { ContainerApp } from "./styled";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "../../components/Form";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      (!name, !email, !tell)
        ? toast.warn("Preencha todos os campos!", {
            theme: "light",
          })
        : navigate("/select-plan");
    }
    if ((name, email, tell)) {
      return toast.success(`Bem vindo ${name} `, { theme: "light" });
    }
  };

  return (
    <ContainerApp>
      <Section
        title="Personal info"
        text="Please provide your name, email, address, and phone number."
      />

      <Form>
        <label>Nome</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Stephen King"
          type="text"
        />
        <label>Email Address</label>
        <Input
          type="email"
          placeholder="e.g.stephenking@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>

        <Input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={tell}
          onChange={(e) => setTell(e.target.value)}
        />
        <Button title="Next Step" onClick={handleSubmit} />
      </Form>
    </ContainerApp>
  );
}
