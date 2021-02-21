export const Form = () => (
    <form>
        <div>
            <label for='name'>Nombre</label>
            <input type='name' id='name'/>
        </div>
        <div>
            <label for='lastName'>Apellido</label>
            <input name='lastName' id='lastName'/>
        </div>
        <div>
            <label for='identification'>Cedula</label>
            <input name='identification' id='identification'/>
        </div>
        <div>
            <label for='email'>Email</label>
            <input name='email' id='email'/>
        </div>
        <div>
            <label for='cellular'>Celular</label>
            <input name='cellular' id='cellular'/>
        </div>
        <input type='submit' value='Guardar'/>
    </form>
)

