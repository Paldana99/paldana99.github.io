import React, {Component} from "react";
import {Image} from "react-bootstrap";
import '../education.style.css'


class EducationCard extends Component<{ logo: any, nombre: string, fechaInicio: string, fechaFin: string, subTitulo: string }> {
    render() {
        let {logo, nombre, fechaFin, fechaInicio, subTitulo} = this.props;
        return (
            <div className={'container border rounded mb-2'}>
                <div className='row mt-2 mb-2'>
                    <div className="col-2">
                        <Image
                            src={logo}
                            className="w-100 h-100"
                        />
                    </div>
                    <div className='col-9'>
                        <div className={'row'}>
                            <h2 className={'col-10'}>{nombre}</h2>
                            <p className='col-1 text-end'>{fechaInicio}-{fechaFin}</p>
                            <h3 className={'row-cols'}>{subTitulo}</h3>
                            <div className={'row justify-content-end'}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default EducationCard;