# 세바지(세상을 바꾸는 지피티)

[2023 SW중심대학 공동해커톤](https://www.swuniv.kr/56/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=15247030&t=board) SMARTBRO 팀

</br>

ChatGPT 공유하기 기능으로 생성된 코드가 포함된 링크(Shared link URL)을 받아서 이를 내부 로직으로 전처리하여 요약해주는 서비스

</br>


<img src="https://github.com/sanghee01/Smartbro-front/assets/80993302/771f218d-abc0-41f9-80dd-1bbecf5dbe27" width="70%">

서비스 링크: https://smartbro.vercel.app/

</br>

## 팀 역할

- 백엔드: 김현석, 이동국, 조형근
- 프론트엔드: 이상희
- 디자이너: 김종훈

</br>

## 개발동기

**1. ChatGPT 에 추가된 공유하기 기능.**  
**URL 하나로 나와 GPT와 함께 진행한 개발 과정**을 일목요연하게 정리 할 수 있다면?  
**이것을 데이터화하여 어떤 서비스**를 제공할 수 있을 것인가?  
</br>

<img src="https://github.com/sanghee01/Smartbro-front/assets/80993302/c3926af8-b3ea-486b-90f0-bf0cafecb2ef" width="50%">

</br>
</br>

**2. 개발자의 바뀐 모니터 화면**  
단 1년 전, 해커톤에서 다른 사람들의 모니터를 보면 **CRUD 를 작성하는 모습에서**
이번 해커톤에서 본 다른 개발자분들의 모니터는, **ChatGPT 와의 채팅 내역으로**..

시험, 과제, 보고서 제출, 프로젝트에서 GPT와 함께 할수 있는 풍토가 마련된
**세상에서 GPT와 함께 코딩했던 내역 자체가
개발자의 워크스페이스, 작업내용의 히스토리**가 될 수 있다.

</br>

**이것을 통해 무엇을 할 수 있을까요?**

</br>

## 서비스 소개
<img src="https://github.com/sanghee01/Smartbro-front/assets/80993302/59405ead-ff9f-49d3-9409-c26045b3044c" width="70%">

</br>
</br>


## 결과

1.ChatGPT 대화내용을 **개인용 데이터화**하다

</br>

해당 페이지의 텍스트, 코드 데이터를
긁어와서 전처리를 하고  
**질문과 답변, 그리고 코드 포함 답변, 코드가 미포함 답변으로 구분할 수 있는 데이터셋**을 만들었습니다.

<img src="https://github.com/sanghee01/Smartbro-front/assets/80993302/d5ef9566-7b3a-43ec-a22a-6d8eda48f6e9" width="20%">

</br>
</br>


2.개발자가 Chat GPT API 를 쓰기 위한 Prompt
**지시문 길이 제한을 극복하는 압축 기술**

**GPT API 사용에서 prompt(맥락)의 크기 제한**은
**10 폰트 기준 종이 반 장**입니다.  
현재 GPT 3.5 turbo 기준 최대 16K 입니다.

개발자가 API 사용할시 16K 가 넘는 Prompt(지시문)은 넣을 수가 없습니다.
이를 해결하기 위한,

1. Few-shot 방법
2. 질문, 답변, 코드여부 등을 고려한 압축

기술을 사용하였습니다.

</br>

## 아이디어의 기대효과

1. 대화 내역 링크 요약 -> **GPT 대화 내역 공유 커뮤니티**를 통한 오픈소스 활성화

2. 본인의 채팅기록을 바탕으로 **개인용 코드 데이터베이스화, 본인 코드 조회 서비스**

3. **개발자용 OpenAI Chat API Prompt 의 긴 용량을 압축**하는 서비스로의 발전

</br>
