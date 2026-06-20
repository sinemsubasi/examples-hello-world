import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const url = new URL(req.url);
  
  // Siteye ilk girildiğinde direkt index.html'i aç
  if (url.pathname === "/") {
    return serveFile(req, "./index.html");
  }
  
  // Fotoğraf yüklenmek istendiğinde klasörden bulup getir
  return serveDir(req, {
    fsRoot: ".",
  });
});
