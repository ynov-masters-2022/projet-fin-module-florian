import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import InputError from "./inputError";

function InputEmail(props) {
	const { register } = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<input
				type="text"
				{...register(props.name, { required: true, pattern: /^\S+@\S+$/i })}
			/>
			<br></br>
			<InputError name={props.name} errorMsg={props.errorMsg} />
		</>
	);
}

export default InputEmail;

InputEmail.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
