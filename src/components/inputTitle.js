import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import InputError from "./inputError";

function InputTitle(props) {
	const { register } = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<select {...register(props.name, { required: true })}>
				<option value="M.">M.</option>
				<option value="Mme.">Mme.</option>
				<option value="">Autre</option>
			</select>
			<br></br>
			<InputError name={props.name} errorMsg={props.errorMsg} />
		</>
	);
}

export default InputTitle;

InputTitle.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
