import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerRepository implements AnswersRepository {
  async findById(id: string) {
    throw new Error('Method not implemented.')
    return null
  }

  async findManyByQuestionId(questionId: string, params: PaginationParams) {
    throw new Error('Method not implemented.')
    return {} as Answer[]
  }

  async create(answer: Answer) {
    throw new Error('Method not implemented.')
  }

  async delete(answer: Answer) {
    throw new Error('Method not implemented.')
  }

  async save(answer: Answer) {
    throw new Error('Method not implemented.')
  }
}