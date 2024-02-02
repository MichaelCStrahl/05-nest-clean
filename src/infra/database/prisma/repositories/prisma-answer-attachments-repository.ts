import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  async findManyByAnswerId(answerId: string) {
    throw new Error('Method not implemented.')
    return {} as AnswerAttachment[]
  }

  async deleteManyByAnswerId(answerId: string) {
    throw new Error('Method not implemented.')
  }
}
