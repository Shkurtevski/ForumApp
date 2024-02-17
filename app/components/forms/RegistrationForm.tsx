"use client";
import { NextPage } from "next";
import { useState } from "react";
import { RegistrationFormType } from "../../interfaces";
import { RiFileUploadLine } from "react-icons/ri";
import { FaCircleXmark } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const RegistrationForm: NextPage = () => {
  const [formData, setFormData] = useState<RegistrationFormType>({
    id: "",
    name: "",
    surname: "",
    email: "",
    number: "",
    image: "",
    socialMedia: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.email) {
      alert("please fill in all required fields");
    }

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const newUser = { ...formData, id: uuidv4() };
      const res = await fetch(process.env.USERS_API_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        throw new Error("Failet to submit form");
      }

      const data = await res.json();

      console.log("Form submitted successfully:", data);

      setFormData({
        id: "",
        name: "",
        surname: "",
        email: "",
        number: "",
        image: "",
        socialMedia: false,
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-content-group">
        <FaCircleXmark size={20} />
        <h3>sign up</h3>
        <p>register</p>
      </div>
      <div className="form-group-custom">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Katie"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Shaw"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-custom-one">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="katieshaw@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="number"
          id="number"
          placeholder="+44 7911 123456"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group-wrapper">
        <div className="form-group-checkboxes">
          <label htmlFor="instagram">Connect Instagram</label>
          <input type="checkbox" name="instagram" id="instagram" />
          <label htmlFor="youtube">Connect Youtube</label>
          <input type="checkbox" name="youtube" id="youtube" />
          <label htmlFor="pintrest">Connect Pintrest</label>
          <input type="checkbox" name="pintrest" id="pintrest" />
          <label htmlFor="google">Connect Google</label>
          <input type="checkbox" name="google" id="google" />
          <label htmlFor="twitter">Connect X</label>
          <input type="checkbox" name="twitter" id="twitter" />
        </div>
        <div className="form-group-file">
          <div className="form-group-file-wrapper">
            <input type="file" name="photo" id="photo" />
            <RiFileUploadLine size={40} />
            <label htmlFor="photo" className="photo-label">
              Profile Photo
            </label>
          </div>
        </div>
      </div>
      <div className="terms-group">
        <p>Terms and Conditions</p>
        <div className="terms-wrapper">
          <input type="checkbox" name="terms" id="terms" />
          <small>
            By clicking this button you are accepting our terms and conditions
          </small>
        </div>
      </div>
      <button type="submit" className="btn-primary btn-100">
        join
      </button>
    </form>
  );
};

export default RegistrationForm;
