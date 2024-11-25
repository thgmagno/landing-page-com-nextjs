import { PlanCard } from "../common/PlanCard";

export function About() {
    return (
        <div className="content">
            <h1>Preço Simples e Transparente</h1>
            <p>
                Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você?
                Assine o nosso plano mensal <span className="underline">Pro Premium VIP</span> e garanta mensalmente um ebook novo de
                programação. E por menos de um café por dia.
            </p>
            <div className="flex justify-center">
                <PlanCard />
            </div>
        </div>
    );
}