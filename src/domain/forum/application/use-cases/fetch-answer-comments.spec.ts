import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { UniqueEntityID } from '../../enterprise/entities/value-objects/unique-entity-id'
import { FetchAnswerCommentsUseCase } from './fetch-answer-comments'
import { makeAnswerComment } from 'test/factories/make-answer-comment'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sut: FetchAnswerCommentsUseCase

describe('Fetch Answer Comments Use Case', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository(
      inMemoryStudentsRepository,
    )
    sut = new FetchAnswerCommentsUseCase(inMemoryAnswerCommentsRepository)
  })

  it('should be able to fetch answer comments', async () => {
    const student = makeStudent({ name: 'John Doe' })

    inMemoryStudentsRepository.items.push(student)

    const commentOne = makeAnswerComment({
      answerId: new UniqueEntityID('answer-01'),
      authorId: student.id,
    })
    const commentTwo = makeAnswerComment({
      answerId: new UniqueEntityID('answer-01'),
      authorId: student.id,
    })
    const commentThree = makeAnswerComment({
      answerId: new UniqueEntityID('answer-01'),
      authorId: student.id,
    })

    await inMemoryAnswerCommentsRepository.create(commentOne)
    await inMemoryAnswerCommentsRepository.create(commentTwo)
    await inMemoryAnswerCommentsRepository.create(commentThree)

    const result = await sut.execute({
      answerId: 'answer-01',
      page: 1,
    })

    expect(result.value?.comments).toHaveLength(3)
    expect(result.value?.comments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          author: 'John Doe',
          commentId: commentOne.id,
        }),
        expect.objectContaining({
          author: 'John Doe',
          commentId: commentTwo.id,
        }),
        expect.objectContaining({
          author: 'John Doe',
          commentId: commentThree.id,
        }),
      ]),
    )
  })

  it('should be able to fetch paginated answer comments', async () => {
    const student = makeStudent({ name: 'John Doe' })

    inMemoryStudentsRepository.items.push(student)

    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswerCommentsRepository.create(
        makeAnswerComment({
          answerId: new UniqueEntityID('answer-01'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({
      answerId: 'answer-01',
      page: 2,
    })

    expect(result.value?.comments).toHaveLength(2)
  })
})
