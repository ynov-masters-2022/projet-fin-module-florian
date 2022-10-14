import "./scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";
import { Switch } from "@mui/material";
import { useState } from "react";
import ClientPar from "./components/clientPar";
import ClientPro from "./components/clientPro";

function App() {
	//Switch Client Pro / Client Particulier
	const [clientPro, setClientPro] = useState(true);
	const handleClientPro = () => {
		setClientPro(!clientPro);
	};

	//Déroulé Step 1
	const [stepOne, setStepOne] = useState(true);
	const handleStepOne = () => {
		setStepOne(!stepOne);
	};

	//Déroulé Step 2
	const [stepTwo, setStepTwo] = useState(false);
	const handleStepTwo = () => {
		setStepTwo(!stepTwo);
	};

	//Gestion du formulaire
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		if (errors.isEmpty) {
			console.log(errors);
		} else {
			console.log(data);
			handleStepOne();
			handleStepTwo();
		}
	};

	return (
		<>
			<h1>Devis Créator</h1>
			<div className="panel panel_our_info">
				<div className="panel_title" onClick={handleStepOne}>
					<h2>
						<FontAwesomeIcon icon={solid("chevron-down")} /> Étape 1 : Vos
						Informations
					</h2>
				</div>
				{stepOne ? (
					<div className="panel_content">
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>Nom de votre entreprise : </label>
							<input type="text" {...register("Compagny name", { required: true })} />
							<br></br>
							{errors["Compagny name"] && (
								<>
									<p className="error">Vous devez remplire le nom de votre entreprise</p>
								</>
							)}
							<label>Adresse : </label>
							<input
								type="text"
								{...register("Compagny address", { required: true })}
							/>
							<br></br>
							{errors["Compagny address"] && (
								<>
									<p className="error">Vous devez remplire l'adresse votre entreprise</p>
								</>
							)}
							<label>Code Postal : </label>
							<input
								type="text"
								{...register("Compagny postal code", {
									required: true,
									minLength: 5,
									maxLength: 5,
								})}
							/>
							<br></br>
							{errors["Compagny postal code"] && (
								<>
									<p className="error">Vous devez remplire un code postal correct</p>
								</>
							)}
							<label>Ville : </label>
							<input
								type="text"
								{...register("Compagny city", {
									required: true,
								})}
							/>
							<br></br>
							{errors["Compagny city"] && (
								<>
									<p className="error">Vous devez remplire la ville</p>
								</>
							)}
							<label>Email : </label>
							<input
								type="text"
								{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
							/>
							<br></br>
							{errors["Email"] && (
								<>
									<p className="error">Vous devez remplire une adresse mail valide</p>
								</>
							)}
							<label>Téléphone : </label>
							<input
								type="text"
								{...register("Phone", { required: true, minLength: 6, maxLength: 12 })}
							/>
							<br></br>
							{errors["Phone"] && (
								<>
									<p className="error">
										Vous devez remplire un numéro de téléphone valide
									</p>
								</>
							)}
							<label>Site Internet : </label>
							<input type="text" {...register("Website")} />
							<br></br>
							<label>N° SIRET : </label>
							<input
								type="text"
								{...register("SIRET number", {
									required: true,
									minLength: 14,
									maxLength: 14,
								})}
							/>
							<br></br>
							{errors["SIRET number"] && (
								<>
									<p className="error">Vous devez remplire un numéro SIRET valide</p>
								</>
							)}
							<label>N° TVA intercommunautaire : </label>
							<input
								type="text"
								{...register("TVA number", {
									minLength: 13,
									maxLength: 13,
								})}
							/>
							<br></br>
							{errors["TVA number"] && (
								<>
									<p className="error">Vous devez remplire un numéro de TVA valide</p>
								</>
							)}
							<label>Code NAF : </label>
							<input
								type="text"
								{...register("NAF code", {
									minLength: 5,
									maxLength: 5,
								})}
							/>
							<br></br>
							{errors["NAF code"] && (
								<>
									<p className="error">Vous devez remplire un code NAF valide</p>-{" "}
								</>
							)}
							<input type="submit" value="Étape suivante >" />
						</form>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="panel panel_client_info">
				<div className="panel_title" onClick={handleStepTwo}>
					<h2>
						<FontAwesomeIcon icon={solid("chevron-down")} /> Étape 2 : Informations du
						client
					</h2>
				</div>
				{stepTwo ? (
					<div className="panel_content">
						<label>Client Particulier</label>
						<Switch onChange={handleClientPro} defaultChecked />
						<label>Client Professionnel</label>
						{clientPro ? <ClientPro /> : <ClientPar />}
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default App;
