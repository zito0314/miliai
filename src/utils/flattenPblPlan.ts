import type { PblPlan, PblPlanRow } from '../types/pbl'

export function flattenPblPlan(plan: PblPlan): PblPlanRow[] {
  return plan.units.flatMap((unit) =>
    unit.missions.flatMap((mission) =>
      mission.tasks.map((task) => ({
        key: `${unit.id}-${mission.id}-${task.id}`,
        courseName: plan.courseName,
        curriculumName: plan.curriculumName,
        subjectTitle: plan.subject.title,
        unitId: unit.id,
        unitTitle: unit.title,
        missionId: mission.id,
        missionTitle: mission.title,
        taskId: task.id,
        taskTitle: task.title,
        description: task.description,
        output: task.output,
        assessmentCriteria: task.assessmentCriteria.join(' / '),
        requiredTechnologies: task.requiredTechnologies.map((technology) => technology.name).join(', '),
        requiredTechnologyDetails: task.requiredTechnologies
          .map((technology) => `${technology.name} (${technology.category}): ${technology.reason}`)
          .join(' / '),
        requiredTags: task.requiredTags.join(' '),
      })),
    ),
  )
}
