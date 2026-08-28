const services = [
    {
        name: "Massagem Relaxante",
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "38€",
        description: "A massagem de relaxamento é uma massagem profunda e relaxante, que restabelece o equilíbrio entre o corpo e a mente."
    },
    {
        name: "Massagem com Vela Quente",
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "45€",
        description: "Uma experiência holística que desperta os sentidos (visão, olfato, toque, audição e intuição), através duma vela, óleos vegetais e óleos essenciais, que sendo aquecidos, vão derretendo até ao ponto perfeito para a sua massagem. Morna, super hidratante e relaxante, esta massagem vai desfazer as tensões do dia-a-dia, libertando-o do stress enquanto lhe proporciona uma experiência fantástica de bem-estar."
    },
    {
        name: "Massagem com Aromaterapia",
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "45€",
        description: "A massagem de aromaterapia é uma massagem especial que utiliza óleos essenciais 100% puros e diluídos"
    },
    {
        name: "Massagem com Pedras Quentes",
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "45€",
        description: "A massagem com pedras quentes é uma massagem de relaxamento profundo, que utiliza pedras vulcânicas aquecidas para massajar o corpo, proporcionando uma sensação de bem-estar e relaxamento."
    },
    {
        name: "Massagem para Pernas Cansadas",
        category: "Cuidados de Corpo",
        duration: "45m",
        price: "30€",
        description: "Drenagem linfática manual (pode ser feita com técnica especial para grávidas)."
    },
    {
        name: "Massagem Modeladora Intensiva — Anti-Celulite", 
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "39,90€",
        description: "Tratamento completo que combina massagem modeladora com creme redutor e ampola anti-celulite para potenciar os resultados ✔ Ajuda a reduzir medidas ✔ Combate a celulite ✔ Melhora a firmeza da pele ✔ Ativa a circulação."
    },
    {
        name: "Massagem Crioterapia Redutora — Cuidado Corporal Frio",
        category: "Cuidados de Corpo",
        duration: "60m",
        price: "39,90€",
        description: "Crioterapia Redutora com efeito frio associado a técnicas de massagem para estimular a circulação, ajudar a reduzir a retenção de líquidos, favorecer a redução corporal e promover uma sensação de firmeza na pele. É um excelente complemento para um estilo de vida saudável, proporcionando uma silhueta mais definida e uma agradável sensação de leveza e bem-estar."
    },
    {
        name: "Esfoliação Corporal",
        category: "Cuidados de Corpo",
        duration: "90m",
        price: "68€",
        description: "A esfoliação é um tratamento feito com uma mistura de substâncias granulares misturadas ao creme ou óleo com o objetivo de limpar, renovar e hidratar a pele. Ela assegura a remoção da camada mais superficial onde estão as células mortas, o que deixa uma aparência mais suave e lisa. Tratamento com duche."
    },
    {
        name: "Drenagem Linfática Manual",
        category: "Cuidados de Corpo",
        duration: "90m",
        price: "48€",
        description: "A drenagem linfática manual é uma técnica de massagem que tem por objetivo estimular o sistema linfático - uma rede complexa de vasos que movem fluidos pelo corpo - a trabalhar de forma mais acelerada. O sistema linfático trabalha como uma terceira circulação, além da arterial e da venosa, e a linfa é o líquido que circula através dessa rede de vasos linfáticos."
    },
    {
        name: "Algoterapia",
        category: "Cuidados de Corpo",
        duration: "120m",
        price: "75€",
        description: "São muitos os benefícios de um envolvimento corporal, começando pelo simples facto de ser uma das formas mais naturais de hidratar e melhorar o aspeto e a textura da pele. Corpo completo com esfoliação, duche e massagem. Este tratamento é acompanhado com manta térmica."
    },
    {
        name: "Chocoterapia",
        category: "Cuidados de Corpo",
        duration: "120m",
        price: "75€",
        description: "Produto de tratamento que contém ingredientes cosméticos que permitem vivenciar a agradável experiência de sentir o corpo envolvido pela terapia do chocolate com efeito liporedutor e anti celulitico. Corpo completo com esfoliação, duche e massagem. Este tratamento é acompanhado com manta térmica."
    },
    {
        name: "Tratamento Detox Corporal",
        category: "Cuidados de Corpo",
        duration: "120m",
        price: "75€",
        description: "O tratamento com a manta de sudação térmica e aromaterapia é desintoxicante para o corpo e revitalizante para a mente! Ideal para quem necessita de desintoxicar, perder peso e ganhar energia. A manta térmica é um elemento indispensável para acabar com a celulite, reduzir medidas, emagrecimento e eliminar a gordura localizada."
    },
    {
        name: "Cavitação e Radiofrequência",
        category: "Cuidados de Corpo",
        duration: "90m",
        price: "45€",
        description: "Máxima eficiência que combina os vários tipos de Radiofrequência com ultra lipocavitação. Gordura localizada, redução de celulite e flacidez, linhas de expressão e rugas."
    },
    {
        name: "Gessoterapia",
        category: "Cuidados de Corpo",
        duration: "90m",
        price: "59€",
        description: "A principal função do tratamento de gessoterapia é moldar o corpo potenciando o emagrecimento e perda de centímetros. pode ser utilizada nas diferentes partes do corpo."
    },
    {
        name: "Limpeza de Pele Profunda",
        category: "Cuidados de Rosto",
        duration: "90m",
        price: "45€",
        description: "Tratamento indicado para todos os tipos de pele que inicia-se com a remoção da maquilhagem, esfoliação para remoção das células mortas, tonificação, máscara hidratante e extração de comedons, sendo aconselhável para qualquer idade. Termina com uma massagem que estimula a absorção do creme de conforto extremo para uma nutrição profunda da pele."
    },
    {
        name: "Limpeza de Pele Simples",
        category: "Cuidados de Rosto",
        duration: "60m",
        price: "25€",
        description: "Tratamento indicado para todos os tipos de pele que inicia-se com a remoção da maquilhagem, esfoliação para remoção das células mortas, tonificação e máscara hidratante, sendo aconselhável para qualquer idade. Termina com uma massagem que estimula a absorção do creme de conforto extremo para uma nutrição profunda da pele."
    },
    {
        name: "Radiofrequência Facial",
        category: "Cuidados de Rosto",
        duration: "60m",
        price: "39€",
        description: "Higienização e massagem. Redução de rugas: Suaviza linhas de expressão e rugas finas. Combate à flacidez: Melhora a elasticidade cutânea, sendo ideal para o rosto e pescoço."
    },
    {
        name: "Epilação a Laser",
        category: "Epilação",
        duration: "Variável",
        price: "Variável",
        description: "A epilação a laser reduz os pelos de forma duradoura, segura e eficaz, com resultados visíveis nas primeiras sessões. Diagnóstico personalizado gratuito. <hr />Buço: 12€ | Rosto: 25€ | Axilas: 20€ | Virilha: 25€ | Meia perna inferior: 30€ | Meia perna superior: 35€ | Pernas completas: 50€ | Braços: 40€ | Costas: 35€ | Glúteos: 30€ | Linha alba: 15€ | Mãos/pés: 10€"
    },
    {
        name: "Epilação com Cera",
        category: "Epilação",
        duration: "Variável",
        price: "Variável",
        description: "Todas gostamos da sensação de uma pele lisa e sem pelos e para isso existem vários métodos de depilação. Apesar de não ser um método permanente, a depilação com cera é um método rápido e eficaz. <hr />Buço: 4,50€ | Sobrancelhas: 5€ | Rosto: 11,50€ | Axilas: 7,50€ | Virilha normal: 7,5€ | Virilha completa: 18€ | Meia perna: 9,50€ | Pernas completas: 19,50€ | Braços completos: 9,50€ | Costas: 9,50€"
    },
    {
        name: "Verniz de Gel",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "15€",
        description: "O verniz de gel é uma técnica que permite que o verniz dure mais tempo nas unhas, sem lascar ou perder o brilho."
    },
    {
        name: "Gel sobre Unhas",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "25€",
        description: "O gel sobre unhas é uma técnica que permite alongar as unhas naturais, dando-lhes um aspeto mais bonito e uniforme."
    },
    {
        name: "Unhas com Extensão",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "25€",
        description: "As unhas com extensão são uma técnica que permite alongar as unhas naturais, dando-lhes um aspeto mais bonito e uniforme."
    },
    {
        name: "Pedicure",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "20€",
        description: "A pedicure é um tratamento estético que consiste em cuidar dos pés e das unhas, retirando as cutículas, lixando as unhas e hidratando os pés."
    },
    {
        name: "Detox - Desintoxicação do Organismo",
        category: "Outros",
        duration: "45m",
        price: "18€",
        description: "É uma desintoxicação do organismo: Detox é um tratamento que drena as sobrecargas tóxicas, com melhorias substanciais a nível de colesterol, a nível das transaminases (fígado gordo). Limpar com regularidade o organismo através de descarga do sistema linfático, que por via indireta vai libertar toxinas acumuladas no fígado, é uma das medidas mais importantes para nos mantermos saudáveis. Em processos de emagrecimento, perante sobrecargas medicamentosas, colesterol elevado ou fígado gordo, Detox é excelente."
    },
    {
        name: "Reflexologia Podal",
        category: "Outros",
        duration: "60m",
        price: "38€",
        description: "A reflexologia dos pés não pode ser considerada uma massagem básica. Esta massagem promove benefícios de relaxamento e bem estar, é uma técnica que utiliza pressão em pontos específicos. Com escalda pés no início."
    }
]

async function loadServices() {
    try {
        const servicesDiv = document.querySelector("#services")
    
        services.forEach((service, idx) => {
            validateService(service)
            const index = idx + 1
            const row = document.createElement("tr")
            row.classList.add("service")
            row.setAttribute("data-toggle", "collapse")
            row.setAttribute("data-target", `#collapse${index}`)
            row.setAttribute("aria-expanded", "false")
            row.setAttribute("aria-controls", `collapse${index}`)
            row.classList.add("collapsed")
    
            row.innerHTML = `
                <th scope="row">${index}</th>
                <td>${service.name}</td>
                <td>${service.category}</td>
                <td>${service.duration}</td>
                <td>${service.price}</td>
                <td>
                <i class="fa" aria-hidden="false"></i>
                </td>
            `
    
            const description = document.createElement("tr")
            description.innerHTML = `
                <td colspan="6" id="collapse${index}" class="collapse acc" data-parent="#accordion">
                    <p>${service.description}</p>
                </td>
            `
            servicesDiv.appendChild(row)
            servicesDiv.appendChild(description)
        })
    } catch (error) {
        console.error("Error:", error)
        alert("Erro ao carregar os serviços, pedimos desculpa.")
    }
}

function validateService(service) {
    if (!service.name) throw new Error("Nome do serviço não definido")
    if (!service.category) throw new Error("Categoria do serviço não definida")
    if (!service.duration) throw new Error("Duração do serviço não definida")
    if (!service.price) throw new Error("Preço do serviço não definido")
    if (!service.description) throw new Error("Descrição do serviço não definida")
}

document.addEventListener("DOMContentLoaded", loadServices)
