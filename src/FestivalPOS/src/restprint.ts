import { Http } from "ur-http";

export function getPrinterNames() {
    return Http.get("https://localhost:9721/Printers")
        .expectJson<string[]>()
        .transfer();
}

export function printRaw(printerName: string, content: any, name?: string) {
    return Http.post(`https://localhost:9721/Printers/${encodeURIComponent(printerName)}/Jobs`, { name })
        .with(content, "application/octet-stream")
        .send();
}