import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  async findManyByQuestionId(questionId: string) {
    throw new Error('Method not implemented.')
    return {} as QuestionAttachment[]
  }

  async deleteManyByQuestionId(questionId: string) {
    throw new Error('Method not implemented.')
  }
}
