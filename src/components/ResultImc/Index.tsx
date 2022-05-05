import React from "react";
import * as C from "../../../styles";
import { Share, View } from "react-native";

interface ResultProps {
	messageResultImc: string;
	resultImc: number;
}

export default function ResultImc(props: ResultProps) {
	const onShare = async () => {
		const result = await Share.share({
			message: `Meu imc é: ${props.resultImc}`,
		});
	};

	return (
		<C.ResultImc>
			<C.BoxShareButton>
				<C.Information>{props.messageResultImc}</C.Information>
				<C.NumberImc>{props.resultImc}</C.NumberImc>
				<C.ShareButton onPress={onShare}>
					<C.SharedText>COMPARTILHAR</C.SharedText>
				</C.ShareButton>
			</C.BoxShareButton>
		</C.ResultImc>
	);
}
