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

        createMany: procedure.input($Schema.BookingServiceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.createMany(input as any))),

        create: procedure.input($Schema.BookingServiceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.create(input as any))),

        deleteMany: procedure.input($Schema.BookingServiceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.deleteMany(input as any))),

        delete: procedure.input($Schema.BookingServiceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.delete(input as any))),

        findFirst: procedure.input($Schema.BookingServiceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingService.findFirst(input as any))),

        findMany: procedure.input($Schema.BookingServiceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingService.findMany(input as any))),

        findUnique: procedure.input($Schema.BookingServiceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).bookingService.findUnique(input as any))),

        updateMany: procedure.input($Schema.BookingServiceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.updateMany(input as any))),

        update: procedure.input($Schema.BookingServiceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingService.update(input as any))),

        count: procedure.input($Schema.BookingServiceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingService.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BookingServiceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BookingServiceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingServiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingServiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingServiceGetPayload<T>, Context>) => Promise<Prisma.BookingServiceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BookingServiceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BookingServiceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingServiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingServiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingServiceGetPayload<T>, Context>) => Promise<Prisma.BookingServiceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BookingServiceFindFirstArgs, TData = Prisma.BookingServiceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.BookingServiceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingServiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingServiceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BookingServiceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingServiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingServiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BookingServiceFindManyArgs, TData = Array<Prisma.BookingServiceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.BookingServiceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BookingServiceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingServiceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BookingServiceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BookingServiceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BookingServiceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BookingServiceFindUniqueArgs, TData = Prisma.BookingServiceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookingServiceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingServiceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingServiceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookingServiceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingServiceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingServiceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BookingServiceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BookingServiceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingServiceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingServiceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingServiceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingServiceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingServiceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingServiceGetPayload<T>, Context>) => Promise<Prisma.BookingServiceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.BookingServiceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BookingServiceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.BookingServiceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BookingServiceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.BookingServiceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.BookingServiceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BookingServiceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BookingServiceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
