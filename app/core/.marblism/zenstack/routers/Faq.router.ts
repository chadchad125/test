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

        createMany: procedure.input($Schema.FaqInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.createMany(input as any))),

        create: procedure.input($Schema.FaqInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.create(input as any))),

        deleteMany: procedure.input($Schema.FaqInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.deleteMany(input as any))),

        delete: procedure.input($Schema.FaqInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.delete(input as any))),

        findFirst: procedure.input($Schema.FaqInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).faq.findFirst(input as any))),

        findMany: procedure.input($Schema.FaqInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).faq.findMany(input as any))),

        findUnique: procedure.input($Schema.FaqInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).faq.findUnique(input as any))),

        updateMany: procedure.input($Schema.FaqInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.updateMany(input as any))),

        update: procedure.input($Schema.FaqInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faq.update(input as any))),

        count: procedure.input($Schema.FaqInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).faq.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FaqCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FaqCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaqGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaqGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaqGetPayload<T>, Context>) => Promise<Prisma.FaqGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FaqDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FaqDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaqGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaqGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaqGetPayload<T>, Context>) => Promise<Prisma.FaqGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FaqFindFirstArgs, TData = Prisma.FaqGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.FaqFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FaqGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaqFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FaqFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FaqGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FaqGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FaqFindManyArgs, TData = Array<Prisma.FaqGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.FaqFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FaqGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaqFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FaqFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FaqGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FaqGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FaqFindUniqueArgs, TData = Prisma.FaqGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FaqFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FaqGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaqFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FaqFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FaqGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FaqGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FaqUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FaqUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaqUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaqGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaqGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaqUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaqUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaqGetPayload<T>, Context>) => Promise<Prisma.FaqGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.FaqCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FaqCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.FaqCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FaqCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.FaqCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.FaqCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FaqCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FaqCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
