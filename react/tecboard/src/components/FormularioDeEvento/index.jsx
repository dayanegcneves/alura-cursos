import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from '../ListaSuspensa';
import { Botao } from '../Botao';

export function FormularioDeEvento({ temas, aoSubmeter }) {
    function aoFormSubmetido(formData) {
        const evento = {
            capa: formData.get('capa'),
            tema: temas.find((item) => {
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('data')),
            titulo: formData.get('nome'),
        }
        aoSubmeter(evento)
    }

    return (
        <form className='form-evento' action={aoFormSubmetido}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="capa">
                        Qual o endereço da imagem?
                    </Label>
                    <CampoDeEntrada type="text" name="capa" id="capa" placeholder='https://...' />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="nome">
                        Qual o nome do evento?
                    </Label>
                    <CampoDeEntrada type="text" name="nome" id="nome" placeholder='Summer dev hits' />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="data">
                        Data do evento?
                    </Label>
                    <CampoDeEntrada type="date" name="data" id="data" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">
                        Tema do evento
                    </Label>
                    <ListaSuspensa itens={temas} id="tema" name="tema"></ListaSuspensa>
                </CampoDeFormulario>
                <div className='acoes'>
                    <Botao>Criar evento</Botao>
                </div>
            </div>
        </form>
    )
}