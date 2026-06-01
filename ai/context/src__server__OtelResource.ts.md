# src/server/OtelResource.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 858 bytes
- Dependencies: @opentelemetry/resources, @opentelemetry/semantic-conventions, ../core/configuration/ConfigLoader
- Public interfaces: getOtelResource, getPromLabels
- Important implementation details: Functions/methods: getOtelResource, getPromLabels Content notes: import { resourceFromAttributes } from "@opentelemetry/resources"; import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION, } from "@opentelemetry/semantic-conventions"; import { getServerConfigFromServer } from "../core/configuration/ConfigLoader"; const config = getServerConfigFromServer(); export function getOtelResource() {

