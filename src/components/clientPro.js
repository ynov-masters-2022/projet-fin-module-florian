import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

function ClientPro() {
	//Gestion du formulaire
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (dataPro) => {
		if (errors.isEmpty) {
			console.log(errors);
		} else {
			console.log(dataPro);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Infos Entreprise</h3>
				<label>Raison Sociale : </label>
				<input type="text" {...register("Social reason", { required: true })} />
				<br></br>
				{errors["Social reason"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire une raison sociale
						</p>
					</>
				)}
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
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire un numéro SIRET valide
						</p>
					</>
				)}
				<label>Adresse : </label>
				<input type="text" {...register("Address", { required: true })} />
				<br></br>
				{errors["Address"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire l'adresse de l'entreprise cliente
						</p>
					</>
				)}
				<label>Code Postal : </label>
				<input
					type="text"
					{...register("Postal code", {
						required: true,
						minLength: 5,
						maxLength: 5,
					})}
				/>
				<br></br>
				{errors["Postal code"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire un code postal correct
						</p>
					</>
				)}
				<label>Ville : </label>
				<input
					type="text"
					{...register("City", {
						required: true,
					})}
				/>
				<br></br>
				{errors["City"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire la ville
						</p>
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
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire un numéro de TVA valide
						</p>
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
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire un code NAF valide
						</p>{" "}
					</>
				)}
				<h3>Infos Contact</h3>
				<label>Civilité : </label>
				<select {...register("Civility", { required: true })}>
					<option value="M.">M.</option>
					<option value="Mme.">Mme.</option>
					<option value="">Autre</option>
				</select>
				<br></br>
				{errors["Civility"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez séléctionner une civilité
						</p>{" "}
					</>
				)}
				<label>Prénom : </label>
				<input type="text" {...register("First name", { required: true })} />
				<br></br>
				{errors["First name"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire le Prénom de votre contact
						</p>
					</>
				)}
				<label>Nom : </label>
				<input type="text" {...register("Last name", { required: true })} />
				<br></br>
				{errors["Last name"] && (
					<>
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire le Nom de votre contact
						</p>
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
						<p className="error">
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire une adresse mail valide
						</p>
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
							<FontAwesomeIcon icon={solid("triangle-exclamation")} />
							Vous devez remplire un numéro de téléphone valide
						</p>
					</>
				)}
				<input type="submit" value="Finaliser le devis >" />
			</form>
		</>
	);
}

export default ClientPro;
