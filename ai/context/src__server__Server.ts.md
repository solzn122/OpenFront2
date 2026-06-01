# src/server/Server.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 709 bytes
- Dependencies: cluster, dotenv, ./Master, ./Worker
- Public interfaces: internal classes/functions (0 classes, 1 functions/methods)
- Important implementation details: Functions/methods: main Content notes: import cluster from "cluster"; import * as dotenv from "dotenv"; import { startMaster } from "./Master"; import { startWorker } from "./Worker"; dotenv.config(); async function main() { if (cluster.isPrimary) { console.log("Starting master process...");

