/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@prisma/client'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.GalleryImageInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.GalleryImageInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.GalleryImageInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.GalleryImageInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.GalleryImageInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).galleryImage.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.GalleryImageInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).galleryImage.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.GalleryImageInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).galleryImage.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.GalleryImageInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.GalleryImageInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).galleryImage.update(input as any)),
      ),

    count: procedure
      .input($Schema.GalleryImageInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).galleryImage.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.GalleryImageCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.GalleryImageCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.GalleryImageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.GalleryImageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.GalleryImageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.GalleryImageGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.GalleryImageDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.GalleryImageDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.GalleryImageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.GalleryImageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.GalleryImageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.GalleryImageGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.GalleryImageFindFirstArgs,
      TData = Prisma.GalleryImageGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.GalleryImageFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.GalleryImageGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.GalleryImageFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.GalleryImageFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.GalleryImageGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GalleryImageGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.GalleryImageFindManyArgs,
      TData = Array<Prisma.GalleryImageGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.GalleryImageFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.GalleryImageGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.GalleryImageFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.GalleryImageFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.GalleryImageGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.GalleryImageGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.GalleryImageFindUniqueArgs,
      TData = Prisma.GalleryImageGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.GalleryImageFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.GalleryImageGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.GalleryImageFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.GalleryImageFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.GalleryImageGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GalleryImageGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.GalleryImageUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.GalleryImageUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.GalleryImageUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.GalleryImageGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.GalleryImageGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.GalleryImageUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.GalleryImageUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.GalleryImageGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.GalleryImageGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.GalleryImageCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.GalleryImageCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.GalleryImageCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.GalleryImageCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.GalleryImageCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.GalleryImageCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.GalleryImageCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.GalleryImageCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
