/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TestimonialInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.createMany(input as any))),

        create: procedure.input($Schema.TestimonialInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.create(input as any))),

        deleteMany: procedure.input($Schema.TestimonialInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.deleteMany(input as any))),

        delete: procedure.input($Schema.TestimonialInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.delete(input as any))),

        findFirst: procedure.input($Schema.TestimonialInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).testimonial.findFirst(input as any))),

        findMany: procedure.input($Schema.TestimonialInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).testimonial.findMany(input as any))),

        findUnique: procedure.input($Schema.TestimonialInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).testimonial.findUnique(input as any))),

        updateMany: procedure.input($Schema.TestimonialInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.updateMany(input as any))),

        update: procedure.input($Schema.TestimonialInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).testimonial.update(input as any))),

        count: procedure.input($Schema.TestimonialInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).testimonial.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TestimonialCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TestimonialCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestimonialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestimonialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestimonialGetPayload<T>, Context>) => Promise<Prisma.TestimonialGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TestimonialDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TestimonialDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestimonialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestimonialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestimonialGetPayload<T>, Context>) => Promise<Prisma.TestimonialGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TestimonialFindFirstArgs, TData = Prisma.TestimonialGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.TestimonialFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestimonialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestimonialFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TestimonialFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestimonialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestimonialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TestimonialFindManyArgs, TData = Array<Prisma.TestimonialGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.TestimonialFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TestimonialGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestimonialFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.TestimonialFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TestimonialGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TestimonialGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TestimonialFindUniqueArgs, TData = Prisma.TestimonialGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TestimonialFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TestimonialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TestimonialFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TestimonialFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TestimonialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TestimonialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TestimonialUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TestimonialUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TestimonialUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TestimonialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TestimonialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TestimonialUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TestimonialUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TestimonialGetPayload<T>, Context>) => Promise<Prisma.TestimonialGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TestimonialCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TestimonialCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.TestimonialCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TestimonialCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TestimonialCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.TestimonialCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TestimonialCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TestimonialCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
