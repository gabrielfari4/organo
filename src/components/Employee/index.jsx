import './styles.css'
import { IoMdCloseCircle } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import {Img} from 'react-image'

const Employee = (props) => {

    const favorite = () => {
        props.onFavorite(props.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    const userImg = () => {
        const imgUrl = `http://github.com/${props.image}.png`
        return imgUrl
    }

    

    return (
        <div className='colaborador'>
            <IoMdCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.onDeleting(props.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: props.primaryColor }}>
            {props.image
                ? <img src={userImg()} alt='' /> 
                : <FaUserCircle className='iconUser' size={100} style={{ backgroundColor: 'white' }}/>
            }
            
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