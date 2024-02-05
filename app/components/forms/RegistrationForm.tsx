import { NextPage } from "next";
import { RegistrationFormType } from "../../interfaces";

const RegistrationForm: NextPage<RegistrationFormType> = ({
  name,
  surname,
  email,
  number,
  profilePhoto,
}) => {
  return (
    <form>
      <div className="form-group-custom">
        <input type="text" name="name" id="name" placeholder="Katie" />
        <input type="text" name="surname" id="surname" placeholder="Shaw" />
      </div>
      <div className="form-group-custom-one">
        <input type="email" name="email" id="email" />
        <input type="tel" name="tel" id="tel" />
      </div>
      <div className="form-group-wrapper">
        <div className="form-group">
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
        <div className="form-group">
          <input type="file" name="photo" id="photo" />
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
