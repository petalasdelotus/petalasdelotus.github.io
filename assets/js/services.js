const services = [
    {
        name: "Massagem Relaxante",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "A massagem de relaxamento é uma massagem profunda e relaxante, que restabelece o equilíbrio entre o corpo e a mente."
    },
    {
        name: "Massagem com Velas",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "Uma experiência holística que desperta os sentidos (visão, olfato, toque, audição e intuição), através duma vela, óleos vegetais e óleos essenciais, que sendo aquecidos, vão derretendo até ao ponto perfeito para a sua massagem. Morna, super hidratante e relaxante, esta massagem vai desfazer as tensões do dia-a-dia, libertando-o do stress enquanto lhe proporciona uma experiência fantástica de bem-estar."
    },
    {
        name: "Massagem com Aromaterapia",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "A massagem de aromaterapia é uma massagem especial que utiliza óleos essenciais 100% puros."
    },
    {
        name: "Massagem Relaxante com Pedras Quentes",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "A massagem com pedras quentes é uma massagem de relaxamento profundo, que utiliza pedras vulcânicas aquecidas para massajar o corpo, proporcionando uma sensação de bem-estar e relaxamento."
    },
    {
        name: "Massagem Refirmante",
        category: "Tratamento de Corpo",
        duration: "1h30m",
        price: "40€",
        description: "A massagem refirmante é uma das técnicas empregues para manter a saúde da pele. Este método é indicado para pessoas que querem devolver à pele o seu aspeto firme. A ação deste tratamento consegue atenuar a flacidez, acumulada com o passar dos anos ou por oscilações bruscas de perda de peso."
    },
    {
        name: "Massagem Modeladora de Pernas",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "30€",
        description: "A gordura localizada geralmente se acumula nas coxas. Para eliminá-la é preciso estimular o organismo e eliminá-las naturalmente. Este tratamento trata apenas pernas com esfoliação, ultra sons e rádio frequência, creme e massagem."
    },
    {
        name: "Massagem Modeladora",
        category: "Tratamento de Corpo",
        duration: "1h30m",
        price: "40€",
        description: "A gordura localizada geralmente se acumula nas coxas, quadris e barriga. Para eliminá-la é preciso estimular o organismo e eliminá-las naturalmente. Este tratamento trata abdómen e pernas com esfoliação, ultra sons e rádio frequência, creme e massagem."
    },
    {
        name: "Massagem Redutora Abdominal",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "30€",
        description: "A massagem indicada para reduzir as medidas corporais, diminuir a retenção de líquidos, reduzir a celulite e a gordura localizada. Este tratamento é apenas abdominal com ultra sons, creme e massagem."
    },
    {
        name: "Exfoliação Corporal",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "A esfoliação é um tratamento feito com uma mistura de substâncias granulares misturadas ao creme ou óleo com o objetivo de limpar, renovar e hidratar a pele. Ela assegura a remoção da camada mais superficial onde estão as células mortas, o que deixa uma aparência mais suave e lisa."
    },
    {
        name: "Massagem Choco Terapia",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "Massagem à base de cacau e gordura de origem vegetal rica em flavonoides, que contribuem para uma boa circulação, ótimo aliado nos procedimentos anti-celulite. Pernas e abdómen."
    },
    {
        name: "Drenagem Linfática Manual",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "30€",
        description: "A drenagem linfática manual é uma técnica de massagem que tem por objetivo estimular o sistema linfático - uma rede complexa de vasos que movem fluidos pelo corpo - a trabalhar de forma mais acelerada. O sistema linfático trabalha como uma terceira circulação, além da arterial e da venosa, e a linfa é o líquido que circula através dessa rede de vasos linfáticos."
    },
    {
        name: "Massagem para Crianças",
        category: "Tratamento de Corpo",
        duration: "30m",
        price: "A partir de 15€",
        description: "A massagem ajuda a acalmar e relaxar as crianças de hoje. Para trazer um grande alívio e prevenção de diversos males, a MASSAGEM aparece como uma alternativa natural e saudável."
    },
    {
        name: "Algoterapia",
        category: "Tratamento de Corpo",
        duration: "2h",
        price: "65€",
        description: "São muitos os benefícios de um envolvimento corporal, começando pelo simples facto de ser uma das formas mais naturais de hidratar e melhorar o aspeto e a textura da pele. Corpo completo com esfoliação, duche e massagem. Este tratamento é acompanhado com manta térmica."
    },
    {
        name: "Chocoterapia",
        category: "Tratamento de Corpo",
        duration: "2h",
        price: "65€",
        description: "Produto de tratamento que contém ingredientes cosméticos que permitem vivenciar a agradável experiência de sentir o corpo envolvido pela terapia do chocolate com efeito liporedutor e anti celulitico. Corpo completo com esfoliação, duche e massagem. Este tratamento é acompanhado com manta térmica."
    },
    {
        name: "Tratamento Corpo c/ Manta Térmica",
        category: "Tratamento de Corpo",
        duration: "2h",
        price: "45€",
        description: "O tratamento com a manta de sudação térmica e aromaterapia é desintoxicante para o corpo e revitalizante para a mente! Ideal para quem necessita de desintoxicar, perder peso e ganhar energia. A manta térmica é um elemento indispensável para acabar com a celulite, reduzir medidas, emagrecimento e eliminar a gordura localizada."
    },
    {
        name: "Cavitação, Radiofrequência e Vacuoterapia",
        category: "Tratamento de Corpo",
        duration: "1h",
        price: "40€",
        description: "Máxima eficiência que combina os vários tipos de Radiofrequência com ultra lipocavitação. Gordura localizada, redução de celulite e flacidez, linhas de expressão e rugas."
    },
    {
        name: "Limpeza de Pele Profunda",
        category: "Tratamento de Rosto",
        duration: "1h30m",
        price: "20€",
        description: "Tratamento indicado para todos os tipos de pele que inicia-se com a remoção da maquilhagem, esfoliação para remoção das células mortas, tonificação e máscara hidratante, sendo aconselhável para qualquer idade. Termina com uma massagem que estimula a absorção do creme de conforto extremo para uma nutrição profunda da pele."
    },
    {
        name: "Hidratação Facial",
        category: "Tratamento de Rosto",
        duration: "1h",
        price: "20€",
        description: "Tratamento indicado para todos os tipos de pele que inicia-se com a remoção da maquilhagem, esfoliação para remoção das células mortas, tonificação e máscara hidratante, sendo aconselhável para qualquer idade. Termina com uma massagem que estimula a absorção do creme de conforto extremo para uma nutrição profunda da pele."
    },
    {
        name: "Máscara de Argila",
        category: "Tratamento de Rosto",
        duration: "1h",
        price: "20€",
        description: "Apesar de existirem vários tipos, todas têm a capacidade de desintoxicar e de eliminar o excesso de óleo e impurezas da pele. As argilas são ricas em minerais que rejuvenescem a pele e a sua textura esfolia e estimula a microcirculação da pele."
    },
    {
        name: "Máscara de LED",
        category: "Tratamento de Rosto",
        duration: "1h",
        price: "20€",
        description: "Após uma limpeza com sabonete e máscara específica para cada tipo de pele, o led é aplicado no rosto, através de combinações de cores que têm efeitos distintos. Alguns exemplos: Led azul: tem efeito bactericida. Trata a acne Led amarelo: estimula o colágeno, a elastina Led Vermelho: tem efeito anti-inflamatório, cicatrizante Led Verde: Atua nas manchas senis e na hiperpigmentação Led Branco: Ativa a circulação sanguínea e linfática."
    },
    {
        name: "Depilação a Laser",
        category: "Depilação/Epilação",
        duration: "Variável",
        price: "Variável",
        description: "A depilação a laser é um dos métodos mais eficazes para eliminar os pelos de forma definitiva e sem dor."
    },
    {
        name: "Epilação com Cera",
        category: "Depilação/Epilação",
        duration: "Variável",
        price: "Variável",
        description: "Todas gostamos da sensação de uma pele lisa e sem pelos e para isso existem vários métodos de depilação. Apesar de não ser um método permanente, a depilação com cera é um método rápido e eficaz."
    },
    {
        name: "Epilação das Sobrancelhas",
        category: "Depilação/Epilação",
        duration: "Variável",
        price: "Variável",
        description: "Epilação das sobrancelhas com pinça e cera."
    },
    {
        name: "Verniz de Gel",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "13,50€",
        description: "O verniz de gel é uma técnica que permite que o verniz dure mais tempo nas unhas, sem lascar ou perder o brilho."
    },
    {
        name: "Gel sobre Unhas",
        category: "Manicure/Pedicure",
        duration: "Variável",
        price: "20€",
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
        price: "15€",
        description: "A pedicure é um tratamento estético que consiste em cuidar dos pés e das unhas, retirando as cutículas, lixando as unhas e hidratando os pés."
    },
    {
        name: "Terapia de Reiki",
        category: "Terapias Holísticas",
        duration: "Variável",
        price: "35€",
        description: "O Reiki é uma terapia alternativa, destinada a equilibrar a energia vital do corpo, alma e espírito. Indicada para combater stress, dores, distúrbios emocionais e doenças, com resultados eficientes. Terapeuta Holística e Mestre de Reiki."
    },
    {
        name: "Terapia de Bowen",
        category: "Terapias Holísticas",
        duration: "45m",
        price: "40€",
        description: "A terapia de Bowen é uma terapia manual neuro-estrutural que atua sobre o corpo, através de movimentos simples e precisos, de forma a promover o relaxamento das estruturas e assim aliviar os sintomas como sejam as dores musculares e articulares, inflamações, tendinites e outras queixas musculares, estruturais e viscerais com movimentos suaves de cruzamento de fibras, músculos e tendões favorecem também o fluxo sanguíneo, linfático e energético."
    },
    {
        name: "Detox - Desintoxicação do Organismo",
        category: "Outros",
        duration: "45m",
        price: "15€",
        description: "É uma desintoxicação do organismo: Detox é um tratamento que drena as sobrecargas tóxicas, com melhorias substanciais a nível de colesterol, a nível das transaminases (fígado gordo). Limpar com regularidade o organismo através de descarga do sistema linfático, que por via indireta vai libertar toxinas acumuladas no fígado, é uma das medidas mais importantes para nos mantermos saudáveis. Em processos de emagrecimento, perante sobrecargas medicamentosas, colesterol elevado ou fígado gordo, Detox é excelente."
    },
    {
        name: "Reflexologia Podal",
        category: "Outros",
        duration: "45m",
        price: "20€",
        description: "A reflexologia dos pés não pode ser considerada uma massagem básica. Esta massagem promove benefícios de relaxamento e bem estar, é uma técnica que utiliza pressão em pontos específicos. Com escalda pés no início."
    },
    {
        name: "Laser para Fungos e Micoses",
        category: "Outros",
        duration: "Variável",
        price: "Variável",
        description: "A onicomicose, infeção fúngica das unhas, é uma patologia que se manifesta através da perda de coloração e engrossamento da unha, podendo produzir-se e destruição da lâminha ungueal. Na maioria dos casos é causada por dermatófitos, podendo também ser causada por leveduras (Candida) e fungos não dermatófitos (mofos)."
    },
    {
        name: "Gessoterapia",
        category: "Outros",
        duration: "1h30m",
        price: "35€",
        description: "A principal função do tratamento de gessoterapia é moldar o corpo potenciando o emagrecimento e perda de centímetros. pode ser utilizada nas diferentes partes do corpo."
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
                </td>`
    
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
