/**
 * 加载 JavaScript
 * @param src
 * @returns {Promise<any>}
 */
export function loadScript(src: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export function getRandomColor(): string {
  return (
    "hsl(" +
    Math.round(Math.random() * 360) +
    "," +
    Math.round(Math.random() * 100) +
    "%," +
    Math.round(Math.random() * 100) +
    "%)"
  );
}
