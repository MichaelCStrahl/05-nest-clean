import { AppModule } from '@/infra/app.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'

describe('Fetch Recent Questions (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[GET] /questions', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: await hash('123456', 8),
      },
    })

    const accessToken = jwt.sign({ sub: user.id })

    await prisma.question.createMany({
      data: [
        {
          title: 'First question',
          slug: 'first-question',
          content: 'content first question',
          authorId: user.id,
        },
        {
          title: 'Second question',
          slug: 'second-question',
          content: 'content second question',
          authorId: user.id,
        },
        {
          title: 'Third question',
          slug: 'third-question',
          content: 'content third question',
          authorId: user.id,
        },
      ],
    })

    const response = await request(app.getHttpServer())
      .get('/questions')
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.body.questions).toHaveLength(3)
    expect(response.body).toEqual({
      questions: [
        expect.objectContaining({
          title: 'First question',
        }),
        expect.objectContaining({
          title: 'Second question',
        }),
        expect.objectContaining({
          title: 'Third question',
        }),
      ],
    })
  })
})
