import { BookOutlined } from '@ant-design/icons'

export function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand-lockup">
          <span className="brand-icon" aria-hidden="true">
            <BookOutlined />
          </span>
          <div>
            <strong>MiliAI 콘텐츠 생성기</strong>
            <p>프로젝트 주제와 연결되는 기술·Unit 후보를 빠르게 찾아보세요.</p>
          </div>
        </div>
        <span className="internal-label">콘텐츠 기획 도구</span>
      </div>
    </header>
  )
}
