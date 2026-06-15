import { ArrowRightOutlined } from '@ant-design/icons'
import type { UnitBundle } from '../types/tech'

export function UnitBundles({ bundles }: { bundles: UnitBundle[] }) {
  if (bundles.length === 0) return null

  return (
    <section className="unit-bundle-section">
      <div className="section-heading">
        <div>
          <span>추천 학습 흐름</span>
          <h2>검색 결과로 구성한 Unit 후보 묶음</h2>
        </div>
        <p>프로젝트의 준비부터 결과 표현까지 자연스럽게 연결해보세요.</p>
      </div>
      <div className="unit-bundle-grid">
        {bundles.map((bundle, index) => (
          <div className="unit-bundle" key={bundle.title}>
            <div className="bundle-number">0{index + 1}</div>
            <div>
              <h3>{bundle.title}</h3>
              <p>{bundle.description}</p>
              <ul>
                {bundle.units.map((unit) => (
                  <li key={unit}>
                    <ArrowRightOutlined aria-hidden="true" />
                    {unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
