import React from 'react';
import Button from '../button';
import GlHospitalSolid from '../../icons/gl-hospital-solid';
import GlLaptopSolid from '../../icons/gl-laptop-solid';
import GlMedicalAttentionSolid from '../../icons/gl-medical-attention-solid';
import useResponsive from '../../hooks/use-responsive';
import './CardHome.scss';

type Props = {
    title: string,
    price: number,
    icon: string,
    description: Array<string>
}

type PropsIcon = {
    elem: number;
};

const IconList: React.FC<PropsIcon> = ({ elem }) => {
    switch (elem) {
        case 0:
            return <GlMedicalAttentionSolid />;
        case 1:
            return <GlLaptopSolid />;
        case 2:
            return <GlHospitalSolid />;
        default:
            // En caso de un índice no manejado, puedes devolver un componente predeterminado o null
            console.warn(`Ícono no encontrado`);
            return null;
    }
};
const CardHome: React.FC<Props> = ({ title, price, icon, description }) => {

    const { isTablet } = useResponsive();

    return <div className="card">
        <div className="content">
            <span className="title">{title}</span>
            <span><img src={icon} alt="icono de salud" /></span>
        </div>
        <span className="plan">COSTO DEL PLAN</span>
        <span className="price">${price} al mes</span>

<div className='list'>
{
            description.map((elem, index) => (
                <div className='item-list' key={elem} >
                    {
                        isTablet ? <div className="content-icon">{
                            <IconList elem={index} />
                        }</div> : <div className='content-point'><div className="punto" /></div>
                    }
                    <span className="desc" >{elem} </span>
                </div>

            ))
        }
</div>
        
        <Button text="Seleccionar Plan" theme='red' expand />
    </div>

};

export default CardHome;
