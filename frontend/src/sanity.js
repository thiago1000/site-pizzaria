import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION


const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // token: process.env.NEXT_PUBLIC_TOKEN,
 
});

export default client;