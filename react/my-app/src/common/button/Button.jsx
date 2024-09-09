import styles from './Button.module.css';  


function Button({varient,disabled,children,buttonType}){
    console.log('varient is : ', varient);
    // console.log('children is : ', children);
    // console.log('buttonType is : ', buttonType);
    // console.log('disabled is : ', disabled);
    return  <button 
    className={`${styles.btn}
    ${varient === 'primary ' ?  styles.primary :""}
    ${varient=== 'warning '  ? styles.warning : ""}
    ${varient === 'error ' ?  styles.error : ""}
    ${varient === 'success ' ?  styles.success :"" }
    `}
    >
        {children} 
        </button>  
}
export default Button;