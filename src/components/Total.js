const Total = (props) => {
    //Reduce es un metodo del paradigma de programacion funcional en lugar de un bucle (for, forEach)
    //Reduce toma todos los elementos de un array y lo reduce a un solo valor
    let total = props.parts.reduce((sum, exerciseCurrent) => {     
        return sum + exerciseCurrent.exercises;
    },0);
    return(
        <div>
            <p>Number of exercises {total}</p>
        </div>       
    );
}

export default Total;