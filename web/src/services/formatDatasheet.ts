export function formatDatasheet(datasheet: string) {
    return datasheet
      .trim()
      .split("\n")
      .map((line) => {
        const [key, ...rest] = line.replace("- ", "").split(":");
        return {
          key: key.trim(),
          value: rest.join(":").trim(),
        };
      });
  }