import './styles.css'
import { IoMdCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Employee = (props) => {

    const favorite = () => {
        props.onFavorite(props.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className='colaborador'>
            
            <IoMdCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.onDeleting(props.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: props.primaryColor }}>
                {/* TODO: criar lógica para quando não houver foto */}
            <img src={`http://github.com/${props.image}.png`} alt={`Foto ${props.name}`} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <div className='favorite'>
                    {props.favorite 
                    ? <MdFavorite {...propsFavorite} color='#ff0000'/> : <MdFavoriteBorder {...propsFavorite}/>}
                </div>
            </div>
        </div>
    )
}

export default Employee;