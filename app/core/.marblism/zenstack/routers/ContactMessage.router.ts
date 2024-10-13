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

        createMany: procedure.input($Schema.ContactMessageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.createMany(input as any))),

        create: procedure.input($Schema.ContactMessageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.create(input as any))),

        deleteMany: procedure.input($Schema.ContactMessageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.deleteMany(input as any))),

        delete: procedure.input($Schema.ContactMessageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.delete(input as any))),

        findFirst: procedure.input($Schema.ContactMessageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).contactMessage.findFirst(input as any))),

        findMany: procedure.input($Schema.ContactMessageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).contactMessage.findMany(input as any))),

        findUnique: procedure.input($Schema.ContactMessageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contactMessage.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContactMessageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.updateMany(input as any))),

        update: procedure.input($Schema.ContactMessageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contactMessage.update(input as any))),

        count: procedure.input($Schema.ContactMessageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).contactMessage.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContactMessageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContactMessageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactMessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactMessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactMessageGetPayload<T>, Context>) => Promise<Prisma.ContactMessageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContactMessageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContactMessageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactMessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactMessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactMessageGetPayload<T>, Context>) => Promise<Prisma.ContactMessageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContactMessageFindFirstArgs, TData = Prisma.ContactMessageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ContactMessageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactMessageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactMessageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContactMessageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactMessageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactMessageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContactMessageFindManyArgs, TData = Array<Prisma.ContactMessageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ContactMessageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContactMessageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactMessageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ContactMessageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContactMessageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContactMessageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContactMessageFindUniqueArgs, TData = Prisma.ContactMessageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContactMessageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContactMessageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContactMessageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContactMessageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContactMessageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContactMessageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContactMessageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContactMessageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContactMessageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContactMessageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContactMessageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContactMessageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContactMessageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContactMessageGetPayload<T>, Context>) => Promise<Prisma.ContactMessageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ContactMessageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContactMessageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ContactMessageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ContactMessageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContactMessageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ContactMessageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContactMessageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContactMessageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
