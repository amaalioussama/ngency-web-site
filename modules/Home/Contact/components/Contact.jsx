"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactComponent() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    sector: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    if(formData.fullName === "" || formData.phoneNumber === "" || formData.email === "" || formData.sector === "") {
      setErrorMessage("Please fill all required fields");
    }
    else{

   
    emailjs
      .sendForm(
        "service_f6a6dxh",
        "template_pvx46fk",
        e.target,
        "r0ID3GwPm9TLt7KIG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully");
          setErrorMessage(null);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage(null);
          setErrorMessage(error);
        }
      );
    }
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      sector: "",
    });
  };
  return (
    <div className="border-red border-4 border-solid p-8">
      <h1 className="flex justify-center items-center font-bold text-3xl uppercase">
        Parlez nous de votre projet dès maintenant.
      </h1>
      <h1 className="flex justify-center items-center font-bold text-3xl uppercase">
        Consultation gratuite disponible.
      </h1>
      <p className="uppercase flex justify-center items-center text-xl p-4">
        Obtenez un devis à 12h en remplissant notre formulaire de contact rapide
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center pt-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#F3F3F3] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="NOM COMPLET"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#F3F3F3] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="NUMÉRO DE TÉLÉPHONE"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#F3F3F3] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="ADRESSE E-MAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-mediumpink w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
            <div className="bg-mediumBlue w-96 h-12 -translate-x-[3px] -translate-y-[3px]">
              <input
                className="bg-[#F3F3F3] w-96 h-12 -translate-x-[3px] -translate-y-[3px] pl-4"
                type="text"
                placeholder="SECTEUR D'ACTIVITÉ"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <p className="uppercase underline flex justify-center items-center pt-2">
          vous avez besoin d'un devis précis pour votre projet ?
        </p>

        <button className="p-10" type="submit">
          <div className="border-4 border-mediumBlue w-72 h-12 ">
            <div
              className="flex justify-center items-center bg-mediumBlue translate-x-1 -translate-y-3 w-72 h-12
              hover:translate-x-0 hover:-translate-y-0"
            >
              <h1 className="uppercase text-white flex justify-center items-center text-sm font-bold ">
                envoyer le formulaire
                <img className="pl-2" src="/images/arrow-under.png" alt="" />
              </h1>
            </div>
          </div>
        </button>
        {successMessage && (
       <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-96" role="alert">
       <p class="font-bold">Success</p>
       <p>{successMessage}</p>
     </div>
      )}

      {errorMessage && (
       <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-96" role="alert">
       <p class="font-bold">Warning</p>
       <p>{errorMessage}</p>
     </div>
      )}
      </form>

      
    </div>
  );
}
