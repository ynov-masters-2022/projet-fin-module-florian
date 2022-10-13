import "./scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<>
			<h1>Devis Créator</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nom du Devis : </label>
				<input type="text" {...register("Quotation name", { required: true })} />
				<br></br>
				<div className="panel panel_our_info">
					<div className="panel_title">
						<h2>
							<FontAwesomeIcon icon={solid("chevron-down")} /> Étape 1 : Vos
							Informations
						</h2>
						<label>Nom de votre entreprise : </label>
						<input type="text" {...register("Compagny name", { required: true })} />
						<br></br>
						<label>Adresse : </label>
						<input
							type="text"
							{...register("Compagny address", { required: true })}
						/>
						<br></br>
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
						<label>Ville : </label>
						<input
							type="text"
							{...register("Compagny city", {
								required: true,
							})}
						/>
						<br></br>
						<label>Email : </label>
						<input
							type="text"
							{...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
						/>
						<br></br>
						<label>Téléphone : </label>
						<input
							type="text"
							{...register("Phone", { required: true, minLength: 6, maxLength: 12 })}
						/>
						<br></br>
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
						<label>N° TVA intercommunautaire : </label>
						<input
							type="text"
							{...register("TVA number", {
								minLength: 13,
								maxLength: 13,
							})}
						/>
						<br></br>
						<label>Code NAF : </label>
						<input
							type="text"
							{...register("NAF code", {
								minLength: 5,
								maxLength: 5,
							})}
						/>
						<br></br>
					</div>
				</div>
				<input type="submit" />
			</form>
		</>
	);
}

export default App;
