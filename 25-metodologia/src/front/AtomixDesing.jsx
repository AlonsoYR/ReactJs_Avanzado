import React from 'react'
import Button from '../components/01_atomos/Button';
import Input from '../components/01_atomos/Input';
import Container from '../components/01_atomos/Container';
import FormAzul from '../components/02_moleculas/FormAzul';
import FormRojo from '../components/02_moleculas/FormRojo';
import Formulario from '../components/03_organismos/Formulario';
import Header from '../components/02_moleculas/Header';
import OrgHeader from '../components/03_organismos/OrgHeader';


const AtomixDesing = () => {
  return (
    <div>
        <h2>Diseño de atomos</h2>
        <h3>Atomos</h3>
        <div>
            <Button color='blue'/>
            <Button color='red'/>
            <Input/>
            <Container/>            
        </div>
        <h3>Moleculas</h3>
        <div>
          <Header/>
          <FormAzul/>
          <FormRojo/>
        </div>
        <h3>Organismos</h3>
        <div>
          <Formulario/>
          <OrgHeader/>
        </div>
        <h3>Plantillas</h3>
        <div>
          <Formulario/>
        </div>
        <h3>Paginas</h3>
        <div>
          <Formulario/>
        </div>
    </div>
  )
}

export default AtomixDesing
