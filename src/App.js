import "./scss/App.scss";
import { useEffect, useState } from "react";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";

function App() {
	//Gestion Etapes
	const [stepCount, setStepCount] = useState(1);

	//Gestion data
	const [fullData, setFullData] = useState({});

	useEffect(() => console.log("fullData :", fullData), [fullData]);

	return (
		<>
			<StepOne
				setFullData={setFullData}
				fullData={fullData}
				stepCount={stepCount}
				setStepCount={setStepCount}
			/>

			<StepTwo
				setFullData={setFullData}
				fullData={fullData}
				stepCount={stepCount}
				setStepCount={setStepCount}
			/>
		</>
	);
}

export default App;
