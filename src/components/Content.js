import Part from './Part';

const Content = (props) => {
    return(
        <div>
            {/*
                Map es un metodo del paradigma de programacion funcional en lugar de un bucle (for, forEach)
                Map toma cada elemento de un array y lo transforma de forma individual
                *Warning: Each child in a list should have a unique "key" prop.
                Se debe agregar un key a cada llamada del componente Part, para esto se puede usar el index o posicion de cada elmento en el array
            */}            
            {props.course.parts.map((part, index) => {     
                return (
                    <Part part={part.name} exercise={part.exercises} key={index}/>
                ) 
            })}
        </div>
    );
}

export default Content;