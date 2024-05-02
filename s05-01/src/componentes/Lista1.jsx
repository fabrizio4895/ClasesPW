import '../App.css'

function Lista1 (){
    const list = [
        {
            objectID : 0,
            titulo: 'Clean Mode',
            url:'http://www.ulima.edu.pe/libro1',
            autor:'Robert Martin',
            num_comentarios: 10
        },{
            objectID : 1,
            titulo: 'The Shinning',
            url:'http://www.ulima.edu.pe/libro2',
            autor:'Stanley Kubrick',
            num_comentarios: 200
        }
    ]

    return (
        <div className='Lista1css'>
            {//Función que recorra el arreglo
                list.map( function(item){
                    return (
                        <div id={item.objectID}>
                            <span>{item.autor}</span>
                            <span>{item.titulo}</span>
                            <br />
                        </div>
                    )
                } )
            }
        </div>
    )
}
export default Lista1