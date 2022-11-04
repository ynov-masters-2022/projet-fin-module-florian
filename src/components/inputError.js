import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

function InputError(props) {
	const {
		formState: { errors },
	} = useFormContext();

	return (
		<>
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

export default InputError;

InputError.propTypes = {
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
