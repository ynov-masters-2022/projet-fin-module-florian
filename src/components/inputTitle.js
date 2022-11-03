import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

function InputTitle(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<select {...register(props.name, { required: true })}>
				<option value="M.">M.</option>
				<option value="Mme.">Mme.</option>
				<option value="">Autre</option>
			</select>
			<br></br>
			{errors[props.name] && (
				<>
					<p className="error">
						<FontAwesomeIcon icon={solid("triangle-exclamation")} />
						{props.errorMsg}
					</p>
				</>
			)}
		</>
	);
}

export default InputTitle;

InputTitle.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
