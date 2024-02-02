import { DomainEvent } from '@/core/events/domain-event'
import { UniqueEntityID } from '../entities/value-objects/unique-entity-id'
import { Question } from '../entities/question'

export class QuestionBestAnswerChosenEvent implements DomainEvent {
  public ocurredAt: Date
  public question: Question
  public bestAnswertId: UniqueEntityID

  constructor(question: Question, bestAnswertId: UniqueEntityID) {
    this.question = question
    this.bestAnswertId = bestAnswertId
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.question.id
  }
}
