import InputCodePostal from "./inputCodePostal";
import InputEmail from "./inputEmail";
import InputPhone from "./inputPhone";
import InputText from "./inputText";
import InputTitle from "./inputTitle";

function ClientPar() {
	return (
		<>
			<h3>Infos Client</h3>
			<InputTitle
				name="Client Par Title"
				title="Civilité : "
				errorMsg="Vous devez remplire la civilité de votre client"
			/>
			<InputText
				name="Client Par First Name"
				title="Prénom : "
				errorMsg="Vous devez remplire le prénom de votre client"
			/>
			<InputText
				name="Client Par Last Name"
				title="Nom : "
				errorMsg="Vous devez remplire le nom de votre client"
			/>
			<InputEmail
				name="Client Par Email"
				title="Email : "
				errorMsg="Vous devez remplire l'email de votre client"
			/>
			<InputPhone
				name="Client Par Phone"
				title="Téléphone : "
				errorMsg="Vous devez remplire le téléphone de votre client"
			/>
			<InputText
				name="Client Par Adresse"
				title="Adresse : "
				errorMsg="Vous devez remplire l'adresse de votre client"
			/>
			<InputCodePostal
				name="Client Par Postal Code"
				title="Code Postal : "
				errorMsg="Vous devez remplire un code postal valide"
			/>
			<InputText
				name="Client Par City"
				title="Ville : "
				errorMsg="Vous devez remplire une ville"
			/>
		</>
	);
}

export default ClientPar;
