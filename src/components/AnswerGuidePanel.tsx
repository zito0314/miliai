import { CopyOutlined } from '@ant-design/icons'
import { Button, Collapse, Empty, List, Tag, Typography, message } from 'antd'
import type { ReactNode } from 'react'
import type { AnswerGuide, CodeExample } from '../types/pbl'

type AnswerGuidePanelProps = {
  answerGuides?: AnswerGuide[]
}

const { Paragraph, Text } = Typography

export function AnswerGuidePanel({ answerGuides }: AnswerGuidePanelProps) {
  const [messageApi, contextHolder] = message.useMessage()

  if (!answerGuides?.length) {
    return (
      <section className="answer-guide-panel is-empty" aria-label="기획자용 예상 답안">
        <div className="answer-guide-heading">
          <span>기획자용 예상 답안</span>
          <h3>아직 생성된 예상 답안이 없어요.</h3>
          <p>예상 답안 생성 버튼을 누르면 미션지별 예시 산출물, 참고 코드, 평가 기준이 이곳에 표시됩니다.</p>
        </div>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="예상 답안 없음" />
      </section>
    )
  }

  return (
    <section className="answer-guide-panel" aria-label="기획자용 예상 답안">
      {contextHolder}
      <div className="answer-guide-heading">
        <span>기획자용 예상 답안</span>
        <h3>예상 답안·예시 산출물·평가 참고 기준</h3>
        <p>학습자에게 바로 공개하는 정답지가 아니라, 기획자 검토와 평가 보완을 위한 내부 참고 자료입니다.</p>
      </div>

      <Collapse
        className="answer-guide-collapse"
        items={answerGuides.map((guide) => ({
          key: guide.mission_id,
          label: `${guide.mission_id} · ${guide.mission_title}`,
          children: (
            <article className="answer-guide-content">
              <GuideBlock title="해설 요약">
                <Paragraph>{guide.guideSummary}</Paragraph>
              </GuideBlock>

              <GuideBlock title="예시 산출물">
                <List
                  dataSource={guide.expectedOutputs}
                  renderItem={(item) => (
                    <List.Item>
                      <div className="answer-guide-list-item">
                        <strong>{item.title}</strong>
                        <Tag>{item.format}</Tag>
                        <p>{item.sampleContent}</p>
                        <Text type="secondary">PASS 조건: {item.passCondition}</Text>
                      </div>
                    </List.Item>
                  )}
                />
              </GuideBlock>

              <GuideBlock title="Step별 예상 답변">
                <List
                  dataSource={guide.stepGuides}
                  renderItem={(item) => (
                    <List.Item>
                      <div className="answer-guide-list-item">
                        <strong>{item.step_id} · {item.title}</strong>
                        <p>{item.expectedResponse}</p>
                        <div className="answer-guide-tags">
                          {item.keyPoints.map((point) => <Tag key={point}>{point}</Tag>)}
                        </div>
                        <Text type="secondary">확인 방법: {item.checkMethod}</Text>
                      </div>
                    </List.Item>
                  )}
                />
              </GuideBlock>

              <GuideBlock title="참고 코드">
                {guide.codeExamples.length > 0 ? (
                  <div className="answer-code-list">
                    {guide.codeExamples.map((codeExample) => (
                      <CodeExampleBlock
                        key={`${guide.mission_id}-${codeExample.title}`}
                        codeExample={codeExample}
                        onCopy={async () => {
                          try {
                            await navigator.clipboard.writeText(codeExample.code)
                            messageApi.success('참고 코드를 복사했어요.')
                          } catch {
                            messageApi.error('참고 코드를 복사하지 못했어요.')
                          }
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="answer-guide-muted">이 미션지는 코드 없이 예상 답변과 평가 기준 중심으로 검토합니다.</p>
                )}
              </GuideBlock>

              <GuideBlock title="평가 참고 기준">
                <List
                  dataSource={guide.evaluationGuide}
                  renderItem={(item) => (
                    <List.Item>
                      <div className="answer-guide-list-item">
                        <strong>{item.area}</strong>
                        <p>{item.question}</p>
                        <dl className="answer-evaluation-grid">
                          <div>
                            <dt>PASS 예시</dt>
                            <dd>{item.passExample}</dd>
                          </div>
                          <div>
                            <dt>FAIL 예시</dt>
                            <dd>{item.failExample}</dd>
                          </div>
                          <div>
                            <dt>피드백 예시</dt>
                            <dd>{item.feedbackExample}</dd>
                          </div>
                        </dl>
                      </div>
                    </List.Item>
                  )}
                />
              </GuideBlock>

              <GuideBlock title="흔한 오류">
                <ul className="answer-guide-bullets">
                  {guide.commonMistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}
                </ul>
              </GuideBlock>

              <GuideBlock title="평가자 메모">
                <ul className="answer-guide-bullets">
                  {guide.reviewerNotes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </GuideBlock>
            </article>
          ),
        }))}
      />
    </section>
  )
}

function GuideBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="answer-guide-block">
      <h4>{title}</h4>
      {children}
    </section>
  )
}

function CodeExampleBlock({ codeExample, onCopy }: { codeExample: CodeExample; onCopy: () => Promise<void> }) {
  return (
    <div className="answer-code-block">
      <div className="answer-code-heading">
        <div>
          <strong>{codeExample.title}</strong>
          <p>{codeExample.purpose}</p>
        </div>
        <Button size="small" icon={<CopyOutlined />} onClick={() => void onCopy()}>
          코드 복사
        </Button>
      </div>
      <pre><code>{codeExample.code}</code></pre>
      <dl className="answer-code-meta">
        <div>
          <dt>언어</dt>
          <dd>{codeExample.language}</dd>
        </div>
        <div>
          <dt>예상 결과</dt>
          <dd>{codeExample.expectedResult}</dd>
        </div>
        <div>
          <dt>주의</dt>
          <dd>{codeExample.caution}</dd>
        </div>
      </dl>
    </div>
  )
}
