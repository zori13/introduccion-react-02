import { useState } from "react"

export default function Formulario(){
    const [formData, setFormData]=useState({
       Nombre:'' ,
       Email:'' ,
       Mensaje:''
    })
    //cambio inputs
   const handleInputChange =(event)=>{
    const {name,value}=event.target
    setFormData({
        ...formData,
        [name] : value
    })
   }
//envío formulario
const handleSubmit=(event)=>{
    event.preventDefault()
    alert('Datos :', formData)
    console.log('Datos:', formData)
}
return(
    <div>
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="Nombre" value={formData.Nombre} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="Email" value={formData.Email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea name="Mensaje" value={formData.Mensaje} onChange={handleInputChange}/>                
            </div>
            <button type="submit">Enviar</button>
        </form>    
    </div>
  )
}