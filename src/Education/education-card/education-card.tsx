import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import '../education.style.css'

class EducationCard extends Component<{
  logo: any
  nombre: string
  fechaInicio: string
  fechaFin: string
  subTitulo: string
}> {
  render(): any {
    const { logo, nombre, fechaFin, fechaInicio, subTitulo } = this.props
    return (
      <div className={'container mb-2'}>
        <div className="row mt-2 mb-2">
          <div className="col-2 border-end border-light">
            <Image src={logo} className="w-100" />
          </div>
          <div className="col-10">
            <div className={'row'}>
              <h2 className={'col-10'}>{nombre}</h2>
              <p className="col-1 text-end">
                {fechaInicio}-{fechaFin}
              </p>
            </div>
            <h3 className={'row-cols'}>{subTitulo}</h3>
            <div className={'row offset-1'}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default EducationCard
