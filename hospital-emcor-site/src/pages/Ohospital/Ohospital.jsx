import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import "./ohospital.css"

function Ohospital() {
    return(
    <>  <div className="container mt-3">
        <h3 className="text-center">O Hospital</h3>
        <div class="row p-3 m-1">
            <div class="col-sm-6">
                <p class="text-justify">Pariatur culpa ea sint adipisicing nostrud cupidatat ea. Sint aute nisi tempor fugiat ea in velit. Laborum occaecat cupidatat eu ea. Esse ipsum do dolor cupidatat fugiat consequat excepteur est tempor esse aute velit dolore. Consequat proident est nulla nisi occaecat labore culpa culpa cupidatat tempor adipisicing et. Ullamco sint nostrud quis ullamco ex deserunt. Id enim proident duis excepteur exercitation magna.<br/><br/>
                Enim duis elit dolore minim aliqua tempor reprehenderit dolore consectetur officia in mollit voluptate. Consequat consectetur qui dolore sint ullamco. Incididunt eu commodo adipisicing ipsum magna aliqua. Fugiat dolore quis commodo proident enim qui do in consequat duis id minim commodo. Laborum sunt id consequat exercitation irure. Dolor consectetur nisi nisi do sint adipisicing proident quis sit cillum. Deserunt magna labore cillum sint.</p>
            </div>
            <div className="col-sm-6">
                <div className="container ">
                    <div className="teste" style={{marginLeft: "20px"}}>
                        <span style={{fontSize: "18px", fontWeight: "bold"}}>Missão</span>
                        <span style={{fontSize: "16px",marginBottom:"70px"}}>Acolher e Cuidar</span>
                    </div>
                    <div className="teste" style={{marginLeft: "20px"}}>
                        <span style={{fontSize: "18px", fontWeight: "bold"}}>Visão</span>
                        <span style={{fontSize: "16px",marginBottom:"70px"}}>Ser referência de assistência integral, humanizada e de qualidade na Zona Norte do Rio de Janeiro.</span>
                    </div>
                    <div className="teste" style={{marginLeft: "20px"}}>
                        <span style={{fontSize: "18px", fontWeight: "bold"}}>Valores</span>
                        <span style={{fontSize: "16px",}}>Humanização, Competência, Integridade, Sustentabilidade e Compromisso.</span>
                    </div>
                </div>
            </div>
        </div>
            
            
        </div>
        <Breadcrumb crumb={"O Hospital"} />
    </>
    );
}

export default Ohospital;
