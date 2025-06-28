import type { Sql } from '@prisma/client/runtime/library.js';
import prisma from './database.js';
import { InternalServerError } from './error.js';

type QueryRawResult<T> = T | null;

async function safeQueryRaw<T = unknown>(
  query: TemplateStringsArray | Sql,
): Promise<QueryRawResult<T>> {
  try {
    const result = await prisma.$queryRaw<T>(query);
    return result;
  } catch (error) {
    console.error(`❌ Error executing queryRaw: ${query}`);
    console.error(error);
    throw new InternalServerError();
  }
}

const queries = {
  safeQueryRaw,
};

export default queries;
