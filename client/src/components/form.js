import { useState } from "react";
import { InputContainer } from "./inputContainer.js";

export function Form({ feilds, submitText, onSubmit}) {
    
    return (
        <form>
            {feilds.map((feild) => (
                <InputContainer ></InputContainer>
            ))}
        </form>
    )
}