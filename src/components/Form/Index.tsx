import React, { useState } from "react";
import { Vibration, Keyboard, Text } from "react-native";
import ResultImc from "../ResultImc/Index";
import * as C from "../../../styles";
import uuid from "react-native-uuid";

export default function Form() {
	const [height, setHeight] = useState<string>("");
	const [weight, setWeight] = useState<string>("");
	const [messageImc, setMessageImc] = useState<string>("");
	const [imc, setImc] = useState<number | any>(null);
	const [textButton, setTextButton] = useState<string>("CALCULAR");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [imcList, setImcList] = useState<Array<number | any>>([]);

	const imcCalculator = () => {
		let numericWeight = parseFloat(weight.replace(",", "."));
		let numericHeight = parseFloat(height.replace(",", "."));
		let totalImc = (numericWeight / (numericHeight * numericHeight)).toFixed(2);
		setImcList((arr) => [...arr, { id: uuid.v4(), imc: totalImc }]);
		setImc(totalImc);
	};

	const verificationImc = () => {
		if (imc == null) {
			Vibration.vibrate();
			setErrorMessage("Campo obrigatório*");
		}
	};

	const validationImc = () => {
		if (weight != "" && height != "") {
			imcCalculator();
			setHeight("");
			setWeight("");
			setMessageImc("Seu IMC é igual: ");
			setTextButton("CALCULAR NOVAMENTE!");
			setErrorMessage("");
		} else {
			verificationImc();
			setImc(null);
			setTextButton("CALCULAR");
			setMessageImc("Preencha o peso e altura!");
		}
	};

	return (
		<C.FormView>
			{imc == null ? (
				<C.Form onPress={Keyboard.dismiss}>
					<C.FormLabel>Altura</C.FormLabel>
					<C.ErrorMessage>{errorMessage}</C.ErrorMessage>
					<C.Input
						onChangeText={setHeight}
						value={height}
						placeholder="Ex. 1.75"
						keyboardType="numeric"
					/>
					<C.FormLabel>Peso</C.FormLabel>
					<C.ErrorMessage>{errorMessage}</C.ErrorMessage>
					<C.Input
						onChangeText={setWeight}
						value={weight}
						placeholder="Ex. 75.365"
						keyboardType="numeric"
					/>
					<C.ListView>
						<C.CalcButton
							onPress={() => {
								validationImc();
							}}
						>
							<C.TextCalcButton>{textButton}</C.TextCalcButton>
						</C.CalcButton>
						<C.ListaImc
							showsVerticalScrollIndicator={false}
							data={imcList.reverse()}
							renderItem={({ item }: any) => {
								return (
									<C.ResultImcItem>
										<C.ResultImcText>Resultado IMC = </C.ResultImcText>
										{item.imc}
									</C.ResultImcItem>
								);
							}}
							keyExtractor={(item: any) => item.id}
						/>
					</C.ListView>
				</C.Form>
			) : (
				<C.ResultView>
					<ResultImc messageResultImc={messageImc} resultImc={imc} />
					<C.CalcButton
						onPress={() => {
							validationImc();
						}}
					>
						<C.TextCalcButton>{textButton}</C.TextCalcButton>
					</C.CalcButton>
				</C.ResultView>
			)}
		</C.FormView>
	);
}
