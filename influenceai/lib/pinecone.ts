import { Pinecone } from "@pinecone-database/pinecone";
import { convertToAscii } from "./utils";

export async function getMatchesFromEmbeddings(
  fileKey: string,
  embeddings: number[]
) {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environmentId: process.env.PINECONE_ENVIRONMENT,
    maxRetries: 5,
  });

  const index = await pinecone.index("chatpdf");

  try {
    const namespace = convertToAscii(fileKey);
    const queryResult = await index.query({
      topK: 5,
      vector: embeddings,
      includeMetadata: true,
      namespace,
    });

    return queryResult.matches || {};
  } catch (err) {
    console.error("error quering embeddings", err);
  }
}

export async function getContext(query: string, fileKey: string) {}
