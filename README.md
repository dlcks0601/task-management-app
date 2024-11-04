# 프로젝트 관리 앱

## 라이브러리

@reduxjs/toolkit redux clsx @vanilla-extract/css @vanilla-extract/css-utils @vanilla-extract/vite-plugin react-icons uuid react-beautiful-dnd

clsx : 클래스 네임을 만들 때 좀 더 동적으로 만들기위해서 사용

Redux

상태 관리 라이브러리 (선택사항)

State, Props 상태를 여러 컴포넌트와 공유

앱 커지면 => 관리 힘듦, 소스코드 지저분

==> Redux

Flow

Action (객체) Dispatch (함수) : Reducer 함수 type return => Redux Store State => React Component Rerendring

Toolkit Reducer Slice

타입 스크립트 => 추론x => 타입 지정 annotate 해줘야함
