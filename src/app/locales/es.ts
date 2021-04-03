import type { LocaleDictionary } from "../i18n/localization";

export default {
  common: {
    app_name: "Predictive Text Studio",
    back: "Atrás",
    help: "Ayuda",
    excel: "Excel",
    google_sheets: "Google Sheets",
    tsv: "TSV",
    example: "Ejemplo",
    upload: "Carga",
    direct_entry: "Direct entry",
    error: "Error",
    bcp47_tag: "Código de idioma BCP-47",
    name: "Nombre",
    size: "Tamaño",
    type: "Tipo",
    actions: "Accions",
    table_name: "Nombre de tabla",
    word: "Palabra",
    count: "Ocurencias",
    optional: "Opcionál",
    save: "Guardar",
    close: "Cerrar",
    or: "o",
  },
  input: {
    enter_bcp47_tag: "Enter the BCP 47 Tag",
    invalid_bcp47_tag: "Código de idioma no valido",
    download_kmp_package: "Descara archivo KMP",
    read_values: "Lee valors",
    connection_error: "No se pudo conectar a Hojas de Cálculo de Google",
    invalid_google_sheets_url:
      "no es un URL valído de Hojas de Cálculo de Google. Por favor, trata de nuevo.",
    language: "Idioma",
    author_or_organization: "Autor u organización",
    shortcode: "Código corto",
    dictionary_name: "Nombre de diccionario",
    model_id: "Código de modelo",
    copyright: "Derechos",
    keyboard_preview: "Vista previa",
    keyboard_preview_alt: "Un teclado iOS para inglés",
    add_source: "Agrega diccionario",
    add_row: "Agrega fila",
    drag_and_drop: "¡Arrasta un archivo Excel .xlsx o TSV file aquí!",
    browse_file: "carga archivo",
    advanced_options: "Opciones avacadas",
    only_works_with:
      "*Sólo funcciona con archivos Excel .xlsx y Hojas de Cálculo de Google",
    spreadsheet_word_column: "la columna que contiene palabras",
    spreadsheet_count_column: "la columna que contiene occurencias",
    no_custom_word_column:
      "¡No has escojído la columna que contiene las palabras! Usando columna",
    no_custom_count_column:
      "¡No has escojído la columna que contiene las occurencias! Usando columna",
  },
  page: {
    help: {
      title: "¿Qué tengo que cargar?",
      intro:
        "Predictive Text Studio usa la hoja de cálculo que cargas en el diccionario de tu teclado. " +
        "La columna “palabras” contiene palabras de tu idioma cuales quieres sugirir en tu tecaldo predictivo. " +
        "La columna “occurrencias” opcionalmente da las veces que ocurre la palabra en tu idioma.",
      excel_instruction:
        'Create an Excel file with "Word" in the A column and "Count" in the B column. You may upload the Excel file directly to the Upload Area.',
      google_sheets_instruction:
        'Create a Google Sheets spreadsheet with "Word" in the A column and "Count" in the B column. When you have completed the spreadsheet press the "Share" button in the top right corner of the Google Sheets interface and copy a link which "Anyone on the internet with this link can view". You may now paste this link in the Google Sheets URL input.',
      tsv_instruction:
        "TSV (en inglés: Tab Separated Values) es un archivo que contiene valores separados por tabulaciones. " +
        "Así como Excel o Hojas de Cálculo de Google, " +
        'create a text file with "Word" in the first column and "Count" in the second column. Segurate que tu archivo tiene la extencion “.tsv” y cargala en la area de cargas. ' +
        "Para detalles técnicas sobre el formato .TSV, por favor hecha un vistazo al",
      keyman: "sito web de Keyman",
    },
    main: {
      title: "Le damos la bienvenida a Predictive Text Studio",
      designed_for: "diseñado para",
      add: "Agrega",
      prediction: "sugerencias",
      and: "y",
      autocorrect: "autocorrección",
      to_your_language: "para tu idioma",
      get_started: "Empezamos",
      step_one: "Primero: elige tu idioma",
      step_two: "Segundo: Agrega una lista de palabras",
      customize: "Configurar",
      privacy_policy: "Política de privacidad",
      about_the_team: "Sobre el equipo",
    },
    lang: {
      go_back_to_main_page: "Regresa a la página principal",
      information: "Información",
      sources: "Fuentes de diccionario",
      download: "Descarga",
    },
    privacy: {
      title: "Política de Privacidada de Predictive Text Studio",
      effective_as_of: "A partir de",
      introduction: {
        title: "Introduction",
        head: {
          0: "This Privacy Policy (“Privacy Policy”) applies to the use of the website and products provided by Predictive Text Studio (hereinafter also referred as “we” or “us”).",
          1: "This Privacy Policy applies and has effect in respect of all services and other products, software, made available by us, as well as any other online features relating to the website and its content (the “Service(s)”).",
          2: "If you have any questions or comments about this Privacy Policy, please contact us at",
          3: "We are committed to protecting and respecting your privacy. The Privacy Policy explains the basis on which personal information we collect from you will be processed by us or on our behalf. Where we decide the purpose or means for which personal data you supply through these Services is processed, we are the “controller”. Where you decide the purpose or means for which personal data you supply through these Services is processed, you are the “controller”. We will comply with proper and applicable data protection laws, including the General Data Protection Regulation 2016/679.",
          4: "We encourage you to read this Privacy Policy carefully as it contains important information about the following",
        },
        policy: {
          0: "What information we may collect about you;",
          1: "How we will use the information we collect about you;",
          2: "Whether we will disclose your details to anyone else; and",
          3: "Your choices and rights regarding the personal information you have provided to us.",
        },
        foot: {
          0: "The Services may contain links to services owned and operated by third parties. We may also use some third-parties software or products to provide you with the Service properly. If we do so and provide third-parties of any personal data you can be sure the transfer is legal and secured. These third-party services may have their own privacy policies and we recommend that you review them. They will govern the use of personal information that you submit or which is collected by cookies and other tracking technologies whilst using these services. We do not accept any responsibility or liability for the privacy practices of such third party services and your use of these is at your own risk.",
          1: "We may make changes to this Privacy Policy in the future. You should check this page from time to time to ensure you are aware of any changes. Where appropriate we may notify you of such changes.",
        },
      },
      information: {
        title: "Information we may collect about you",
        main:
          "We do not collect or store any of the data you supply to us while using the Service or website. All data is stored locally on your browser.",
      },
      personal_data: {
        title: "Collecting, processing and using personal data",
        main: "We do not store or process any personal data.",
      },
      purpose_of_processing: {
        title: "Why we collect information about you - purpose of processing",
        main:
          "We will use information you provide for delivering our Services to you under the terms of use agreed between us. The processing of information in this way is necessary for us to provide you the Service properly and to ensure the features function properly so that you have the best Service possible.",
      },
      cookies: {
        title: "Cookies and Web Beacons",
        main: "We do not use cookies or web beacons.",
      },
      log_files: {
        title: "Log files",
        main: "Log files do not contain any personal data.",
      },
      children: {
        title: "Children personal data",
        main:
          "We do not collect personal information from anyone including those under the age of 18. We encourage parents and legal guardians to monitor their children’s Internet usage and to help enforce this Policy by instructing their children never to provide personal information through the websites or Services.",
      },
      data_sharing: {
        title: "Data sharing",
        main: {
          0: "We do not share your data with any third parties.",
          1: "Required by law: We may disclose information to the extent that we are required to do so by law (which may include to government bodies and law enforcement agencies); in connection with any legal proceedings or prospective legal proceedings; and in order to establish, exercise or defend our legal rights.",
        },
      },
      data_transmission: {
        title: "Data transmission",
        main: "We do not transmit you data.",
      },
      your_rights: {
        title: "Your rights",
        main:
          "You have the following rights over the way your personal data are processed.",
        request: "To make a request, please let us know by sending an email to",
        rights: {
          0: "You have the right to request a copy of the personal information we process about you and to have any inaccuracies corrected.",
          1: "You can ask for supplying, correcting or deleting personal information held about you.",
          2: "You can ask us to restrict, stop processing, or to delete your personal data.",
          3: "You can withdraw your consent for data processing.",
          4: "Obtain a copy of your personal data, which you can use with another service provider.",
          5: "Make a complaint to a Supervisory Authority.",
        },
      },
      changes_to_policy: {
        title: "Changes to this privacy policy",
        main:
          "This Privacy Policy may be updated from time to time. We encourage you to review this website for the latest information on our privacy practices. If there are any material changes to this Privacy Policy, you will be notified by posting a notice on the website prior to the change becoming effective. If you do not accept any changes made to this Privacy Policy, please discontinue the use of the website and the Services. This Privacy Policy has been created with the help of",
        source: "Privacy Policy Generator",
      },
    },
    team: {
      title: "Equipo",
      intro: "La gente que han desarrollado Predictive Text Studio",
      core_maintainers: "Mantenador principal",
      team_members: "Miembros de equipo",
    },
  },
} as LocaleDictionary;
