# src/server/WorkerMetrics.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2764 bytes
- Dependencies: @opentelemetry/exporter-metrics-otlp-http, @opentelemetry/sdk-metrics, dotenv, ../core/configuration/ConfigLoader, ./GameManager, ./OtelResource
- Public interfaces: initWorkerMetrics
- Important implementation details: Functions/methods: initWorkerMetrics Content notes: import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http"; import { MeterProvider, PeriodicExportingMetricReader, } from "@opentelemetry/sdk-metrics"; import * as dotenv from "dotenv"; import { getServerConfigFromServer } from "../core/configuration/ConfigLoader"; import { GameManager } from "./GameManager";

