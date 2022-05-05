import React from "react";
import Form from "./src/components/Form/Index";
import Title from "./src/components/Title/Index";
import * as C from "./styles";

export default function App() {
	return (
		<>
			<C.Container>
				<Title />
				<Form />
			</C.Container>
		</>
	);
}
