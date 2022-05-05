import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: #e0e5e5;
	padding-top: 70px;
`;

export const BoxTitle = styled.View`
	align-items: center;
	margin-bottom: 20px;
	padding: 15px;
	justify-content: center;
`;

export const TextTitle = styled.Text`
	color: #128ae6;
	font-weight: bold;
	font-size: 23.2px; ;
`;

export const FormView = styled.View`
	flex: 1;
	background-color: #fff;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	align-items: center;
	padding-top: 30px;
`;

export const Form = styled.Pressable`
	width: 100%;
	height: 100%;
	align-items: center;
`;

export const FormLabel = styled.Text`
	color: #000;
	font-size: 18px;
	align-self: flex-start;
	margin-left: 25px;
`;

export const Input = styled.TextInput`
	width: 90%;
	border-radius: 10px;
	background-color: #f6f6f6;
	margin: 12px;
	padding: 10px;
`;

export const CalcButton = styled.TouchableOpacity`
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	width: 90%;
	background-color: #1877f2;
	padding: 14px;
	margin-left: 0px;
	margin-top: 30px;
`;

export const ShareButton = styled(CalcButton)`
	margin-left: 12px;
	margin-bottom: 0px;
	background-color: #2fb9f5;
`;

export const BoxShareButton = styled.View`
	width: 90%;
	align-items: center;
	margin-bottom: 10px;
`;

export const TextCalcButton = styled.Text`
	font-size: 20px;
	color: #fff;
`;

export const SharedText = styled(TextCalcButton)`
	font-weight: bold;
	padding-horizontal: 30px;
`;

export const ResultView = styled.View`
	width: 100%;
	height: 50%;
	align-items: center;
`;

export const ListView = styled.View`
	width: 100%;
	height: 60%;
	align-items: center;
`;

export const ResultImc = styled.View`
	flex: 1;
	margin-top: 15px;
	padding-top: 30px;
	border-radius: 10px;
	align-items: center;
	width: 100%;
`;

export const NumberImc = styled.Text`
	color: #128ae6;
	font-weight: bold;
	font-size: 48px;
`;

export const Information = styled.Text`
	font-size: 18px;
	color: #128ae6;
	font-weight: bold;
`;

export const ErrorMessage = styled.Text`
	font-size: 12px;
	color: red;
	font-weight: bold;
	padding-left: 20px;
`;

export const ListaImc = styled.FlatList`
	margin-top: 20px;
`;

export const ResultImcItem = styled.Text`
	font-size: 26px;
	color: #128ae6;
	height: 50px;
	width: 100%;
	padding-right: 20px;
`;

export const ResultImcText = styled.Text`
	font-size: 16px;
`;
