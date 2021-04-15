// import styled from 'styled-components'
import React from 'react'
import styles from './Button.module.css'


//METHODE AVEC LIBRAIRIE STYLED-COMPONENTS
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width:768px) {
//     width: auto;
//   }
// `;

const Button = props => {
  return (
    //si on a une classe avec un - comme button-submit à la place de styles.button on fait styles.['button-submit']
    //Si j'ai besoin de rajouter une classe conditionnelle comme invalid je fais
    //className={`${styles.button} ${!isValid && styles.invalid}`}
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
