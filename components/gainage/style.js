import styled, { css } from '@emotion/native'



export const GainageMainContainer = styled.View`
display:flex;
justify-content: space-between;
background-color: lightgrey;
flex:1;
padding:10px;

`
export const GainageTimerContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
  border-radius: 5px;
  /* background-color: green; */
  height: ${props => (props.height + "px")};
  
`

export const Description = styled.Text({
  color: 'hotpink'
})

export const TimerButton = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.color)};
    height: ${props => (props.diametre + "px")};
    width: ${props => (props.diametre + "px")};
    border-radius:  ${props => (props.diametre / 2 + "px")};
    border: 1px solid black;
    `
export const DataButton = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.color)};
    border-radius:  5px;
    margin:0 5px;
    padding:10px;
    border: 1px solid black;
    `
export const test = css`
background-color: black;
`
export const GainageSessionContainer = styled.View`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: 5px;
border-radius: 5px;

`
export const PressableContainer = styled.View`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: 5px;
border-radius: 5px;

`


export const GainageSessionText = styled.Text({
  color: 'hotpink'
})

export const TimerText = styled.Text`
font-size: 50px;
`

export const button = css`
background-color: #b0dde8;
display:flex;
justify-content: center;
align-items: center;
border: solid black 1px;
border-radius: 5px;
margin: 5px;;
width:100px;
height:50px;
`