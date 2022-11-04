import PropTypes from "prop-types";
import { useForm, FormProvider } from "react-hook-form";
import InputCodePostal from "./inputCodePostal";
import InputEmail from "./inputEmail";
import InputPhone from "./inputPhone";
import InputSiret from "./inputSiret";
import InputText from "./inputText";

function StepOne(props) {
	//Gestion du formulaire
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		handleFullData(data);
		handleStepCountInc();
	};

	const handleFullData = (data) => {
		props.setFullData({ ...props.fullData, ...data });
	};

	const handleStepCountInc = () => {
		props.setStepCount(props.stepCount + 1);
	};

	return (
		<div className={props.stepCount == 1 ? "show" : "hide"}>
			<FormProvider {...{ register, handleSubmit, formState: { errors } }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Étape 1 : Vos Informations</h2>
					<InputText
						name="Company Name"
						title="Nom de votre entreprise : "
						errorMsg="Vous devez remplire le nom de votre entreprise"
					/>
					<InputText
						name="Company Adresse"
						title="Adresse : "
						errorMsg="Vous devez remplire l'adresse de votre entreprise"
					/>
					<InputCodePostal
						name="Company Postal Code"
						title="Code Postal : "
						errorMsg="Vous devez remplire un code postal valide"
					/>
					<InputText
						name="Company City"
						title="Ville : "
						errorMsg="Vous devez remplire une ville"
					/>
					<InputEmail
						name="Company Email"
						title="Email : "
						errorMsg="Vous devez remplire un email valide"
					/>
					<InputPhone
						name="Company Phone"
						title="Téléphone : "
						errorMsg="Vous devez remplire un numéro de téléphone valide"
					/>
					<InputSiret
						name="Company SIRET"
						title="N° SIRET : "
						errorMsg="Vous devez remplire un numéro de SIRET valide"
					/>
					<InputText
						name="Company Website"
						title="Site Internet : "
						errorMsg="Vous devez remplire une site internet"
					/>
					<br></br>
					<input type="submit" value="Étape suivante >" />
				</form>
			</FormProvider>
		</div>
	);
}

export default StepOne;

StepOne.propTypes = {
	setStepCount: PropTypes.func,
	stepCount: PropTypes.number,
	setFullData: PropTypes.func,
	fullData: PropTypes.object,
};
