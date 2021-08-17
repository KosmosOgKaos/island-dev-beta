import { ApolloError } from "@apollo/client";

export interface UseApplicationDataResult {
  loading?: boolean,
  error?: ApolloError,
  data?: {
    id: number
    formData: {}
  } | null
}

export type UseApplicationUpdater = (formData: any) => Promise<boolean>
