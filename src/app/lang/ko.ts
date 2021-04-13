import type Localization from "./localization";

export default {
  common: {
    app_name: "Predictive Text Studio",
    back: "뒤로가기",
    help: "도움말",
    excel: "엑셀",
    google_sheets: "Google 스프레드시트",
    tsv: "TSV",
    example: "예시",
    upload: "업로드",
    direct_entry: "직접 입력",
    error: "에러",
    bcp47_tag: "BCP47 태그",
    name: "이름",
    size: "크기",
    type: "타입",
    actions: "액션",
    table_name: "테이블 이름",
    word: "단어",
    count: "수",
    optional: "선택",
    save: "저장",
    close: "닫기",
    or: "또는",
  },
  input: {
    enter_bcp47_tag: "BCP 47 태그 입력",
    invalid_bcp47_tag: "잘못된 BCP 47 태그",
    download_kmp_package: "다운로드 KMP 패키지",
    read_values: "값 읽기",
    connection_error: "Google 스프레드 시트에 연결할 수 없습니다.",
    invalid_google_sheets_url:
      "유효한 Google 스프레드 시트 URL이 아닙니다. 유효한 것을 붙여 넣으십시오.",
    language: "언어",
    author_or_organization: "저자 또는 조직",
    shortcode: "짧은 코드",
    dictionary_name: "사전 이름",
    model_id: "모델 아이디",
    copyright: "저작권",
    keyboard_preview: "키보드 예시",
    keyboard_preview_alt: "iOS 영문 키보드",
    add_source: "소스 추가",
    add_row: "행 추가",
    drag_and_drop:
      "Excel .xlsx 또는 TSV 파일을 여기로 드래그해서 업로드 하세요!",
    browse_file: "파일 찾아보기",
    advanced_options: "고급 옵션",
    only_works_with: "* .xlsx 파일 및 Google 스프레드 시트에서만 작동합니다",
    spreadsheet_word_column: "스프레드 시트 단어 열",
    spreadsheet_count_column: "스프레드 시트 수 열",
    no_custom_word_column:
      "사용자 지정 단어 열이 지정되지 않았습니다! 기본값은",
    no_custom_count_column: "사용자 지정 수 열이 지정되지 않았습니다! 기본값은",
    existing_project_warning: "이미 프로젝트가 시작되었습니다!",
    existing_project_continue_prompt: "계속 하시겠습니까?",
    continue: "계속하다",
  },
  page: {
    help: {
      title: "무엇을 업로드할까요?",
      intro:
        'Predictive Text Studio는 사용자가 제공하는 스프레드 시트를 사용하여 키보드 사전의 단어를 사용자 정의합니다. "단어"열에는 사전에 추가하려는 언어로 자주 사용되는 단어가 포함되어 있습니다. "개수"열은 단어가 텍스트에 나타나는 횟수 또는 빈도를 제공합니다.',
      excel_instruction:
        'A 열에는 "Word", B 열에는 "Count"가 포함 된 Excel 파일을 만듭니다. Excel 파일을 업로드 영역에 직접 업로드 할 수 있습니다.',
      google_sheets_instruction:
        'A 열에 "단어", B 열에 "개수"로 Google 스프레드 시트를 만듭니다. 스프레드 시트 작성이 완료되면 Google 스프레드 시트 인터페이스의 오른쪽 상단에있는 "공유"버튼을 누르고 "이 링크가있는 인터넷상의 모든 사용자가 볼 수있는"링크를 복사하십시오. 이제이 링크를 Google 스프레드 시트 URL 입력에 붙여 넣을 수 있습니다.',
      tsv_instruction:
        'TSV는 탭으로 구분 된 값을 나타냅니다. Excel 또는 Google 스프레드 시트와 마찬가지로 첫 번째 열에는 "Word", 두 번째 열에는 "Count"가 포함 된 텍스트 파일을 만듭니다. 파일의 확장자가 .tsv인지 확인하고 파일 업 로더에 업로드하십시오. 파일이 어떻게 보이는지에 대한 자세한 내용은',
      keyman: "Keyman 웹사이트",
    },
    main: {
      title: "Predictive Text Studio에 오신 것을 환영합니다",
      add: " ",
      prediction: "자동 완성 단어를",
      and: "추가하고",
      autocorrect: "자동으로",
      to_your_language: "당신의 언어로 고쳐보세요",
      get_started: "시작 하기",
      step_one: "1단계: 언어를 입력하세요",
      step_two: "2단계: 단어 목록을 추가하세요",
      upload_tab_label: "파일 업로드",
      google_sheets_tab_label: "Google 스프레드시트 URL",
      customize: "맞춤 설정",
      privacy_policy: "개인 정보 정책",
      about_the_team: "개발팀 정보",
    },
    lang: {
      go_back_to_main_page: "메인 페이지로 돌아가기",
      information: "정보",
      sources: "소스",
      download: "다운로드",
      delete_project: "프로젝트 삭제",
      no_project: "선택한 프로젝트가 없습니다",
      no_project_subtitle:
        "새 프로젝트를 만들거나 기존 프로젝트에서 작업을 시작하세요",
      no_source: "소스가 없습니다",
      no_source_subtitle:
        "Excel, TSV 파일을 업로드 하거나 소스를 직접 입력하세요",
      import_project_data: "프로젝트 데이터 가져오기",
      export_project_data: "프로젝트 데이터 내보내기",
    },
    privacy: {
      title: "Predictive Text Studio 개인 정보 정책",
      effective_as_of: "유효",
      introduction: {
        title: "소개",
        head: {
          0: '이 개인 정보 보호 정책 ("개인 정보 보호 정책")은 Predictive Text Studio (이하 "당사"또는 "당사"라고도 함)에서 제공하는 웹 사이트 및 제품의 사용에 적용됩니다.',
          1: '본 개인 정보 보호 정책은 당사가 제공하는 모든 서비스 및 기타 제품, 소프트웨어 및 웹 사이트 및 그 콘텐츠와 관련된 기타 온라인 기능 (이하 "서비스")에 적용되고 효력이 있습니다.',
          2: "이 개인 정보 보호 정책에 대한 질문이나 의견이 있으면 다음 주소로 문의하십시오.",
          3: '우리는 귀하의 개인 정보를 보호하고 존중하기 위해 최선을 다하고 있습니다. 개인 정보 보호 정책은 당사가 귀하로부터 수집 한 개인 정보가 당사 또는 당사를 대신하여 처리되는 근거를 설명합니다. 이러한 서비스를 통해 귀하가 제공하는 개인 데이터가 처리되는 목적 또는 수단을 결정하는 경우 당사는 "관리자"입니다. 이러한 서비스를 통해 제공하는 개인 데이터가 처리되는 목적이나 수단을 결정하는 경우 귀하는 "관리자"입니다. 우리는 일반 데이터 보호 규정 2016/679를 포함하여 적절하고 적용 가능한 데이터 보호법을 준수합니다.',
          4: "이 개인 정보 보호 정책에는 다음에 대한 중요한 정보가 포함되어 있으므로주의 깊게 읽으시기 바랍니다.",
        },
        policy: {
          0: "귀하에 대해 수집 할 수있는 정보;",
          1: "귀하에 대해 수집 한 정보를 사용하는 방법;",
          2: "귀하의 세부 정보를 다른 사람에게 공개할지 여부; 그리고",
          3: "귀하가 당사에 제공 한 개인 정보에 대한 귀하의 선택 및 권리.",
        },
        foot: {
          0: "서비스에는 제 3자가 소유하고 운영하는 서비스에 대한 링크가 포함될 수 있습니다. 또한 귀하에게 서비스를 적절하게 제공하기 위해 일부 제 3 자 소프트웨어 또는 제품을 사용할 수 있습니다. 그렇게하고 개인 데이터의 제 3 자에게 제공하는 경우 전송이 합법적이고 안전하다는 것을 확신 할 수 있습니다. 이러한 제 3 자 서비스에는 자체 개인 정보 보호 정책이있을 수 있으며 검토 할 것을 권장합니다. 이러한 서비스를 사용하는 동안 귀하가 제출하거나 쿠키 및 기타 추적 기술에 의해 수집되는 개인 정보의 사용에 적용됩니다. 당사는 그러한 제 3 자 서비스의 개인 정보 보호 관행에 대해 어떠한 책임도지지 않으며 이러한 서비스의 사용은 귀하의 책임입니다.",
          1: "당사는 향후이 개인 정보 보호 정책을 변경할 수 있습니다. 변경 사항을 알고 있는지 확인하기 위해이 페이지를 수시로 확인해야합니다. 적절한 경우 당사는 그러한 변경 사항을 귀하에게 통지 할 수 있습니다.",
        },
      },
      information: {
        title: "귀하에 대해 수집 할 수있는 정보",
        main:
          "당사는 서비스 또는 웹 사이트를 사용하는 동안 귀하가 당사에 제공 한 데이터를 수집하거나 저장하지 않습니다. 모든 데이터는 브라우저에 로컬로 저장됩니다.",
      },
      personal_data: {
        title: "개인 데이터 수집, 처리 및 사용",
        main: "우리는 개인 데이터를 저장하거나 처리하지 않습니다.",
      },
      purpose_of_processing: {
        title: "귀하에 대한 정보를 수집하는 이유-처리 목적",
        main:
          "당사는 당사간에 합의 된 사용 약관에 따라 귀하에게 서비스를 제공하기 위해 귀하가 제공 한 정보를 사용합니다. 이러한 방식으로 정보를 처리하는 것은 당사가 귀하에게 서비스를 적절하게 제공하고 귀하가 가능한 최상의 서비스를받을 수 있도록 기능이 올바르게 작동하는지 확인하는 데 필요합니다.",
      },
      cookies: {
        title: "쿠키 및 웹 비콘",
        main: "우리는 쿠키 나 웹 비콘을 사용하지 않습니다.",
      },
      log_files: {
        title: "로그 파일",
        main: "로그 파일에는 개인 데이터가 포함되어 있지 않습니다.",
      },
      children: {
        title: "아동 개인 데이터",
        main:
          "당사는 18 세 미만을 포함하여 누구로부터도 개인 정보를 수집하지 않습니다. 부모 및 법적 보호자는 자녀의 인터넷 사용을 모니터링하고 자녀에게 웹 사이트 또는 서비스를 통해 개인 정보를 제공하지 않도록 지시하여 본 정책을 시행하도록 권장합니다.",
      },
      data_sharing: {
        title: "데이터 공유",
        main: {
          0: "당사는 귀하의 데이터를 제 3 자와 공유하지 않습니다.",
          1: "법에 의해 요구됨 : 우리는 법에 의해 요구되는 범위 내에서 법적 절차 또는 잠재적인 법적 절차와 관련하여, 그리고 우리의 법적 권리를 확립, 행사 또는 방어하기 위해 정보를 공개 할 수 있습니다 (정부 기관 및 법 집행 기관에 포함될 수 있음).",
        },
      },
      data_transmission: {
        title: "데이터 전송",
        main: "우리는 귀하의 데이터를 전송하지 않습니다.",
      },
      your_rights: {
        title: "귀하의 권리",
        main:
          "귀하는 귀하의 개인 데이터가 처리되는 방식에 대해 다음과 같은 권리가 있습니다.",
        request: "요청을 하려면 다음 주소로 이메일을 보내주십시오.",
        rights: {
          0: "귀하는 당사가 귀하에 대해 처리하는 개인 정보의 사본을 요청하고 정확하지 않은 정보를 수정할 권리가 있습니다.",
          1: "귀하는 귀하에 대해 보유한 개인 정보의 제공, 정정 또는 삭제를 요청할 수 있습니다.",
          2: "귀하는 당사에 귀하의 개인 데이터를 제한, 처리 중지 또는 삭제하도록 요청할 수 있습니다.",
          3: "데이터 처리에 대한 동의를 철회 할 수 있습니다.",
          4: "다른 서비스 제공 업체에서 사용할 수있는 개인 데이터 사본을 확보하십시오.",
          5: "감독 기관에 불만을 제기하십시오.",
        },
      },
      changes_to_policy: {
        title: "개인 정보 보호 정책의 변경",
        main:
          "이 개인 정보 보호 정책은 수시로 업데이트 될 수 있습니다. 당사의 개인 정보 보호 관행에 대한 최신 정보를 보려면이 웹 사이트를 검토하는 것이 좋습니다. 본 개인 정보 보호 정책에 중대한 변경 사항이있는 경우 변경 사항이 적용되기 전에 웹 사이트에 공지 사항을 게시하여 알려드립니다. 본 개인 정보 보호 정책의 변경 사항에 동의하지 않을 경우 웹 사이트 및 서비스 사용을 중단하십시오. 이 개인 정보 보호 정책은 다음의 도움으로 작성되었습니다.",
        source: "개인 정보 보호 정책 생성기",
      },
    },
    team: {
      title: "개발팀",
      intro: "현재까지 프로젝트에 기여한 개발자들 입니다.",
      core_maintainers: "핵심 유지보수 담당자",
      team_members: "개발팀",
    },
  },
} as Localization;
