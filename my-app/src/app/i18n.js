import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "fr",
        resources: {
            fr: {
                translation: {
                    infoInicio: "Suivi des Cotations en Temps Réel : Heure, Semaine, Mois.",
                    textoInicio: "Nous proposons une plateforme interactive permettant de suivre les cotations des titres financiers en temps réel, avec des options de visualisation détaillées pour chaque période souhaitée. Vous pouvez consulter les variations des cours d’une action ou d’un indice financier selon trois fréquences",
                    porHora: "_Par Heure",
                    porSemana: "_Par Semaine",
                    porMes: "_Par Mois",
                    inicio: "Début",
                    sobreNosotros: "À propos de nous",
                    cotizaciones: "Cotations boursières",
                    quienesSomos: "Qui sommes-nous ?",
                    textoQuienesSomos: " Euronext est la principale bourse de valeurs en Europe, avec des marchés en France, aux Pays-Bas, en Belgique, au Portugal et en Irlande. Nous fournissons des informations financières en temps réel, permettant aux investisseurs et aux entreprises d'accéder à des données clés sur les cotations des actions, des indices, des obligations et des produits dérivés sur nos marchés.",
                    nuestraMision: "Notre mission",
                    textoNuestraMision: "Notre mission est d’offrir une plateforme fiable et transparente pour consulter les données les plus récentes sur les marchés financiers. Nous facilitons l’accès à des informations précieuses qui aident les investisseurs à prendre des décisions éclairées, tout en favorisant la transparence des marchés européens.",
                    datoImportante: "Un fait important",
                    textoDatoImportante: "Euronext se distingue par son engagement envers la transparence et l'exactitude des informations. Nos services sont conçus pour fournir des données financières en temps réel, offrant ainsi aux utilisateurs une vision claire et complète de l'évolution des marchés, sans que des transactions ne puissent être effectuées directement sur notre plateforme.",
                    
                    grafico: "Comparaison des indices",
                    contacto: "Contactez-nous",
                    sitioOficial: "Site officiel:",
                    direccion:"Adresse",
                    seguinos:"Suivez-nous",
                    copyright:"Tous droits réservés",


                },
            },
            es: {
                translation: {
                    infoInicio: "Seguimiento de las Cotizaciones en Tiempo Real: Hora y Mes.",
                    textoInicio: "Proponemos una plataforma interactiva que permite seguir las cotizaciones de los títulos financieros en tiempo real, con opciones de visualización detalladas para cada período deseado. Puede consultar las variaciones de los precios de una acción o un índice financiero según tres frecuencias:",
                    porHora: "_Por Hora",
                    porSemana: "_Por Semana",
                    porMes: "_Por Mes.",
                    inicio: "Inicio",
                    sobreNosotros: "Acerca de nosotros",
                    cotizaciones:"Cotizaciones bursátiles", 
                    quienesSomos: "¿Quiénes somos?",
                    textoQuienesSomos: "Euronext es la principal bolsa de valores en Europa, con mercados en Francia, Países Bajos, Bélgica, Portugal e Irlanda. Proporcionamos información financiera en tiempo real, permitiendo a los inversores y las empresas acceder a datos clave sobre las cotizaciones de acciones, índices, bonos y productos derivados en nuestros mercados.",
                    nuestraMision: "Nuestra misión",
                    textoNuestraMision: "Nuestra misión es ofrecer una plataforma confiable y transparente para consultar los datos más recientes sobre los mercados financieros. Facilitamos el acceso a información valiosa que ayuda a los inversores a tomar decisiones informadas, promoviendo al mismo tiempo la transparencia de los mercados europeos.",
                    datoImportante: "Un dato importante",
                    textoDatoImportante: "Euronext se distingue por su compromiso con la transparencia y la exactitud de la información. Nuestros servicios están diseñados para proporcionar datos financieros en tiempo real, ofreciendo así a los usuarios una visión clara y completa de la evolución de los mercados, sin que se puedan realizar transacciones directamente en nuestra plataforma.",                   
                    grafico: "Comparación de los índices",
                    contacto: "Contáctenos",
                    sitioOficial: "Sitio oficial:",
                    direccion:"Dirección",
                    seguinos:"Síguenos",
                    copyright:"Todos los derechos reservados",
                },
            },


        }


    });