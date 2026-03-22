import{j as e,L as s}from"./index-CTP-Gd1m.js";import{S as r}from"./SEOHead-D4bsERKE.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"강의안: 실전 코딩",description:"코드 생성, 디버깅, 리팩토링 등 개발 업무에 AI를 효과적으로 활용하는 프롬프트 기법을 학습합니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"강의안: 실전 코딩"}),e.jsx("p",{children:"코드 생성, 디버깅, 리팩토링을 위한 프롬프트 엔지니어링"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"학습 목표"}),e.jsxs("ul",{children:[e.jsx("li",{children:"코드 생성을 위한 효과적인 프롬프트 작성법을 이해한다"}),e.jsx("li",{children:"디버깅 시 AI에게 문제를 정확히 전달하는 프롬프트를 구성할 수 있다"}),e.jsx("li",{children:"리팩토링 요청 프롬프트에서 목표와 제약 조건을 명시하는 방법을 익힌다"}),e.jsx("li",{children:"코딩 작업 유형별 최적 프롬프트 전략을 선택할 수 있다"})]})]}),e.jsx("h2",{children:"AI 코딩 활용 원칙"}),e.jsxs("p",{children:["AI를 코딩에 활용할 때는 ",e.jsx("strong",{children:"명확한 요구사항 정의"}),"가 핵심입니다. 자연어로 원하는 기능을 설명하되, 프로그래밍 맥락에서 필요한 구체적 정보 (언어, 프레임워크, 입출력 형식 등)를 반드시 포함해야 합니다."]}),e.jsx("h3",{children:"1. 기술 스택 명시"}),e.jsx("p",{children:'사용할 프로그래밍 언어, 프레임워크, 라이브러리 버전을 명확히 지정합니다. "Python으로"보다 "Python 3.11, FastAPI 0.100 이상"처럼 구체적으로 작성하세요.'}),e.jsx("h3",{children:"2. 입출력 정의"}),e.jsx("p",{children:"함수나 API의 입력값과 기대 출력을 구체적으로 명시합니다. 예시 데이터를 함께 제공하면 AI가 요구사항을 정확히 파악할 수 있습니다."}),e.jsx("h3",{children:"3. 제약 조건 전달"}),e.jsx("p",{children:"성능 요구사항, 코딩 컨벤션, 금지 패턴 등 제약 조건을 명시하면 실무에 바로 적용 가능한 코드를 얻을 수 있습니다."}),e.jsx("h2",{children:"코드 생성 프롬프트"}),e.jsx("p",{children:"새로운 코드를 생성할 때는 기능 요구사항, 기술 스택, 코딩 스타일을 모두 포함합니다. 아래 예시는 REST API 엔드포인트를 생성하는 프롬프트입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("h4",{children:"코드 생성 프롬프트 예시"}),e.jsx("pre",{children:e.jsx("code",{children:`# 프롬프트:
# Python FastAPI로 사용자 CRUD API를 작성해 주세요.
# - Pydantic 모델로 입력 검증
# - 비동기 SQLAlchemy 사용
# - 에러 핸들링 포함
# - 타입 힌트 필수

# AI가 생성한 코드 예시:
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Optional

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    age: Optional[int] = None

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    age: Optional[int]

    class Config:
        from_attributes = True

@app.post("/users", response_model=UserResponse)
async def create_user(
    user: UserCreate,
    db: AsyncSession = Depends(get_db)
) -> UserResponse:
    """새 사용자를 생성합니다."""
    try:
        db_user = User(**user.model_dump())
        db.add(db_user)
        await db.commit()
        await db.refresh(db_user)
        return db_user
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=409,
            detail="이미 등록된 이메일입니다."
        )`})})]}),e.jsx("h2",{children:"디버깅 프롬프트"}),e.jsxs("p",{children:["디버깅 프롬프트에서는 ",e.jsx("strong",{children:"에러 메시지, 관련 코드, 기대 동작, 실제 동작"}),"을 모두 포함해야 AI가 정확한 원인을 파악할 수 있습니다."]}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("h4",{children:"디버깅 프롬프트 예시"}),e.jsx("pre",{children:`다음 Python 코드에서 버그를 찾아 수정해 주세요.

[코드]
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

result = calculate_average([])

[에러 메시지]
ZeroDivisionError: division by zero

[기대 동작]
빈 리스트가 입력되면 0을 반환하거나 적절한 예외를 발생시켜야 합니다.

[요청사항]
1. 버그의 원인을 설명해 주세요
2. 수정된 코드를 제시해 주세요
3. 엣지 케이스를 처리하는 방어적 코딩을 적용해 주세요
4. 수정 후 테스트 코드도 함께 작성해 주세요`})]}),e.jsx("h2",{children:"리팩토링 프롬프트"}),e.jsx("p",{children:'리팩토링 요청 시에는 현재 코드의 문제점과 개선 목표를 명확히 전달합니다. 단순히 "리팩토링해 줘"보다는 구체적인 개선 방향을 제시하세요.'}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("h4",{children:"리팩토링 프롬프트 예시"}),e.jsx("pre",{children:`다음 코드를 리팩토링해 주세요.

[현재 코드]
def process_data(data):
    result = []
    for item in data:
        if item['type'] == 'A':
            if item['value'] > 100:
                result.append(item['name'].upper())
            else:
                result.append(item['name'].lower())
        elif item['type'] == 'B':
            if item['value'] > 200:
                result.append(item['name'].upper())
            else:
                result.append(item['name'].lower())
    return result

[개선 목표]
1. 중복 로직 제거 (DRY 원칙 적용)
2. 가독성 향상
3. 새로운 type 추가 시 확장이 용이한 구조
4. 타입 힌트 추가

[제약 조건]
- 외부 라이브러리 사용 금지
- 기존 함수의 입출력 인터페이스 유지
- 변경 전후 동작이 동일해야 함`})]}),e.jsx("h2",{children:"코딩 프롬프트 유형별 핵심 요소"}),e.jsxs("table",{className:"lesson-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"작업 유형"}),e.jsx("th",{children:"필수 포함 요소"}),e.jsx("th",{children:"권장 포함 요소"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"코드 생성"}),e.jsx("td",{children:"기능 요구사항, 언어/프레임워크"}),e.jsx("td",{children:"코딩 컨벤션, 예시 데이터, 테스트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"디버깅"}),e.jsx("td",{children:"에러 메시지, 관련 코드, 기대 동작"}),e.jsx("td",{children:"실행 환경, 재현 조건"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"리팩토링"}),e.jsx("td",{children:"현재 코드, 개선 목표"}),e.jsx("td",{children:"제약 조건, 성능 요구사항"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"코드 리뷰"}),e.jsx("td",{children:"코드, 리뷰 관점 (보안/성능/가독성)"}),e.jsx("td",{children:"팀 코딩 규칙, 컨텍스트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"테스트 작성"}),e.jsx("td",{children:"대상 코드, 테스트 프레임워크"}),e.jsx("td",{children:"커버리지 목표, 엣지 케이스"})]})]})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"강의 요약"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["코딩 프롬프트의 핵심은 ",e.jsx("strong",{children:"기술 스택, 입출력, 제약 조건"}),"을 명확히 전달하는 것이다"]}),e.jsx("li",{children:"코드 생성 시 기능 요구사항과 함께 코딩 스타일, 에러 처리 방침을 지정한다"}),e.jsx("li",{children:"디버깅 프롬프트에는 에러 메시지, 관련 코드, 기대 동작을 반드시 포함한다"}),e.jsx("li",{children:"리팩토링은 현재 문제점과 개선 목표를 구체적으로 제시해야 효과적이다"}),e.jsx("li",{children:"작업 유형에 따라 프롬프트에 포함할 필수 요소가 달라진다"})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"복습 문제"}),e.jsxs("ul",{children:[e.jsx("li",{children:"자신이 최근 작성한 코드를 AI에게 리뷰 요청하는 프롬프트를 작성해 보세요."}),e.jsx("li",{children:'같은 기능을 "간단한 프롬프트"와 "상세한 프롬프트"로 각각 요청하고 결과를 비교해 보세요.'}),e.jsx("li",{children:"의도적으로 버그가 있는 코드를 만들고, 디버깅 프롬프트를 작성하여 AI가 찾도록 해 보세요."}),e.jsx("li",{children:'코드 생성 프롬프트에서 "테스트 코드도 함께 작성"을 추가하면 결과가 어떻게 달라지는지 확인해 보세요.'})]})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/lectures/writing",className:"lesson-nav-btn prev",children:"← 이전: 실전: 글쓰기"}),e.jsx(s,{to:"/lectures/analysis",className:"lesson-nav-btn next",children:"다음: 실전: 데이터 분석 →"})]})]})})})]})}export{n as default};
