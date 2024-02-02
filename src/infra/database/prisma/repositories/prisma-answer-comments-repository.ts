import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  async findById(id: string) {
    throw new Error('Method not implemented.')
    return null
  }

  async findManyByAnswerId(answerId: string, params: PaginationParams) {
    throw new Error('Method not implemented.')
    return {} as AnswerComment[]
  }

  async create(answerComment: AnswerComment) {
    throw new Error('Method not implemented.')
  }

  async delete(answerComment: AnswerComment) {
    throw new Error('Method not implemented.')
  }
}
