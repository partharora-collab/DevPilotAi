import React from "react";

import { InputContainer } from "../components/inputContainer.js";
import { ColumnFlexBox, FlexBox } from "../components/flexbox.js";

export default function LoginPage() {
    return (
        <div className="login-container login">
            <ColumnFlexBox className="main-container" space="2rem">
                <ColumnFlexBox className="title-container" space="">
                    <div className="title large-text"> 
                        DevPilot AI
                    </div>
                    <div className="sub-text">
                        Sign in to your intelligent workspace.
                    </div>
                </ColumnFlexBox>
                <div className="login-card">
                    <ColumnFlexBox className="form">
                        <InputContainer title={"Email address"} placeholder={"developer@example.com"} inputType={"email"} />
                        <InputContainer title={"Password"} placeholder={"*********"} inputType={"text"} >
                            <a className="secondary-link" href="/login">Forget Password?</a>
                        </InputContainer>
                        <FlexBox className="checkbox-container">
                            <input id="remember-check" className="remember-check" type="checkbox"></input>
                            <label htmlFor="remember-check">Remember me for 30 days</label>
                        </FlexBox>
                        <div>
                            <button className="submit-button">Sign In</button>
                        </div>
                    </ColumnFlexBox>
                </div>
                <div className="footer-link">
                    <span>Don't have an account? </span><a href="/" className="secondary-link">Register now</a>
                </div>
            </ColumnFlexBox>
        </div>
    )
}