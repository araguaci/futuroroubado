import Timeline from '@/components/Timeline';
import React from 'react';

const rawJsonContent = `{
  "1990s": [
    {
      "nome": "Escândalo do Proer",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Programa bancário.",
      "envolvidos": "Bancos.",
      "consequencias": "Ligação indireta.",
      "ano": "1990s"
    }
  ],
  "1995-2002": [
    {
      "nome": "Escândalo de Corrupção dos Ministros no Governo FHC",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Múltiplos casos de ministros.",
      "envolvidos": "Ministros.",
      "consequencias": "",
      "ano": "1995-2002"
    },
    {
      "nome": "Abuso de Medidas Provisórias",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Excesso de MPs (5.491).",
      "envolvidos": "Governo FHC.",
      "consequencias": "",
      "ano": "1995-2002"
    }
  ],
  "2000-2001": [
    {
      "nome": "Acidentes Ambientais da Petrobras",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Vazamentos de óleo.",
      "envolvidos": "Petrobras.",
      "consequencias": "",
      "ano": "2000-2001"
    }
  ],
  "2000s": [
    {
      "nome": "Escândalo da Suposta Ligação do PT com o MST",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Alegações de financiamento ilegal.",
      "envolvidos": "PT, MST.",
      "consequencias": "Não comprovado.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo da Suposta Ligação do PT com a FARC",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Acusações de apoio a guerrilha.",
      "envolvidos": "PT.",
      "consequencias": "Não substanciado.",
      "ano": "2000s"
    },
    {
      "nome": "Licitação Para a Compra de Gêneros Básicos",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Superfaturamento em compras.",
      "envolvidos": "Governo federal.",
      "consequencias": "Investigações menores.",
      "ano": "2000s"
    },
    {
      "nome": "Caso José Eduardo Dutra",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Irregularidades na Petrobras.",
      "envolvidos": "José Eduardo Dutra.",
      "consequencias": "Sem condenações.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo dos Frangos (Roraima)",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Fraudes em exportações.",
      "envolvidos": "Locais em Roraima.",
      "consequencias": "Investigações.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo da Norospar",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Irregularidades em saúde no PR.",
      "envolvidos": "Associação Norospar.",
      "consequencias": "Sem ligação federal direta.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo da NGO Ágora",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Desvios em convênios.",
      "envolvidos": "ONG Ágora.",
      "consequencias": "Investigações.",
      "ano": "2000s"
    },
    {
      "nome": "Caso Henrique Meirelles",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Irregularidades financeiras.",
      "envolvidos": "Henrique Meirelles.",
      "consequencias": "Absolvição.",
      "ano": "2000s"
    },
    {
      "nome": "Irregularidades na Bolsa-Escola",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Desvios no programa.",
      "envolvidos": "Gestores.",
      "consequencias": "Auditorias.",
      "ano": "2000s"
    },
    {
      "nome": "Irregularidades do Programa Restaurante Popular",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Favorecimento a prefeituras PT.",
      "envolvidos": "Programa.",
      "consequencias": "Investigações.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo dos Fundos de Pensão",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Desvios em fundos.",
      "envolvidos": "Fundos de pensão.",
      "consequencias": "Operações PF.",
      "ano": "2000s"
    },
    {
      "nome": "Escândalo do Foro de São Paulo",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Alegações ideológicas.",
      "envolvidos": "PT.",
      "consequencias": "Não criminal.",
      "ano": "2000s"
    }
  ],
  "2003-2004": [
    {
      "nome": "Abuso de Medidas Provisórias no Governo Lula entre 2003 e 2004",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Excesso de MPs.",
      "envolvidos": "Governo Lula.",
      "consequencias": "",
      "ano": "2003-2004"
    },
    {
      "nome": "Várias Aberturas de Licitações da Presidência Para a Compra de Artigos de Luxo",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Gastos excessivos em luxos.",
      "envolvidos": "Presidência.",
      "consequencias": "Críticas.",
      "ano": "2003-2004"
    },
    {
      "nome": "Lei de Responsabilidade Fiscal (Recuos)",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Descumprimento da LRF.",
      "envolvidos": "Governo federal.",
      "consequencias": "Debates econômicos.",
      "ano": "2003-2004"
    },
    {
      "nome": "Abuso de Medidas Provisórias no Governo Lula",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Excesso de MPs.",
      "envolvidos": "Governo Lula.",
      "consequencias": "Críticas constitucionais.",
      "ano": "2003-2004"
    }
  ],
  "2003-2010": [
    {
      "nome": "Escândalo de Corrupção dos Ministros no Governo Lula",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Múltiplos casos.",
      "envolvidos": "Ministros.",
      "consequencias": "",
      "ano": "2003-2010"
    },
    {
      "nome": "Escândalo dos Gastos Públicos dos Ministros",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Uso excessivo de recursos.",
      "envolvidos": "Ministros de Lula.",
      "consequencias": "Críticas, ajustes normativos.",
      "ano": "2003-2010"
    },
    {
      "nome": "Escândalo de Corrupção dos Ministros no Governo Lula",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Múltiplos casos de ministros.",
      "envolvidos": "Ministros.",
      "consequencias": "Demissões.",
      "ano": "2003-2010"
    }
  ],
  "2006-2007": [
    {
      "nome": "Crise no Setor Aéreo",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Caos em aeroportos.",
      "envolvidos": "Setor aéreo.",
      "consequencias": "Reformas.",
      "ano": "2006-2007"
    }
  ],
  "2011-2012": [
    {
      "nome": "Faxina Ética de Dilma",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Demissões de ministros por irregularidades.",
      "envolvidos": "Palocci, Rossi, Silva, Novais, Negromonte.",
      "consequencias": "Reformas ministeriais.",
      "ano": "2011-2012"
    }
  ],
  "2015-2016": [
    {
      "nome": "Pedaladas Fiscais",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Manobras contábeis ilegais.",
      "envolvidos": "Dilma, equipe econômica.",
      "consequencias": "Impeachment.",
      "ano": "2015-2016"
    },
    {
      "nome": "Operação Zelotes",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Fraudes no CARF, envolvendo filho de Lula.",
      "envolvidos": "Luís Cláudio Lula da Silva, conselheiros.",
      "consequencias": "Prisões, processos.",
      "ano": "2015-2016"
    }
  ],
  "Não especificado": [
    {
      "nome": "Contra Políticos da Bahia",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Alegações vagas de corrupção política.",
      "envolvidos": "Políticos baianos.",
      "consequencias": "Sem detalhes substanciais.",
      "ano": "Não especificado"
    },
    {
      "nome": "Caso Antônio Celso Cipriani",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Alegações vagas.",
      "envolvidos": "Antônio Celso Cipriani.",
      "consequencias": "Sem detalhes.",
      "ano": "Não especificado"
    },
    {
      "nome": "Escândalo da Interbrazil",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Alegações vagas.",
      "envolvidos": "Interbrazil.",
      "consequencias": "Sem detalhes.",
      "ano": "Não especificado"
    }
  ],
  "1980": [
    {
      "nome": "Caso do Grupo Delfim",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Acusações de favorecimento a empresas ligadas ao ministro Delfim Netto.",
      "envolvidos": "Delfim Netto, empresários.",
      "consequencias": "",
      "ano": "1980"
    },
    {
      "nome": "Escândalo da Mandioca",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Fraudes em financiamentos agrícolas para plantações de mandioca.",
      "envolvidos": "Produtores rurais, bancos estatais.",
      "consequencias": "",
      "ano": "1980"
    },
    {
      "nome": "Caso Morel",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Acusações de corrupção no Ministério da Educação.",
      "envolvidos": "Ministro Morel, assessores.",
      "consequencias": "",
      "ano": "1980"
    }
  ],
  "1981": [
    {
      "nome": "Caso Capemi",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Desvio de recursos de fundo de pensão para compra superfaturada de madeira na Amazônia.",
      "envolvidos": "Militares, diretores da Capemi.",
      "consequencias": "",
      "ano": "1981"
    },
    {
      "nome": "Crime da Mala",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Assassinato ligado a contrabando e corrupção.",
      "envolvidos": "Policiais, criminosos.",
      "consequencias": "",
      "ano": "1981"
    }
  ],
  "1982": [
    {
      "nome": "Escândalo da Brasilinvest",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Irregularidades em investimentos e empréstimos bancários.",
      "envolvidos": "Banco Brasilinvest, autoridades financeiras.",
      "consequencias": "",
      "ano": "1982"
    }
  ],
  "1983": [
    {
      "nome": "Escândalo das Polonetas",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Corrupção em contratos de importação de equipamentos.",
      "envolvidos": "Empresas estrangeiras, funcionários públicos.",
      "consequencias": "",
      "ano": "1983"
    },
    {
      "nome": "Caso Coroa-Brastel",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Fraudes em contratos de telecomunicações.",
      "envolvidos": "Empresas Coroa e Brastel, militares.",
      "consequencias": "",
      "ano": "1983"
    }
  ],
  "1984": [
    {
      "nome": "Escândalo do Instituto Nacional de Assistência Médica do INAMPS",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Desvios em recursos da saúde pública.",
      "envolvidos": "Diretores do INAMPS, fornecedores.",
      "consequencias": "",
      "ano": "1984"
    },
    {
      "nome": "Escândalo das Jóias",
      "governo": "Governo João Figueiredo (1979-1985)",
      "descricao": "Contrabando de joias e pedras preciosas.",
      "envolvidos": "Autoridades alfandegárias, contrabandistas.",
      "consequencias": "",
      "ano": "1984"
    }
  ],
  "1985": [
    {
      "nome": "Caso Imbraim Abi-Ackel",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Acusações de irregularidades no Ministério da Justiça.",
      "envolvidos": "Ministro Abi-Ackel.",
      "consequencias": "",
      "ano": "1985"
    }
  ],
  "1986": [
    {
      "nome": "Caso Chiarelli",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Dossiê contra senador por corrupção.",
      "envolvidos": "Carlos Chiarelli, opositores.",
      "consequencias": "",
      "ano": "1986"
    }
  ],
  "1987": [
    {
      "nome": "Escândalo do Ministério das Comunicações",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Concessões de rádios e TVs em troca de apoio político.",
      "envolvidos": "Ministro Antônio Carlos Magalhães, aliados.",
      "consequencias": "",
      "ano": "1987"
    },
    {
      "nome": "Escândalo da Administração de Orestes Quércia",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Corrupção no governo de São Paulo.",
      "envolvidos": "Governador Quércia.",
      "consequencias": "",
      "ano": "1987"
    }
  ],
  "1988": [
    {
      "nome": "CPI da Corrupção",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Investigação de corrupção generalizada no governo.",
      "envolvidos": "Políticos aliados, Sarney.",
      "consequencias": "",
      "ano": "1988"
    }
  ],
  "1989": [
    {
      "nome": "Escândalo do Contrabando das Pedras Preciosas",
      "governo": "Governo Sarney (1985-1990)",
      "descricao": "Contrabando ilegal de gemas.",
      "envolvidos": "Mineradores, autoridades alfandegárias.",
      "consequencias": "",
      "ano": "1989"
    }
  ],
  "1990": [
    {
      "nome": "Escândalo da Aprovação da Lei da Privatização das Estatais",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Irregularidades na lei de privatizações.",
      "envolvidos": "Congresso, Collor.",
      "consequencias": "",
      "ano": "1990"
    },
    {
      "nome": "Escândalo do BC",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Irregularidades no Banco Central.",
      "envolvidos": "Diretores do BC.",
      "consequencias": "",
      "ano": "1990"
    },
    {
      "nome": "Escândalo do BB",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Fraudes no Banco do Brasil.",
      "envolvidos": "Diretores do BB.",
      "consequencias": "",
      "ano": "1990"
    }
  ],
  "1991": [
    {
      "nome": "Programa Nacional de Desestatização",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Fraudes em privatizações.",
      "envolvidos": "Equipe econômica.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo do BCCI",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Lavagem de dinheiro via banco internacional.",
      "envolvidos": "Sérgio Corrêa da Costa.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo da Ceme",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Fraudes em medicamentos.",
      "envolvidos": "Central de Medicamentos.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo da Eletronorte",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Irregularidades em energia.",
      "envolvidos": "Diretores da Eletronorte.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo da Ação Social",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Fraudes em programas sociais.",
      "envolvidos": "Ministério da Ação Social.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo da Merenda",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Desvios em merenda escolar.",
      "envolvidos": "Fornecedores, governos estaduais.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo das Comunicações",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Concessões irregulares.",
      "envolvidos": "Ministério das Comunicações.",
      "consequencias": "",
      "ano": "1991"
    },
    {
      "nome": "Escândalo do Fundo de Participação",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Desvios em repasses a municípios.",
      "envolvidos": "Ministérios.",
      "consequencias": "",
      "ano": "1991"
    }
  ],
  "1992": [
    {
      "nome": "Escândalo do INSS",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Desvios na previdência social.",
      "envolvidos": "Diretores do INSS.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Escândalo da LBA",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Desvios na Legião Brasileira de Assistência.",
      "envolvidos": "Rosane Collor.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Esquema PP",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Corrupção via Paulo César Farias.",
      "envolvidos": "PC Farias, Collor.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Esquema PC",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Compra de apoio político.",
      "envolvidos": "Collor, aliados.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Escândalo do FGTS",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Desvios no fundo de garantia.",
      "envolvidos": "Gestores do FGTS.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Escândalo das Estatais",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Corrupção em empresas públicas.",
      "envolvidos": "Gestores estatais.",
      "consequencias": "",
      "ano": "1992"
    },
    {
      "nome": "Escândalo da Vasp",
      "governo": "Governo Fernando Collor (1990-1992)",
      "descricao": "Favorecimentos à companhia aérea.",
      "envolvidos": "Vasp, governo.",
      "consequencias": "",
      "ano": "1992"
    }
  ],
  "1993": [
    {
      "nome": "Centro Federal de Inteligência",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Criação para combater corrupção, mas controversa.",
      "envolvidos": "Governo federal.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso Edmundo Pinto",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Assassinato ligado a corrupção.",
      "envolvidos": "Edmundo Pinto, políticos.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo do DNOCS",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em obras contra seca.",
      "envolvidos": "Inocêncio Oliveira.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da IBF",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Irregularidades em formulários.",
      "envolvidos": "Indústria Brasileira de Formulários.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Irregularidades no Programa Nacional de Desestatização",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em privatizações.",
      "envolvidos": "Equipe econômica.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso Nilo Coelho",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Acusações de corrupção em Pernambuco.",
      "envolvidos": "Nilo Coelho.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso Queiroz Galvão",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em contratos em Pernambuco.",
      "envolvidos": "Empresa Queiroz Galvão.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Jogo do Bicho",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Ligações com crime organizado no RJ.",
      "envolvidos": "Castor de Andrade.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso Ney Maranhão",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Acusações de corrupção.",
      "envolvidos": "Ney Maranhão.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da Cruz Vermelha Brasileira",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Desvios em ajuda humanitária.",
      "envolvidos": "Dirigentes da Cruz Vermelha.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso José Carlos da Rocha Lima",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Acusações de irregularidades.",
      "envolvidos": "José Carlos da Rocha Lima.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da Fundação Padre Francisco de Assis Castro Monteiro",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Desvios em fundação no CE.",
      "envolvidos": "Gestores da fundação.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da Administração de Jaime Campos",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Irregularidades no MT.",
      "envolvidos": "Governador Jaime Campos.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da Administração de Ottomar Pinto",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em Roraima.",
      "envolvidos": "Governador Ottomar Pinto.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo da Sudene de Pernambuco",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Desvios na Superintendência do Desenvolvimento do Nordeste.",
      "envolvidos": "Gestores da Sudene.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "CPI do Detran",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes no Detran de SC.",
      "envolvidos": "Funcionários do Detran.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Caso Restaurante Gulliver",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Tentativa de assassinato por denúncias na Sudene.",
      "envolvidos": "Ronaldo Cunha Lima, Tarcísio Burity.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "CPI do Pó",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Tráfico de drogas na PB.",
      "envolvidos": "Políticos locais.",
      "consequencias": "",
      "ano": "1993"
    },
    {
      "nome": "Escândalo do Orçamento da União",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Desvios no orçamento federal (Anões do Orçamento).",
      "envolvidos": "Deputados federais.",
      "consequencias": "",
      "ano": "1993"
    }
  ],
  "1994": [
    {
      "nome": "Escândalo do INAMPS",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Desvios na previdência social.",
      "envolvidos": "Diretores do INAMPS.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Caso Eliseu Resende",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Irregularidades em Minas Gerais.",
      "envolvidos": "Eliseu Resende.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Telemig",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Corrupção em telecomunicações em MG.",
      "envolvidos": "Telemig.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Paubrasil",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em engenharia.",
      "envolvidos": "Paubrasil Engenharia.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Administração de Roberto Requião",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Corrupção no PR.",
      "envolvidos": "Governador Requião.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Colac",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes no RS.",
      "envolvidos": "Colac.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Administração de Antônio Carlos Magalhães",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Corrupção na BA.",
      "envolvidos": "Governador ACM.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Administração de Roberto Requião",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Repetição, corrupção no PR.",
      "envolvidos": "Governador Requião.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Prefeitura de Natal",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Corrupção no RN.",
      "envolvidos": "Prefeitos de Natal.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Escândalo da Estacom",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Fraudes em Tocantins.",
      "envolvidos": "Estacom.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Compra e Venda dos Mandatos dos Deputados do PSD",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Corrupção em mandatos.",
      "envolvidos": "Deputados do PSD.",
      "consequencias": "",
      "ano": "1994"
    },
    {
      "nome": "Caso Ricupero",
      "governo": "Governo Itamar Franco (1992-1995)",
      "descricao": "Declarações vazadas sobre economia (Escândalo das Parabólicas).",
      "envolvidos": "Ministro Ricupero.",
      "consequencias": "",
      "ano": "1994"
    }
  ],
  "1995": [
    {
      "nome": "Escândalo do Sivam",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Fraudes em sistema de vigilância da Amazônia.",
      "envolvidos": "Raytheon, ministros.",
      "consequencias": "",
      "ano": "1995"
    },
    {
      "nome": "Escândalo do Proer",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Programa bancário.",
      "envolvidos": "Bancos.",
      "consequencias": "",
      "ano": "1995"
    }
  ],
  "1996": [
    {
      "nome": "Escândalo da Pasta Rosa",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Dossiê com acusações contra opositores.",
      "envolvidos": "Governo FHC.",
      "consequencias": "",
      "ano": "1996"
    },
    {
      "nome": "Escândalo da Administração de Paulo Maluf",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Corrupção em SP.",
      "envolvidos": "Prefeito Maluf.",
      "consequencias": "",
      "ano": "1996"
    },
    {
      "nome": "Caso PC Farias",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Assassinato ligado a corrupção.",
      "envolvidos": "PC Farias.",
      "consequencias": "",
      "ano": "1996"
    }
  ],
  "1997": [
    {
      "nome": "Escândalo da CONAN",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Irregularidades em agência.",
      "envolvidos": "CONAN.",
      "consequencias": "",
      "ano": "1997"
    },
    {
      "nome": "Escândalo da Compra de Votos Para Emenda da Reeleição",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Compra de votos para reeleição.",
      "envolvidos": "Deputados, FHC.",
      "consequencias": "",
      "ano": "1997"
    },
    {
      "nome": "Escândalo da Venda da Companhia Vale do Rio Doce",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao":<think>Deciding which files are relevant...

{
  "complexity": "high",
  "relevantFiles": [
    "src/components/Timeline.tsx",
    "src/pages/Index.tsx",
    "src/lib/utils.ts",
    "src/globals.css",
    "tailwind.config.ts"
  ]
}</think><dyad-codebase-context files="src/components/Timeline.tsx,src/pages/Index.tsx,src/lib/utils.ts,src/globals.css,tailwind.config.ts">Complexity: high</dyad-codebase-context> "Privatização subvalorizada.",
      "envolvidos": "Vale, governo.",
      "consequencias": "",
      "ano": "1997"
    },
    {
      "nome": "Escândalo dos Precatórios",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Fraudes em pagamentos judiciais.",
      "envolvidos": "Prefeitos, juízes.",
      "consequencias": "",
      "ano": "1997"
    },
    {
      "nome": "Quebra do Monopólio do Petróleo",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Criação da ANP com irregularidades.",
      "envolvidos": "Petrobras.",
      "consequencias": "",
      "ano": "1997"
    }
  ],
  "1998": [
    {
      "nome": "Escândalo do BNDES",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Verbas para estatais privatizadas.",
      "envolvidos": "BNDES, empresas.",
      "consequencias": "",
      "ano": "1998"
    },
    {
      "nome": "Escândalo da Telebrás",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Privatização suspeita.",
      "envolvidos": "Telebrás.",
      "consequencias": "",
      "ano": "1998"
    },
    {
      "nome": "Escândalo da Administração do PT",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Denúncias contra PT.",
      "envolvidos": "PT.",
      "consequencias": "",
      "ano": "1998"
    }
  ],
  "1999": [
    {
      "nome": "Escândalo da Previdência",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Desvios na previdência.",
      "envolvidos": "INSS.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo da Encol",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Falência fraudulenta de construtora.",
      "envolvidos": "Encol.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo da Mesbla",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Irregularidades em varejo.",
      "envolvidos": "Mesbla.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo da Desvalorização do Real",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Especulação cambial.",
      "envolvidos": "Banco Central.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo dos Fiscais de São Paulo",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Máfia dos fiscais.",
      "envolvidos": "Fiscais de SP.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo do Mappin",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Fraudes em varejo.",
      "envolvidos": "Mappin.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo dos Bancos",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Fraudes bancárias.",
      "envolvidos": "Bancos privados.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Escândalo da Pane DDD do Sistema Telefônico Privatizado",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Falha no sistema telefônico.",
      "envolvidos": "Empresas privatizadas.",
      "consequencias": "",
      "ano": "1999"
    },
    {
      "nome": "Caso Marka/FonteCindam",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Prejuízos cambiais.",
      "envolvidos": "Bancos.",
      "consequencias": "",
      "ano": "1999"
    }
  ],
  "2000": [
    {
      "nome": "Escândalo do Banestado",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Evasão fiscal via banco.",
      "envolvidos": "Banestado.",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "Escândalo do Banespa",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Privatização suspeita.",
      "envolvidos": "Banespa.",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "Escândalo do Judiciário",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Corrupção no Judiciário.",
      "envolvidos": "Juízes.",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "CPI do Narcotráfico",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Tráfico de drogas.",
      "envolvidos": "Políticos, traficantes.",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "Escândalo dos Medicamentos",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Superfaturamento de remédios.",
      "envolvidos": "Ministério da Saúde.",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "Escândalo dos Desvios de Verbas do TRT-SP",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Desvios no Tribunal Regional do Trabalho.",
      "envolvidos": "Nicolau dos Santos Neto (Lalau).",
      "consequencias": "",
      "ano": "2000"
    },
    {
      "nome": "Corrupção na Prefeitura de São Paulo",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Caso Celso Pitta.",
      "envolvidos": "Prefeito Pitta.",
      "consequencias": "",
      "ano": "2000"
    }
  ],
  "2001": [
    {
      "nome": "CPI do Crime Organizado",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Crime organizado.",
      "envolvidos": "Máfias.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Banda Podre",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Corrupção policial.",
      "envolvidos": "Policiais.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Transbrasil",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Favorecimentos à companhia aérea.",
      "envolvidos": "Transbrasil.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Sudam",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Desvios na Superintendência da Amazônia.",
      "envolvidos": "Gestores da Sudam.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Sudene",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Fraudes no Nordeste.",
      "envolvidos": "Sudene.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Quebra do Sigilo do Painel do Senado",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Violação de sigilo em votações.",
      "envolvidos": "Senadores.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalos no Senado em 2001",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Múltiplos casos.",
      "envolvidos": "Senado.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Escândalo da Administração de Mão Santa",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Corrupção no PI.",
      "envolvidos": "Governador Mão Santa.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Caso Toninho do PT",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Assassinato de prefeito.",
      "envolvidos": "PT.",
      "consequencias": "",
      "ano": "2001"
    },
    {
      "nome": "Caso Toninho do PT",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Assassinato do prefeito de Campinas, suspeitas locais.",
      "envolvidos": "Suspeitos locais, PT.",
      "consequencias": "Sem conexão federal comprovada.",
      "ano": "2001"
    }
  ],
  "2002": [
    {
      "nome": "Dossiê Cayman",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Dossiê falso contra opositores.",
      "envolvidos": "Governo FHC.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Escândalo dos Grampos Contra FHC e Aliados",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Espionagem ilegal.",
      "envolvidos": "ABIN.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Escândalo da Administração da Roseana Sarney",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Corrupção no MA.",
      "envolvidos": "Governadora Roseana Sarney.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Escândalo do Banpará",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Privatização suspeita.",
      "envolvidos": "Banpará.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Caso Lunus",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Caso Roseana Sarney com dinheiro em empresa.",
      "envolvidos": "Roseana Sarney.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Escândalo do Abafamento das CPIs no Governo do FHC",
      "governo": "Governo Fernando Henrique (1995-2003)",
      "descricao": "Bloqueio de investigações.",
      "envolvidos": "FHC, aliados.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Caso Celso Daniel",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Assassinato ligado a corrupção.",
      "envolvidos": "PT local.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Escândalo do Proprinoduto",
      "governo": "Uma Pequena AMOSTRA do Governo Lula (2003-2010)",
      "descricao": "Desvios em obras no RJ.",
      "envolvidos": "Rodrigo Silveirinha.",
      "consequencias": "",
      "ano": "2002"
    },
    {
      "nome": "Caso Celso Daniel",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Assassinato do prefeito petista, alegações de ligação com corrupção no PT.",
      "envolvidos": "Família Daniel, PT local.",
      "consequencias": "Investigações inconclusivas.",
      "ano": "2002"
    },
    {
      "nome": "Escândalo do Propinoduto (Caso Rodrigo Silveirinha)",
      "governo": "Escândalos nos Governos Lula e Dilma",
      "descricao": "Desvios em obras no RJ.",
      "envolvidos": "Políticos locais.",
      "consequencias": "Prisões.",
      "ano": "2002"
    }
  ]
}
`;

const secondJsonPart = `{
  "2003": [
    {
      "titulo": "Caso Pinheiro Landim",
      "descricao": "Acusações de propina.",
      "envolvidos": "Pinheiro Landim."
    },
    {
      "titulo": "Escândalo dos Grampos Contra Políticos da Bahia",
      "descricao": "Gravações ilegais.",
      "envolvidos": "ABIN, políticos baianos."
    },
    {
      "titulo": "Escândalo do Proprinoduto",
      "descricao": "Desvios em obras no RJ.",
      "envolvidos": "Rodrigo Silveirinha."
    },
    {
      "titulo": "CPI do Banestado",
      "descricao": "Evasão fiscal.",
      "envolvidos": "Bancos."
    },
    {
      "titulo": "Escândalo da Suposta Ligação do PT com o MST",
      "descricao": "Financiamento ilegal.",
      "envolvidos": "PT, MST."
    },
    {
      "titulo": "Escândalo da Suposta Ligação do PT com a FARC",
      "descricao": "Apoio a guerrilha.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Privatização das Estatais no Primeiro Ano do Governo Lula",
      "descricao": "Continuação de privatizações.",
      "envolvidos": "Governo Lula."
    },
    {
      "titulo": "Escândalo dos Gastos Públicos dos Ministros",
      "descricao": "Gastos excessivos.",
      "envolvidos": "Ministros."
    },
    {
      "titulo": "Irregularidades do Fome Zero",
      "descricao": "Desvios em programa social.",
      "envolvidos": "Gestores."
    },
    {
      "titulo": "Escândalo do DNIT",
      "descricao": "Corrupção em obras.",
      "envolvidos": "Anderson Adauto, Sérgio Pimentel."
    },
    {
      "titulo": "Licitação Para a Compra de Gêneros Básicos",
      "descricao": "Superfaturamento.",
      "envolvidos": "Governo federal."
    },
    {
      "titulo": "Operação Anaconda",
      "descricao": "Fraudes no Judiciário.",
      "envolvidos": "Juízes."
    },
    {
      "titulo": "Escândalo dos Gafanhotos",
      "descricao": "Desvios agrícolas.",
      "envolvidos": "Funcionários."
    },
    {
      "titulo": "Caso José Eduardo Dutra",
      "descricao": "Irregularidades na Petrobras.",
      "envolvidos": "José Eduardo Dutra."
    },
    {
      "titulo": "Várias Aberturas de Licitações da Presidência Para a Compra de Artigos de Luxo",
      "descricao": "Gastos luxuosos.",
      "envolvidos": "Presidência."
    },
    {
      "titulo": "Lei de Responsabilidade Fiscal",
      "descricao": "Recuos no cumprimento.",
      "envolvidos": "Governo federal."
    },
    {
      "titulo": "Abuso de Medidas Provisórias no Governo Lula entre 2003 e 2004",
      "descricao": "Excesso de MPs.",
      "envolvidos": "Governo Lula."
    }
  ],
  "2004": [
    {
      "titulo": "Escândalo do Ministério do Trabalho",
      "descricao": "Irregularidades em contratos.",
      "envolvidos": "Ministério."
    },
    {
      "titulo": "Caso Agnelo Queiroz",
      "descricao": "Diárias indevidas.",
      "envolvidos": "Agnelo Queiroz."
    },
    {
      "titulo": "Escândalo do Ministério dos Esportes",
      "descricao": "Uso para festa pessoal.",
      "envolvidos": "Agnelo Queiroz."
    },
    {
      "titulo": "Escândalo dos Frangos",
      "descricao": "Fraudes em Roraima.",
      "envolvidos": "Exportadores."
    },
    {
      "titulo": "Escândalo da Norospar",
      "descricao": "Irregularidades em saúde no PR.",
      "envolvidos": "Norospar."
    },
    {
      "titulo": "Escândalo dos Bingos",
      "descricao": "Extorsão para campanhas.",
      "envolvidos": "Waldomiro Diniz."
    },
    {
      "titulo": "Escândalo da ONG Ágora",
      "descricao": "Desvios em convênios.",
      "envolvidos": "ONG Ágora."
    },
    {
      "titulo": "Escândalo dos Copos",
      "descricao": "Licitação para copos de luxo.",
      "envolvidos": "Governo federal."
    },
    {
      "titulo": "Caso Henrique Meirelles",
      "descricao": "Irregularidades financeiras.",
      "envolvidos": "Henrique Meirelles."
    },
    {
      "titulo": "Caso Luiz Augusto Candiota",
      "descricao": "Movimentações suspeitas.",
      "envolvidos": "Luiz Augusto Candiota."
    },
    {
      "titulo": "Caso Cássio Casseb",
      "descricao": "Irregularidades no BB.",
      "envolvidos": "Cássio Casseb."
    },
    {
      "titulo": "Caso Kroll",
      "descricao": "Espionagem.",
      "envolvidos": "Telecom Italia."
    },
    {
      "titulo": "Conselho Federal de Jornalismo",
      "descricao": "Proposta controversa.",
      "envolvidos": "Governo Lula."
    },
    {
      "titulo": "Escândalo dos Vampiros",
      "descricao": "Fraudes em saúde.",
      "envolvidos": "Ministérios."
    },
    {
      "titulo": "Escândalo das Fotos de Herzog",
      "descricao": "Uso político de imagens.",
      "envolvidos": "Governo."
    },
    {
      "titulo": "Uso dos Assessores em Campanha Eleitoral de 2004",
      "descricao": "Abuso de estrutura.",
      "envolvidos": "Assessores."
    },
    {
      "titulo": "Irregularidades na Bolsa-Escola",
      "descricao": "Desvios no programa.",
      "envolvidos": "Gestores."
    }
  ],
  "2005": [
    {
      "titulo": "Expulsão dos Políticos do PT",
      "descricao": "Expulsões por corrupção.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Escândalo do PTB",
      "descricao": "Oferta de cargos por apoio.",
      "envolvidos": "PTB."
    },
    {
      "titulo": "Caso Antônio Celso Cipriani",
      "descricao": "Acusações vagas.",
      "envolvidos": "Antônio Celso Cipriani."
    },
    {
      "titulo": "Caso Flamarion Portela",
      "descricao": "Corrupção em RR.",
      "envolvidos": "Flamarion Portela."
    },
    {
      "titulo": "Irregularidades na Bolsa-Família",
      "descricao": "Fraudes no programa.",
      "envolvidos": "Beneficiários falsos."
    },
    {
      "titulo": "Irregularidades do Programa Restaurante Popular",
      "descricao": "Favorecimento a prefeituras PT.",
      "envolvidos": "Programa."
    },
    {
      "titulo": "Escândalo dos Correios",
      "descricao": "Propina filmada.",
      "envolvidos": "Maurício Marinho."
    },
    {
      "titulo": "Escândalo do IRB",
      "descricao": "Fraudes em resseguros.",
      "envolvidos": "IRB."
    },
    {
      "titulo": "Escândalo da Novadata",
      "descricao": "Irregularidades em tecnologia.",
      "envolvidos": "Novadata."
    },
    {
      "titulo": "Escândalo da Usina de Itaipu",
      "descricao": "Desvios.",
      "envolvidos": "Itaipu."
    },
    {
      "titulo": "Escândalo das Furnas",
      "descricao": "Propinas.",
      "envolvidos": "Furnas."
    },
    {
      "titulo": "Escândalo do Mensalão",
      "descricao": "Compra de votos.",
      "envolvidos": "PT, José Dirceu."
    },
    {
      "titulo": "Escândalo do Leão & Leão",
      "descricao": "Máfia do lixo.",
      "envolvidos": "Prefeitura de Ribeirão Preto."
    },
    {
      "titulo": "Escândalo da Secom",
      "descricao": "Irregularidades em publicidade.",
      "envolvidos": "Secom."
    },
    {
      "titulo": "Esquema de Corrupção no Diretório Nacional do PT",
      "descricao": "Parte do mensalão.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Escândalo do Brasil Telecom",
      "descricao": "Espionagem.",
      "envolvidos": "Brasil Telecom."
    },
    {
      "titulo": "Escândalo da CPEM",
      "descricao": "Consultoria suspeita.",
      "envolvidos": "CPEM."
    },
    {
      "titulo": "Escândalo da SEBRAE",
      "descricao": "Dívida quitada indevidamente.",
      "envolvidos": "Paulo Okamotto."
    },
    {
      "titulo": "Escândalo dos Dólares na Cueca",
      "descricao": "Propina apreendida.",
      "envolvidos": "PT/CE."
    },
    {
      "titulo": "Escândalo do Banco Santos",
      "descricao": "Falência fraudulenta.",
      "envolvidos": "Banco Santos."
    },
    {
      "titulo": "Escândalo da Interbrazil",
      "descricao": "Acusações vagas.",
      "envolvidos": "Interbrazil."
    },
    {
      "titulo": "Caso Toninho da Barcelona",
      "descricao": "Assassinato ligado a narcotráfico.",
      "envolvidos": "Toninho da Barcelona."
    },
    {
      "titulo": "Escândalo do Banco BMG",
      "descricao": "Empréstimos fraudulentos.",
      "envolvidos": "BMG."
    },
    {
      "titulo": "Escândalo dos Fundos de Pensão",
      "descricao": "Desvios.",
      "envolvidos": "Fundos de pensão."
    },
    {
      "titulo": "Escândalo do Foro de São Paulo",
      "descricao": "Alegações ideológicas.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Escândalo do Mensalinho",
      "descricao": "Esquemas locais.",
      "envolvidos": "Municipais."
    },
    {
      "titulo": "Caixa com dólares da FARC na CPI dos Correios",
      "descricao": "Financiamento para eleição de Lula.",
      "envolvidos": "Palocci, FARC."
    }
  ],
  "2006": [
    {
      "titulo": "Escândalo da Gamecorp-Telemar",
      "descricao": "Contratos suspeitos.",
      "envolvidos": "Fábio Luís Lula da Silva."
    },
    {
      "titulo": "Caso dos Dólares de Cuba",
      "descricao": "Doações alegadas.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Doação de Roupas da Lu Alckmin",
      "descricao": "Doações pessoais controversas.",
      "envolvidos": "Lu Alckmin."
    },
    {
      "titulo": "Doação de Terninhos de Marísa da Silva",
      "descricao": "Gastos pessoais.",
      "envolvidos": "Marísa Letícia."
    },
    {
      "titulo": "Escândalo da Quebra do Sigilo Bancário do Caseiro Francenildo",
      "descricao": "Violação de sigilo.",
      "envolvidos": "Antonio Palocci."
    },
    {
      "titulo": "Escândalo das Cartilhas do PT",
      "descricao": "Propaganda irregular.",
      "envolvidos": "PT."
    },
    {
      "titulo": "Esquema do Plano Safra Legal",
      "descricao": "Fraudes agrícolas.",
      "envolvidos": "Funcionários."
    },
    {
      "titulo": "Escândalo das Vendas de Madeira da Amazônia",
      "descricao": "Exploração ilegal.",
      "envolvidos": "MMA."
    },
    {
      "titulo": "Crise da Varig",
      "descricao": "Falência.",
      "envolvidos": "Varig."
    },
    {
      "titulo": "Escândalo das Sanguessugas",
      "descricao": "Fraudes em ambulâncias.",
      "envolvidos": "Parlamentares."
    },
    {
      "titulo": "Escândalo dos Gastos de Combustíveis dos Deputados",
      "descricao": "Abusos em verbas.",
      "envolvidos": "Deputados."
    },
    {
      "titulo": "CPI da Imigração Ilegal",
      "descricao": "Tráfico humano.",
      "envolvidos": "Imigração."
    },
    {
      "titulo": "CPI do Tráfico de Armas",
      "descricao": "Armas ilegais.",
      "envolvidos": "Traficantes."
    },
    {
      "titulo": "Escândalo da Suposta Ligação do PT com o PCC",
      "descricao": "Alegações não comprovadas.",
      "envolvidos": "PT, PCC."
    },
    {
      "titulo": "Escândalo da Suposta Ligação do PT com o MLST",
      "descricao": "Alegações não comprovadas.",
      "envolvidos": "PT, MLST."
    },
    {
      "titulo": "Operação Dominó",
      "descricao": "Fraudes em RO.",
      "envolvidos": "Locais."
    },
    {
      "titulo": "Escândalo do Vazamento de Informações da Operação Mão-de-Obra",
      "descricao": "Vazamentos.",
      "envolvidos": "PF."
    },
    {
      "titulo": "Escândalo dos Funcionários Federais Empregados que não Trabalhavam",
      "descricao": "Funcionários fantasmas.",
      "envolvidos": "Federais."
    },
    {
      "titulo": "Mensalinho nas Prefeituras do Estado de São Paulo",
      "descricao": "Esquemas locais.",
      "envolvidos": "Prefeituras SP."
    },
    {
      "titulo": "Escândalo dos Grampos no TSE",
      "descricao": "Espionagem eleitoral.",
      "envolvidos": "TSE."
    },
    {
      "titulo": "Escândalo do Dossiê",
      "descricao": "Dossiê falso.",
      "envolvidos": "PT."
    },
    {
      "titulo": "ONG Unitrabalho",
      "descricao": "Desvios.",
      "envolvidos": "Unitrabalho."
    },
    {
      "titulo": "Escândalo dos Fiscais do IBAMA do Rio de Janeiro",
      "descricao": "Corrupção ambiental.",
      "envolvidos": "Fiscais IBAMA."
    },
    {
      "titulo": "Escândalo da Venda da Varig",
      "descricao": "Privatização suspeita.",
      "envolvidos": "Varig."
    },
    {
      "titulo": "Caso Pinheiro Landim",
      "descricao": "Propina.",
      "envolvidos": "Pinheiro Landim."
    }
  ],
  "2007": [
    {
      "titulo": "Operação Confraria",
      "descricao": "Corrupção no PI.",
      "envolvidos": "Políticos locais."
    },
    {
      "titulo": "Operação Saúva",
      "descricao": "Desvios em MS.",
      "envolvidos": "Locais."
    },
    {
      "titulo": "CPI das ONGs",
      "descricao": "Investigação de ONGs.",
      "envolvidos": "ONGs."
    },
    {
      "titulo": "Operação Testamento",
      "descricao": "Fraudes em testamentos.",
      "envolvidos": "Cartórios."
    },
    {
      "titulo": "CPI do Apagão Aéreo",
      "descricao": "Crise aéreo.",
      "envolvidos": "Setor aéreo."
    },
    {
      "titulo": "Operação Hurricane",
      "descricao": "Jogos ilegais.",
      "envolvidos": "Juízes."
    },
    {
      "titulo": "Operação Navalha",
      "descricao": "Desvios em obras.",
      "envolvidos": "Empresas."
    },
    {
      "titulo": "Operação Xeque-Mate",
      "descricao": "Fraudes em loterias.",
      "envolvidos": "Loterias."
    },
    {
      "titulo": "Operação Moeda Verde",
      "descricao": "Corrupção ambiental em SC.",
      "envolvidos": "Locais em SC."
    },
    {
      "titulo": "Caso Renan Calheiros",
      "descricao": "Acusações éticas.",
      "envolvidos": "Renan Calheiros."
    },
    {
      "titulo": "Operação Sétimo Céu",
      "descricao": "Fraudes em aviação.",
      "envolvidos": "Aviação."
    },
    {
      "titulo": "Operação Hurricane II",
      "descricao": "Continuação de jogos ilegais.",
      "envolvidos": "Juízes."
    },
    {
      "titulo": "Caso Joaquim Roriz",
      "descricao": "Corrupção no DF.",
      "envolvidos": "Joaquim Roriz."
    },
    {
      "titulo": "Operação Hurricane III",
      "descricao": "Mesma série.",
      "envolvidos": "Juízes."
    },
    {
      "titulo": "Escândalo do Corinthians",
      "descricao": "Lavagem em futebol.",
      "envolvidos": "MSI, Corinthians."
    },
    {
      "titulo": "Crise no Setor Aéreo Brasileiro",
      "descricao": "Caos em aeroportos.",
      "envolvidos": "Setor aéreo."
    },
    {
      "titulo": "CPI da Crise Aérea",
      "descricao": "Investigação da crise aéreo.",
      "envolvidos": "Congresso."
    },
    {
      "titulo": "Caso Agnelo Queiroz",
      "descricao": "Diárias indevidas do COB.",
      "envolvidos": "Agnelo Queiroz."
    },
    {
      "titulo": "Escândalo do Ministério dos Esportes",
      "descricao": "Uso de estrutura para festa pessoal.",
      "envolvidos": "Agnelo Queiroz."
    }
  ],
  "2008": [
    {
      "titulo": "Escândalo de Cartões de Crédito Corporativos da Presidência",
      "descricao": "Uso indevido.",
      "envolvidos": "Presidência."
    },
    {
      "titulo": "Escândalo dos Grampos na Abin",
      "descricao": "Espionagem.",
      "envolvidos": "ABIN."
    },
    {
      "titulo": "Escândalo da Nossa Caixa",
      "descricao": "Venda suspeita.",
      "envolvidos": "Nossa Caixa."
    },
    {
      "titulo": "Escândalo Daniel Dantas",
      "descricao": "Fraudes financeiras.",
      "envolvidos": "Daniel Dantas."
    },
    {
      "titulo": "Operação Águas Profundas",
      "descricao": "Caso Petrobras.",
      "envolvidos": "Petrobras."
    },
    {
      "titulo": "Escândalo dos Grampos",
      "descricao": "Gravações ilegais pela ABIN.",
      "envolvidos": "ABIN, autoridades."
    },
    {
      "titulo": "Esposa de líder das FARC no Ministério da Pesca",
      "descricao": "Emprego para familiar de guerrilheiro.",
      "envolvidos": "Olivério Medina, Dilma Rousseff."
    },
    {
      "titulo": "Mensagem em computador de Raúl Reyes",
      "descricao": "Apoio da cúpula brasileira.",
      "envolvidos": "Celso Amorim, FARC."
    }
  ],
  "2009": [
    {
      "titulo": "Escândalo da Renascer em Cristo",
      "descricao": "Fraudes em igreja.",
      "envolvidos": "Líderes da Renascer."
    }
  ],
  "2010": [
    {
      "titulo": "Erenice Guerra",
      "descricao": "Tráfico de influência na Casa Civil.",
      "envolvidos": "Erenice Guerra, familiares."
    },
    {
      "titulo": "Antes da posse - Pedro Novais",
      "descricao": "Uso de verba para motel.",
      "envolvidos": "Pedro Novais."
    },
    {
      "titulo": "PCC vai investir em terrorismo",
      "descricao": "Alegações de expansão do PCC com FARC.",
      "envolvidos": "PCC, FARC."
    },
    {
      "titulo": "PCC atua com FARC e EPP",
      "descricao": "Colaboração com guerrilheiros asilados.",
      "envolvidos": "PCC, FARC, governo Lula."
    },
    {
      "titulo": "Ataques em estados da oposição",
      "descricao": "Ataques seletivos em SP, MG, SC.",
      "envolvidos": "Organizações criminosas."
    },
    {
      "titulo": "Mudanças na legislação prisional",
      "descricao": "Redução da população carcerária.",
      "envolvidos": "Governo federal."
    }
  ],
  "2011": [
    {
      "titulo": "Operação Voucher",
      "descricao": "Desvios no Turismo.",
      "envolvidos": "Servidores do Ministério do Turismo."
    },
    {
      "titulo": "Palocci é o primeiro",
      "descricao": "Aumento patrimonial suspeito.",
      "envolvidos": "Antonio Palocci."
    },
    {
      "titulo": "Explode a crise nos Transportes",
      "descricao": "Propinas e superfaturamento.",
      "envolvidos": "Alfredo Nascimento, DNIT, Valec."
    },
    {
      "titulo": "Escândalo na Agricultura",
      "descricao": "Irregularidades na Conab.",
      "envolvidos": "Wagner Rossi."
    },
    {
      "titulo": "Agora no Ministério dos Esportes",
      "descricao": "Desvios em programas.",
      "envolvidos": "Orlando Silva."
    },
    {
      "titulo": "Antonio Palocci",
      "descricao": "Repetição, quebra de sigilo.",
      "envolvidos": "Palocci."
    },
    {
      "titulo": "Ideli Salvatti",
      "descricao": "Irregularidades em lanchas.",
      "envolvidos": "Ideli Salvatti, PT-SC."
    },
    {
      "titulo": "Ministério do Trabalho",
      "descricao": "Propina de ONGs.",
      "envolvidos": "Carlos Lupi."
    },
    {
      "titulo": "Escândalo do Ministério do Trabalho",
      "descricao": "Irregularidades em contratos.",
      "envolvidos": "Carlos Lupi."
    }
  ],
  "2012": [
    {
      "titulo": "Em 2012 - Mário Negromonte",
      "descricao": "Ligações com lobistas.",
      "envolvidos": "Mário Negromonte."
    },
    {
      "titulo": "Outro em 2012 - Rosemary Noronha",
      "descricao": "Tráfico de influência.",
      "envolvidos": "Rosemary Noronha."
    },
    {
      "titulo": "Fernando Pimentel",
      "descricao": "Tráfico de influência em consultoria.",
      "envolvidos": "Fernando Pimentel."
    },
    {
      "titulo": "Rosemary Novoa de Noronha e José Weber Holanda",
      "descricao": "Propinas em agências reguladoras (Operação Porto Seguro).",
      "envolvidos": "Rosemary Noronha, José Weber Holanda."
    },
    {
      "titulo": "Tese de Toffoli no STF",
      "descricao": "Punição apenas para crimes de sangue.",
      "envolvidos": "Dias Toffoli."
    },
    {
      "titulo": "Legalização de contratos do mensalão",
      "descricao": "Nomeação de Ana Arraes no TCU.",
      "envolvidos": "Lula, Ana Arraes."
    },
    {
      "titulo": "Caso Rosemary",
      "descricao": "Influência indevida.",
      "envolvidos": "Rosemary Noronha."
    }
  ],
  "2014": [
    {
      "titulo": "Escândalo do Petrolão",
      "descricao": "Esquema de corrupção na Petrobras com desvios bilhões via propinas de empreiteiras.",
      "envolvidos": "PT, empreiteiras como Odebrecht, políticos como Lula."
    },
    {
      "titulo": "Escândalo na Copa do Mundo 2014",
      "descricao": "Isenções fiscais à FIFA.",
      "envolvidos": "Governo, FIFA."
    }
  ],
  "2015": [
    {
      "titulo": "Caso Delcídio do Amaral",
      "descricao": "Tentativa de obstruir Lava Jato.",
      "envolvidos": "Delcídio Amaral, Cerveró, Lula, Dilma."
    },
    {
      "titulo": "Pedaladas Fiscais",
      "descricao": "Manobras contábeis ilegais.",
      "envolvidos": "Dilma, equipe econômica."
    },
    {
      "titulo": "Operação Zelotes",
      "descricao": "Fraudes no CARF, envolvendo filho de Lula.",
      "envolvidos": "Luís Cláudio Lula da Silva, conselheiros."
    },
    {
      "titulo": "Escândalo da Eletronuclear",
      "descricao": "Desvios em Angra 3, ligado à Lava Jato.",
      "envolvidos": "Othon Luiz Pinheiro da Silva, empreiteiras."
    },
    {
      "titulo": "Operação Águas Profundas (Caso Petrobras)",
      "descricao": "Parte da Lava Jato.",
      "envolvidos": "Petrobras."
    }
  ],
  "2016": [
    {
      "titulo": "Pedaladas Fiscais",
      "descricao": "Manobras contábeis ilegais.",
      "envolvidos": "Dilma, equipe econômica."
    },
    {
      "titulo": "Operação Zelotes",
      "descricao": "Fraudes no CARF, envolvendo filho de Lula.",
      "envolvidos": "Luís Cláudio Lula da Silva, conselheiros."
    }
  ],
  "2001": [
    {
      "titulo": "Caso Toninho do PT",
      "descricao": "Assassinato de prefeito.",
      "envolvidos": "PT."
    }
  ],
  "2002": [
    {
      "titulo": "Caso Celso Daniel",
      "descricao": "Assassinato ligado a corrupção.",
      "envolvidos": "PT local."
    },
    {
      "titulo": "Escândalo do Propinoduto (Caso Rodrigo Silveirinha)",
      "descricao": "Desvios em obras no RJ.",
      "envolvidos": "Políticos locais."
    }
  ],
  "2003-2010": [
    {
      "titulo": "Escândalo de Corrupção dos Ministros no Governo Lula",
      "descricao": "Múltiplos casos.",
      "envolvidos": "Ministros."
    }
  ]
}
`;

interface ScandalEvent {
  nome: string;
  descricao: string;
  envolvidos: string;
  governo: string;
  consequencias: string;
  year: number;
  yearLabel: string;
}

const processScandalsData = (): ScandalEvent[] => {
  try {
    const data1 = JSON.parse(rawJsonContent);
    const data2 = JSON.parse(secondJsonPart);
    
    const allEvents: ScandalEvent[] = [];

    // Processar data1
    for (const key in data1) {
      const yearStr = key.split('-')[0].replace('s', '0');
      const year = parseInt(yearStr, 10);
      if (isNaN(year)) continue;

      data1[key].forEach((event: any) => {
        allEvents.push({
          nome: event.nome,
          descricao: event.descricao,
          envolvidos: event.envolvidos,
          governo: event.governo || 'Não especificado', // Adicionar fallback para 'governo'
          consequencias: event.consequencias || '', // Adicionar fallback para 'consequencias'
          year: year,
          yearLabel: key,
        });
      });
    }

    // Processar data2
    for (const key in data2) {
      const yearStr = key.split('-')[0].replace('s', '0');
      const year = parseInt(yearStr, 10);
      if (isNaN(year)) continue;

      data2[key].forEach((event: any) => {
        allEvents.push({
          nome: event.titulo, // Usar 'titulo' para 'nome'
          descricao: event.descricao,
          envolvidos: event.envolvidos,
          governo: event.governo || 'Não especificado', // Adicionar fallback para 'governo'
          consequencias: event.consequencias || '', // Adicionar fallback para 'consequencias'
          year: year,
          yearLabel: key,
        });
      });
    }

    // Remover duplicatas baseadas no nome do evento
    const uniqueEvents = Array.from(new Map(allEvents.map(e => [e.nome, e])).values());
    
    return uniqueEvents.sort((a, b) => a.year - b.year);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return [];
  }
};

const Index = () => {
  const events = processScandalsData();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Timeline events={events} />
    </div>
  );
};

export default Index;