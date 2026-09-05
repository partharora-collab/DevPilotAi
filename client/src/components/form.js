import { InputContainer } from "./inputContainer.js";
import { ColumnFlexBox, FlexBox } from "./flexbox.js";

export function Form({ feilds, formClass, submitText, checkboxText, onSubmit }) {

    return (
        <ColumnFlexBox className={formClass}>
            {feilds.map((feild) => (
                <InputContainer key={feild.name} title={feild.label} placeholder={feild.placeholder} inputType={feild.type}>
                    {feild.hasOwnProperty("children") ? feild.children : ""}
                </InputContainer>
            ))}
            <FlexBox>
                <input id="remember-check" className="remember-check" type="checkbox"></input>
                <label>{checkboxText}</label>
            </FlexBox>
            <div>
                <button className="submit-button" onClick={onSubmit}>{submitText}</button>
            </div>
        </ColumnFlexBox>
    );
}