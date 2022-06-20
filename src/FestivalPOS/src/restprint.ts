import { http } from "./api/http";

export function getPrinterNames() {
    return http.get("https://localhost:9721/Printers")
        .expectJson<string[]>()
        .transfer();
}

export function printRaw(printerName: string, content: any, name?: string) {
    return http.post(`https://localhost:9721/Printers/${encodeURIComponent(printerName)}/Jobs`, { name })
        .with(content, "application/octet-stream")
        .send();
}