import { isProduction } from '@/services/helper'

/* eslint-disable no-console */
export const logger = {

    log: (...args: any) => isProduction || console.log(...args),
    info: (...args: any) => isProduction || console.info(...args),
    warn: (...args: any) => isProduction || console.warn(...args),
    error: (...args: any) => isProduction ||  console.error(...args)

}
/* eslint-enable no-console */
