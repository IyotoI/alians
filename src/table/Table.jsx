export const Table = () => (
    <table border='1'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Buen estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Santiago</td>
                <td>Yate</td>
                <td>1053866093</td>
                <td>santiyate7@gmail.com</td>
                <td>3235847900</td>
                <td>
                    <select>
                        <option selected>Elegir</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </td>
            </tr>
        </tbody>
    </table>
)