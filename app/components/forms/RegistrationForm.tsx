import { NextPage } from "next";
import { RegistrationFormType } from "../../interfaces";
import { RiFileUploadLine } from "react-icons/ri";
import { FaCircleXmark } from "react-icons/fa6";

const RegistrationForm: NextPage = () => {
  return (
    <form>
      <div className="text-content-group">
        <FaCircleXmark size={20} />
        <h3>sign up</h3>
        <p>register</p>
      </div>
      <div className="form-group-custom">
        <input type="text" name="name" id="name" placeholder="Katie" />
        <input type="text" name="surname" id="surname" placeholder="Shaw" />
      </div>
      <div className="form-group-custom-one">
        <input type="email" name="email" id="email" placeholder="katieshaw@gmail.com"/>
        <input type="tel" name="tel" id="tel" placeholder="+44 7911 123456"/>
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
      <button className="btn-primary btn-100">join</button>
    </form>
  );
};

export default RegistrationForm;
