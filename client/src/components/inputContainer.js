import { ColumnFlexBox } from "./flexbox.js";

export function InputContainer({ title, placeholder, inputType, children }) {
    const inputName = title.toLowerCase();
    return (
        <ColumnFlexBox className="input-container">
            {children}
            <div className="label">
                <label htmlFor={inputName}>{title}</label>
            </div>
            <div className="input medium-text">
                <input id={inputName} placeholder={placeholder} type={inputType} required></input>
            </div>
        </ColumnFlexBox>
    );
}
