import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";

const SignForm = () => {
  return (
    <div className="sign-form">
      <div className="create-ead-txt">Create an Account</div>
      <div className="greet-txt">
        Welcome to 2geda. To continue, please provide your details
      </div>

      <form action="">
        <InputField/>
        <div className="ins-bx-txt">We’ll verify the email provided to be sure it belongs to you</div>

        <div className="use-phone">Use Phone number instead</div>

        <InputField/>
        <InputField/>
        <div className="btn-continu"><ActionButton label={"Continue"}/></div>
        <div className="alr-ave">Already have an account? <span>Sign in</span></div>
      </form>
    </div>
  );
};

export default SignForm;
