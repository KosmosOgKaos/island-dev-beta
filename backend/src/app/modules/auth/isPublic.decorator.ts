import { SetMetadata } from '@nestjs/common'
/*
We want auth to be opt-out not opt-in.
Add @IsPublic decorator to public endpoints/resolvers
*/
export const IS_PUBLIC_KEY = 'isPublic'
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true)
