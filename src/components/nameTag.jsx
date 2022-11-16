import styled from 'styled-components'
	
const NameTag = styled.button`
	height: 50px;
	width: 200px;
	background-color: #C6AF94;
	color: #A67D4D;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
`
const Text = styled.text`
	font-family: 'Dosis';
	font-weight: ${props => props.Weight};
	font-size: ${props => props.Size};
`

const Container = styled.div`
	height: ${props => props.Height};
	width: ${props => props.Width};
	display: flex;
	flex-direction: ${props => props.column ? 'column' : 'row'};
	justify-content: ${props => props.Jc};
	align-items: ${props => props.Ai};
	gap: ${props => props.Gap};
	border: ${props => props.Border};
	background-color: ${props => props.Bg};
`

export {NameTag, Container, Text};