
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

export interface CreateApplicationDTO {
    completed?: Nullable<boolean>;
    data: string;
    owner: string;
}

export interface LoginDto {
    username: string;
}

export interface UpdateApplicationDTO {
    completed?: Nullable<boolean>;
    data?: Nullable<string>;
}

export interface Application {
    completed?: Nullable<boolean>;
    data: string;
    id: number;
    owner: string;
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
    createApplication(data: CreateApplicationDTO): Application | Promise<Application>;
    login(input: LoginDto): AuthUser | Promise<AuthUser>;
    updateApplication(data: UpdateApplicationDTO, id: number): Application | Promise<Application>;
}

export interface IQuery {
    getApplicationById(id: number): Nullable<Application> | Promise<Nullable<Application>>;
    getApplicationByNationalId(owner: string): Nullable<Application> | Promise<Nullable<Application>>;
    getApplications(): Application[] | Promise<Application[]>;
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
