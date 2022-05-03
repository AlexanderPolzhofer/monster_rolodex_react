import { ChangeEventHandler } from "react";
import "./SearchBox.styles.css";

type SearchBoxProps = {
    placeholder: string;
    handleChange: ChangeEventHandler<HTMLInputElement>
};

export const SearchBox = (
    { placeholder,
        handleChange }
        : SearchBoxProps) =>
(<div>
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
</div>);
