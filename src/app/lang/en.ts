import type Localization from "./localization";

export default {
  common: {
    app_name: "Predictive Text Studio",
    back: "Back",
    help: "Help",
    excel: "Excel",
    google_sheets: "Google Sheets",
    tsv: "TSV",
    example: "Example",
    upload: "Upload",
    direct_entry: "Direct entry",
    error: "Error",
    bcp47_tag: "BCP47 Tag",
    name: "Name",
    size: "Size",
    type: "Type",
    actions: "Actions",
    table_name: "Table Name",
    word: "Word",
    count: "Count",
    optional: "Optional",
    save: "Save",
    close: "Close",
    or: "or",
    add: "Add",
  },
  input: {
    enter_bcp47_tag: "Enter the BCP 47 Tag",
    invalid_bcp47_tag: "Invalid BCP 47 Tag",
    download_kmp_package: "Download KMP Package",
    read_values: "Read Values",
    connection_error: "Could not connect to Google Sheets",
    invalid_google_sheets_url:
      "is not a valid Google Sheets URl. Please paste a valid one.",
    language: "Language",
    author_or_organization: "Author or Organization",
    shortcode: "Shortcode",
    dictionary_name: "Dictionary Name",
    model_id: "Model ID",
    copyright: "Copyright",
    keyboard_preview: "Keyboard Preview",
    keyboard_preview_alt: "An iOS keyboard in English",
    add_source: "Add Source",
    add_row: "Add Row",
    drag_and_drop: "Drag and drop an Excel .xlsx or TSV file here!",
    browse_file: "Browse file",
    advanced_options: "Advanced options",
    only_works_with: "*Only works with .xlsx files and Google Sheets",
    spreadsheet_word_column: "Spreadsheet Word Column",
    spreadsheet_count_column: "Spreadsheet Count Column",
    no_custom_word_column: "No custom word column specified! Defaulting to",
    no_custom_count_column: "No custom count column specified! Defaulting to",
    existing_project_warning: "You already have a project started!",
    existing_project_continue_prompt: "Would you like to continue?",
    continue: "Continue",
  },
  page: {
    help: {
      title: "What Do I Upload?",
      intro:
        'Predictive Text Studio uses the spreadsheet you provide to customize the words in your keyboard\'s dictionary. The "Word" column contains frequently used words in your language that you would like to add to your dictionary. The "Count" column gives the amount of times or frequency that a word appears in your text.',
      excel_instruction:
        'Create an Excel file with "Word" in the A column and "Count" in the B column. You may upload the Excel file directly to the Upload Area.',
      google_sheets_instruction:
        'Create a Google Sheets spreadsheet with "Word" in the A column and "Count" in the B column. When you have completed the spreadsheet press the "Share" button in the top right corner of the Google Sheets interface and copy a link which "Anyone on the internet with this link can view". You may now paste this link in the Google Sheets URL input.',
      tsv_instruction:
        'TSV stands for Tab Separated Values. Like Excel or Google Sheets, create a text file with "Word" in the first column and "Count" in the second column. Make sure your file has a .tsv extension and upload it to the File Uploader. For exhaustive details on how your file should look, please visit the',
      keyman: "Keyman Website",
    },
    main: {
      title: "Welcome to Predictive Text Studio",
      designed_for: "Designed for",
      add: "Add",
      prediction: "prediction",
      and: "and",
      autocorrect: "autocorrect",
      to_your_language: "to your language",
      get_started: "Get started",
      step_one: "Step 1: Enter your language",
      step_two: "Step 2: Add a word list",
      upload_tab_label: "Upload File",
      google_sheets_tab_label: "Google Sheets URL",
      customize: "Customize",
      privacy_policy: "Privacy Policy",
      about_the_team: "About the Team",
    },
    lang: {
      go_back_to_main_page: "Go back to main page",
      information: "Information",
      sources: "Sources",
      download: "Download",
      add_copyright_symbol: "Add ©",
    },
    privacy: {
      title: "Predictive Text Studio Privacy Policy",
      effective_as_of: "Effective as of",
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
      title: "Team",
      intro: "These are people who have contributed to the project",
      core_maintainers: "Core Maintainers",
      team_members: "Team Members",
    },
  },
} as Localization;
