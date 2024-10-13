/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@prisma/client'
import createUserRouter from './User.router'
import createServiceRouter from './Service.router'
import createGalleryImageRouter from './GalleryImage.router'
import createFaqRouter from './Faq.router'
import createContactMessageRouter from './ContactMessage.router'
import createBookingRouter from './Booking.router'
import createTestimonialRouter from './Testimonial.router'
import createBookingServiceRouter from './BookingService.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as ServiceClientType } from './Service.router'
import { ClientType as GalleryImageClientType } from './GalleryImage.router'
import { ClientType as FaqClientType } from './Faq.router'
import { ClientType as ContactMessageClientType } from './ContactMessage.router'
import { ClientType as BookingClientType } from './Booking.router'
import { ClientType as TestimonialClientType } from './Testimonial.router'
import { ClientType as BookingServiceClientType } from './BookingService.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    service: createServiceRouter(router, procedure),
    galleryImage: createGalleryImageRouter(router, procedure),
    faq: createFaqRouter(router, procedure),
    contactMessage: createContactMessageRouter(router, procedure),
    booking: createBookingRouter(router, procedure),
    testimonial: createTestimonialRouter(router, procedure),
    bookingService: createBookingServiceRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  service: ServiceClientType<AppRouter>
  galleryImage: GalleryImageClientType<AppRouter>
  faq: FaqClientType<AppRouter>
  contactMessage: ContactMessageClientType<AppRouter>
  booking: BookingClientType<AppRouter>
  testimonial: TestimonialClientType<AppRouter>
  bookingService: BookingServiceClientType<AppRouter>
}
