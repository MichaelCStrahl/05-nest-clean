import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { PrismaAnswerAttachmentsRepository } from './prisma/repositories/prisma-answer-attachments-repository'
import { PrismaAnswerCommentsRepository } from './prisma/repositories/prisma-answer-comments-repository'
import { PrismaAnswerRepository } from './prisma/repositories/prisma-answers-repository'
import { PrismaQuestionAttachmentsRepository } from './prisma/repositories/prisma-question-attachments-repository'
import { PrismaQuestionsRepository } from './prisma/repositories/prisma-questions-repository'
import { PrismaQuestionCommentsRepository } from './prisma/repositories/prisma-question-comments-repository'

@Module({
  providers: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
  exports: [
    PrismaService,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionsRepository,
  ],
})
export class DatabaseModule {}
