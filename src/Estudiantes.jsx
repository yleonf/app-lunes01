function Estudiantes(props){
    // destructurar props
    const {nombre,edad}=props.datos;

    return(
        <>
          <h1>Nombre: {nombre} </h1>
        </>
    )
}
export default Estudiantes;