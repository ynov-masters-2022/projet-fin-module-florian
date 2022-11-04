import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import InputError from "./inputError";

function InputCodePostal(props) {
	const { register } = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<input
				type="text"
				{...register(props.name, { required: true, minLength: 5, maxLength: 5 })}
			/>
			<br></br>
			<InputError name={props.name} errorMsg={props.errorMsg} />
		</>
	);
}

export default InputCodePostal;

InputCodePostal.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
