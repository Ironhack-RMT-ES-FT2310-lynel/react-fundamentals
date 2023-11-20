console.log("aprendiendo React")

const myPage = document.querySelector("#my-react-page")
const root = ReactDOM.createRoot(myPage) // el DOM virtual


const title = "Patata"

// const dataToRender = React.createElement("h1", {
//   children: `Hola, bienvenidos a ${title}`
// })


// const dataToRender = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola, bienvenidos a ${title}`
//     }),
//     React.createElement("p", {
//       children: `Esta pagina es sobre como usar React`
//     }),
//     React.createElement("p", {
//       children: `La fecha de hoy es: ${new Date().toDateString()}`
//     }),
//   ]
// })

// hay una forma más sencilla de escribir esto? SI lo tengo

// JSX => sintaxis basada en JS y XML (predecesor de HTML)

// const dataToRender = (
//   <div style={{color: "blue"}}>
//     <h1>Hola, bienvenidos a { title }</h1>
//     <p>Esta pagina es sobre como usar React</p>
//     <p>La fecha de hoy es: { new Date().toDateString() }</p>
//   </div>
// )

// React no interpreta este lenguaje (JSX) de forma nativa.
// User una paquete adicional llamado Babel para hacer la traducción

// creamos funciones llamadas (Componentes) donde renderizamos JSX
// componentes siempre en PascalCasing y siempre retornan un JSX

function DataToRender() {

  return (
    <div style={{color: "blue"}}>
      <h1>Hola, bienvenidos a { title }</h1>
      <p>Esta pagina es sobre como usar React</p>
      <p>La fecha de hoy es: { new Date().toDateString() }</p>
    </div>
  )

}

function OtherComponent() {
  return (
    <p>Nuevo parrafo</p>
  )
}


// root.render( DataToRender() )
root.render( <div>
  <DataToRender /> 
  <OtherComponent />
  <OtherComponent />
  <OtherComponent />
  <OtherComponent />
  <OtherComponent />
  <OtherComponent />
  <OtherComponent />
</div> )
