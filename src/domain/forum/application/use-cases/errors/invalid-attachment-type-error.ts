import { UseCaseError } from '@/core/error/use-case-error'

export class InvalidAttachmentTypeError extends Error implements UseCaseError {
  constructor(type: string) {
    super(`Attachment type "${type}" is not valid`)
  }
}
