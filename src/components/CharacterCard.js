import React from "react";
import styled from 'styled-components';


export default function CharacterCard(props) {
  
  const location = props.location.name;
  const origin = props.origin.name;

  const Card = styled.div`
    text-align:center;
    width:25%;
    margin:20px;
    padding:10px;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5)    
  `

  const Pic = styled.img`
    width:100%;
  `
  return(

    <Card>
      <Pic src = {props.pic}/>
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Location: {location}</p>
      <p>From: {origin}</p>
    </Card>
  )
}
