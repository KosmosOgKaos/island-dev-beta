
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    Admin = "Admin",
    User = "User"
}

export interface LoginDto {
    username: string;
}

export interface AuthUser {
    roles: Role[];
    token: string;
    username: string;
}

export interface Entry {
    entries: SubEntry[];
    id: number;
    title: string;
    type: string;
}

export interface IMutation {
    login(input: LoginDto): AuthUser | Promise<AuthUser>;
}

export interface IQuery {
    getEntries(): Entry[] | Promise<Entry[]>;
    getEntry(id: number): Entry | Promise<Entry>;
}

export interface SubEntry {
    entry: Entry;
    id: number;
}

export interface ISubscription {
    entryFound(): Entry | Promise<Entry>;
}

type Nullable<T> = T | null;
