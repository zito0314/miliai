import { useState } from 'react'
import { CopyOutlined, DownloadOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Alert, Button, Segmented, Tag, message } from 'antd'
import type { PblPlan } from '../types/pbl'
import { copyPblPlanAsTsv } from '../utils/copyPblPlanAsTsv'
import { downloadJson } from '../utils/downloadJson'
import { PblPlanTable } from './PblPlanTable'

type ViewMode = '계층 보기' | '표 보기'

export function PblPlanResult({ plan }: { plan: PblPlan }) {
  const [viewMode, setViewMode] = useState<ViewMode>('계층 보기')
  const [messageApi, contextHolder] = message.useMessage()

  const handleCopy = async () => {
    try {
      await copyPblPlanAsTsv(plan)
      messageApi.success('표 형태로 복사했어요. Google Sheets에 붙여넣을 수 있습니다.')
    } catch {
      messageApi.error('클립보드에 복사하지 못했어요.')
    }
  }

  return (
    <section className="pbl-result" aria-label="생성된 PBL 과정설계">
      {contextHolder}
      <div className="pbl-result-toolbar">
        <Segmented<ViewMode>
          value={viewMode}
          options={[
            { label: '계층 보기', value: '계층 보기', icon: <UnorderedListOutlined /> },
            { label: '표 보기', value: '표 보기' },
          ]}
          onChange={setViewMode}
        />
        <div className="pbl-result-actions">
          <Button icon={<CopyOutlined />} onClick={() => void handleCopy()}>
            표 형태로 복사
          </Button>
          <Button icon={<DownloadOutlined />} onClick={() => downloadJson(plan)}>
            JSON 다운로드
          </Button>
        </div>
      </div>

      <div className="pbl-summary">
        <div className="pbl-summary-main">
          <span>과정</span>
          <h2>{plan.courseName}</h2>
          <dl>
            <div>
              <dt>커리큘럼</dt>
              <dd>{plan.curriculumName}</dd>
            </div>
            <div>
              <dt>과목</dt>
              <dd>{plan.subject.title}</dd>
            </div>
            <div>
              <dt>과목 요약</dt>
              <dd>{plan.subject.summary}</dd>
            </div>
            <div>
              <dt>문제 상황</dt>
              <dd>{plan.subject.problemContext}</dd>
            </div>
            <div>
              <dt>최종 산출물</dt>
              <dd>{plan.subject.finalOutput}</dd>
            </div>
          </dl>
        </div>
        <div className="pbl-summary-tags">
          <span>추천 기술 태그</span>
          <div>
            {plan.subject.recommendedTags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
      </div>

      <Alert
        className="pbl-draft-alert"
        type="info"
        showIcon
        title="AI가 생성한 과정설계 초안입니다. 교육 목표와 실제 데이터 환경에 맞게 검토·수정해주세요."
      />

      {viewMode === '표 보기' ? <PblPlanTable plan={plan} /> : <PblHierarchy plan={plan} />}
    </section>
  )
}

function PblHierarchy({ plan }: { plan: PblPlan }) {
  return (
    <div className="pbl-hierarchy">
      {plan.units.map((unit) => (
        <section className="pbl-unit" key={unit.id}>
          <div className="pbl-unit-heading">
            <span>{unit.id}</span>
            <div>
              <h3>{unit.title}</h3>
              <p><strong>목표</strong> {unit.goal}</p>
              <div className="concept-list">
                {unit.requiredConcepts.map((concept) => <Tag key={concept}>{concept}</Tag>)}
              </div>
            </div>
          </div>

          <div className="pbl-mission-list">
            {unit.missions.map((mission) => (
              <section className="pbl-mission" key={`${unit.id}-${mission.id}`}>
                <div className="pbl-mission-heading">
                  <span>{mission.id}</span>
                  <div>
                    <h4>{mission.title}</h4>
                    <p><strong>목표</strong> {mission.goal}</p>
                  </div>
                </div>

                <div className="pbl-task-list">
                  {mission.tasks.map((task) => (
                    <article className="pbl-task" key={`${unit.id}-${mission.id}-${task.id}`}>
                      <div className="pbl-task-title">
                        <span>{task.id}</span>
                        <h5>{task.title}</h5>
                      </div>
                      <p>{task.description}</p>
                      <dl>
                        <div>
                          <dt>산출물</dt>
                          <dd>{task.output}</dd>
                        </div>
                        <div>
                          <dt>평가 기준</dt>
                          <dd>
                            <ul>{task.assessmentCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}</ul>
                          </dd>
                        </div>
                      </dl>
                      <div className="pbl-task-technologies">
                        <strong>필요 기술</strong>
                        <div className="pbl-technology-list">
                          {task.requiredTechnologies.map((technology) => (
                            <div className="pbl-technology" key={`${task.id}-${technology.name}`}>
                              <div>
                                <strong>{technology.name}</strong>
                                <Tag>{technology.category}</Tag>
                              </div>
                              <p>{technology.reason}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pbl-task-tags">
                        {task.requiredTags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
