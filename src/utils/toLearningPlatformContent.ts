import type { Mission, PblPlan, Project, Step, StepOption, Submission } from '../types/pbl'

export type LearningPlatformContent = {
  projects: LearningPlatformProject[]
}

export type LearningPlatformProject = Omit<Project, 'planner_note' | 'developer_note'> & {
  missions: LearningPlatformMission[]
}

export type LearningPlatformMission = Omit<Mission, 'project_id' | 'planner_review_points' | 'developer_note' | 'steps' | 'submission'> & {
  steps: LearningPlatformStep[]
  submission: LearningPlatformSubmission
}

export type LearningPlatformStep = Omit<Step, 'project_id' | 'mission_id' | 'planner_note' | 'developer_note' | 'options'> & {
  options: LearningPlatformOption[]
}

export type LearningPlatformOption = Omit<StepOption, 'project_id' | 'mission_id' | 'step_id' | 'option_group'>

export type LearningPlatformSubmission = Omit<Submission, 'project_id' | 'mission_id' | 'developer_note'>

export function toLearningPlatformContent(plan: PblPlan): LearningPlatformContent {
  return {
    projects: [
      {
        project_id: plan.project.project_id,
        title: plan.project.title,
        short_description: plan.project.short_description,
        environment_type: plan.project.environment_type,
        duration_label: plan.project.duration_label,
        target_learner: plan.project.target_learner,
        difficulty_label: plan.project.difficulty_label,
        project_goal: plan.project.project_goal,
        learning_mode: plan.project.learning_mode,
        prerequisites: plan.project.prerequisites,
        tech_stack: plan.project.tech_stack,
        final_outputs: plan.project.final_outputs,
        constraints: plan.project.constraints,
        pc_alternative: plan.project.pc_alternative,
        is_student_visible: plan.project.is_student_visible,
        content_status: plan.project.content_status,
        missions: plan.missions.map(toLearningPlatformMission),
      },
    ],
  }
}

function toLearningPlatformMission(mission: Mission): LearningPlatformMission {
  return {
    mission_id: mission.mission_id,
    mission_order: mission.mission_order,
    title: mission.title,
    environment_type: mission.environment_type,
    estimated_time: mission.estimated_time,
    core_learning_action: mission.core_learning_action,
    student_outputs: mission.student_outputs,
    mission_overview: mission.mission_overview,
    learning_goal: mission.learning_goal,
    prerequisites: mission.prerequisites,
    tech_stack: mission.tech_stack,
    constraints: mission.constraints,
    is_pc_required: mission.is_pc_required,
    has_mobile_alternative: mission.has_mobile_alternative,
    steps: mission.steps.map(toLearningPlatformStep),
    submission: toLearningPlatformSubmission(mission.submission),
  }
}

function toLearningPlatformStep(step: Step): LearningPlatformStep {
  return {
    step_id: step.step_id,
    step_order: step.step_order,
    section: step.section,
    block_type: step.block_type,
    title: step.title,
    learner_text: step.learner_text,
    learner_action: step.learner_action,
    input_type: step.input_type,
    options_ref: step.options_ref,
    expected_answer_ref: step.expected_answer_ref,
    expected_answer_text: step.expected_answer_text,
    is_student_visible: step.is_student_visible,
    required_device: step.required_device,
    completion_rule: step.completion_rule,
    body: step.body,
    question: step.question,
    code: step.code,
    code_template: step.code_template,
    buggy_code: step.buggy_code,
    correct_answer: step.correct_answer,
    hint: step.hint,
    explanation: step.explanation,
    code_blocks: step.code_blocks,
    correct_order: step.correct_order,
    checklist_items: step.checklist_items,
    ai_tutor_questions: step.ai_tutor_questions,
    peer_review_points: step.peer_review_points,
    is_required: step.is_required,
    device: step.device,
    device_target: step.device_target,
    mobile_visible: step.mobile_visible,
    pc_visible: step.pc_visible,
    mobile_variant: step.mobile_variant,
    pc_variant: step.pc_variant,
    learning_role: step.learning_role,
    mobile_summary: step.mobile_summary,
    pc_detail: step.pc_detail,
    mobile_continue_label: step.mobile_continue_label,
    pc_continue_label: step.pc_continue_label,
    submission_type: step.submission_type,
    evaluation_criteria: step.evaluation_criteria,
    expected_output: step.expected_output,
    options: step.options.map(toLearningPlatformOption),
  }
}

function toLearningPlatformOption(option: StepOption): LearningPlatformOption {
  return {
    option_id: option.option_id,
    option_order: option.option_order,
    option_value: option.option_value,
    option_label: option.option_label,
    label: option.label,
    is_correct: option.is_correct,
    is_expected: option.is_expected,
    explanation: option.explanation,
    expected_order: option.expected_order,
    order: option.order,
  }
}

function toLearningPlatformSubmission(submission: Submission): LearningPlatformSubmission {
  return {
    submission_id: submission.submission_id,
    submission_title: submission.submission_title,
    student_instruction: submission.student_instruction,
    evaluation_text: submission.evaluation_text,
    pass_criteria: submission.pass_criteria,
    needs_revision_example: submission.needs_revision_example,
    peer_review_required: submission.peer_review_required,
    peer_review_mode: submission.peer_review_mode,
  }
}
