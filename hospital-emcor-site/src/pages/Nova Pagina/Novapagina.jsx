import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import heal from "../../images/HEAL.jpg"
import "./novapagina.css"

export default function Novapagina() {
return(
    <>
    <div className="bg-light align-items-center p-5" >
        <div className="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={heal} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    </div>
    <Breadcrumb crumb="Nova Página"/>
    </>
)   
};

