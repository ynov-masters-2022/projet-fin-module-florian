import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import InputError from "./inputError";

function InputSiret(props) {
	const { register } = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<input
				type="text"
				{...register(props.name, { required: true, minLength: 14, maxLength: 14 })}
			/>
			<br></br>
			<InputError name={props.name} errorMsg={props.errorMsg} />
		</>
	);
}

export default InputSiret;

InputSiret.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
