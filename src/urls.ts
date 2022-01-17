import { Express } from "express";
import { Connection } from "typeorm";
import { DespesaService } from "./service/despesas";
import { InquilinoService } from "./service/inquilinos";
import { UnidadeService } from "./service/unidade";
import { DespesaRoute } from "./routes/despesas";
import { InquilinoRoute } from "./routes/inquilinos";
import { UnidadeRoute } from "./routes/unidade";

export default function makeRoutes(app: Express, conn: Connection) {

    DespesaRoute.service = new DespesaService(conn);

    app.get('/despesas', DespesaRoute.getAll);
    app.post('/despesas', DespesaRoute.create);
    app.get('/despesas/:id', DespesaRoute.getOne);
    app.put('/despesas/:id', DespesaRoute.update);


    UnidadeRoute.service = new UnidadeService(conn);

    app.get('/unidade', UnidadeRoute.getAll);
    app.post('/unidade', UnidadeRoute.create);
    app.get('/unidade/:id', UnidadeRoute.getOne);


    InquilinoRoute.service = new InquilinoService(conn);

    app.get('/inquilino', InquilinoRoute.getAll);
    app.post('/inquilino', InquilinoRoute.create);
    app.get('/inquilino/:id', InquilinoRoute.getOne);
    
}