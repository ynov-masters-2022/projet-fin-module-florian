import PropTypes from "prop-types";
import { useForm, FormProvider } from "react-hook-form";
import { Switch } from "@mui/material";
import ClientPar from "./clientPar";
import ClientPro from "./clientPro";
import { useState } from "react";

function StepTwo(props) {
	//Switch Client Pro / Client Particulier
	const [clientPro, setClientPro] = useState(true);
	const handleClientPro = () => {
		setClientPro(!clientPro);
	};

	//Gestion du formulaire
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		handleFullData(data);
		//handleStepCountInc();
	};

	const handleFullData = (data) => {
		props.setFullData({ ...props.fullData, ...data });
	};

	// const handleStepCountInc = () => {
	// 	props.setStepCount(props.stepCount + 1);
	// };
	const handleStepCountDec = () => {
		props.setStepCount(props.stepCount - 1);
	};

	return (
		<div className={props.stepCount == 2 ? "show" : "hide"}>
			<FormProvider {...{ register, handleSubmit, formState: { errors } }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Étape 2 : Informations Clients</h2>
					<label>Client Particulier</label>
					<Switch onChange={handleClientPro} defaultChecked />
					<label>Client Professionnel</label>
					{clientPro ? <ClientPro /> : <ClientPar />}
					<br></br>
					<input
						type="button"
						onClick={handleStepCountDec}
						value="< Étape précédente"
					/>
					<input type="submit" value="Finaliser le Devis >" />
				</form>
			</FormProvider>
		</div>
	);
}

export default StepTwo;

StepTwo.propTypes = {
	setStepCount: PropTypes.func,
	stepCount: PropTypes.number,
	setFullData: PropTypes.func,
	fullData: PropTypes.object,
};
