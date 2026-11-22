/**
 * De dónde salen los datos: `mock` (sin backend) o `medusa` (backend real).
 * Se elige con la variable de entorno DATA_SOURCE. Los adaptadores llegan en T2 (mock) y T8/T10 (medusa).
 */
export type DataSource = "mock" | "medusa";

const DATA_SOURCES: readonly DataSource[] = ["mock", "medusa"];

export function getDataSource(value: string | undefined = process.env.DATA_SOURCE): DataSource {
  if (value === undefined || value === "") return "mock";
  if ((DATA_SOURCES as readonly string[]).includes(value)) return value as DataSource;
  throw new Error(`DATA_SOURCE no válido: "${value}". Usa "mock" o "medusa".`);
}
