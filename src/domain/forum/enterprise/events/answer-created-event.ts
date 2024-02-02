import { DomainEvent } from '@/core/events/domain-event'
import { Answer } from '../entities/answer'
import { UniqueEntityID } from '../entities/value-objects/unique-entity-id'

export class AnswerCreateEvent implements DomainEvent {
  public ocurredAt: Date
  public answer: Answer

  constructor(answer: Answer) {
    this.answer = answer
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}
