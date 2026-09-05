import { ColumnFlexBox } from "../components/flexbox.js";
import { Form } from "../components/form.js";

export default function LoginPage() {
  const formFeilds = [
    {
      name: "email-address",
      label: "Email address",
      placeholder: "developer@example.com",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "*********",
      type: "text",
      children: (
        <a className="secondary-link" href="/login">
          Forget Password?
        </a>
      ),
    },
  ];

  return (
    <div className="login-container login">
      <ColumnFlexBox className="main-container" space="2rem">
        <ColumnFlexBox className="title-container" space="">
          <div className="title large-text">DevPilot AI</div>
          <div className="sub-text">Sign in to your intelligent workspace.</div>
        </ColumnFlexBox>
        <div className="login-card">
          <Form
            feilds={formFeilds}
            formClass="form"
            submitText="Sign In"
            onSubmit={(event) => {
              console.log(event);
            }}
            checkboxText="Remember me for 30 days"
          ></Form>
        </div>
        <div className="footer-link">
          <span>Don't have an account? </span>
          <a href="/sign-up" className="secondary-link">
            Register now
          </a>
        </div>
      </ColumnFlexBox>
    </div>
  );
}
