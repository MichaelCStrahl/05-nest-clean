import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/domain/forum/enterprise/entities/value-objects/unique-entity-id'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(5),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}
