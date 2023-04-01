import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_okornc9",
        "template_c25yuae",
        form.current,
        "UnRhwKV7_QkI4hiAt"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("enviado con exito");
          setName("");
          setEmail("");
          setConsulta("");
          alert(
            "Tu consulta fue enviada con éxito! Gracias por comunicarte, en breve obtendrás respuesta."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      className="text-text-blue flex flex-col items-center scroll-m-20 lg:flex-row lg:justify-center "
      id="contacto"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white pt-4 pb-10 px-6 sm:max-w-md w-full lg:w-1/2 "
      >
        <h2 className="text-3xl font-bold py-8">CONTACTO</h2>
        <label htmlFor="user_name">Nombre:</label>
        <input
          required
          className="focus:outline-none bg-[#D9D9D9] w-full pb-2 my-3 pt-1 pl-2 placeholder-gray-500"
          type="text"
          name="user_name"
          placeholder="Nombre y Apellido"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="user_email">Email:</label>
        <input
          required
          type="email"
          name="user_email"
          placeholder="ejemplo@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="focus:outline-none w-full pb-2 pt-1 pl-2 my-3 bg-[#D9D9D9] placeholder-gray-500"
        />
        <label htmlFor="message" className="">
          Consulta:
        </label>
        <textarea
          required
          name="message"
          onChange={(e) => setConsulta(e.target.value)}
          value={consulta}
          placeholder="Escriba aqui su consulta"
          className="focus:outline-none border  w-full pb-16 px-3 pt-2 bg-[#D9D9D9] placeholder-gray-500 my-3"
        />
        <button
          type="submit"
          value="send"
          className="p-3 w-full sm:w-56  bg-dark-blue  hover:bg-text-blue active:py-4 text-white text-lg font-semibold "
        >
          Enviar consulta
        </button>
      </form>
    </section>
  );
};

export default Formulario;
