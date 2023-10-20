import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skAtTyC1BjlmsO6S5yBjTWNMXrrNnGhOmvcxv3f2Xp4orz6y7llLqcmf4RrS06a5oQD3T0ReSOHOKrruZMmWBqZGKRxGcSWrvM18Jb5pnqgsaYlRwejuSnBTVvhJK9X6NU1ZEyWfOlFfHf5WvTqaVDf57UQoeNGnJjzrBgs98D6sQynWqPSQ"
})
