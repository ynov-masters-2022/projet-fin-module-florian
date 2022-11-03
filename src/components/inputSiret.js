import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

function InputSiret(props) {
	const {
		register,
		formState: { errors },
	} = useFormContext(); // retrieve all hook methods

	return (
		<>
			<label>{props.title}</label>
			<input
				type="text"
				{...register(props.name, { required: true, minLength: 14, maxLength: 14 })}
			/>
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

export default InputSiret;

InputSiret.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
