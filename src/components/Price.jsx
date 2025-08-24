export function Price({ value, priceCurrency }) {
  const fmt = new Intl.NumberFormat(undefined, { style: "currency", currency: priceCurrency });

    if (typeof value === "string" && value.includes("-")) {
      const [min, max] = value.split("-").map(Number);
      return <>{fmt.format(min)} - {fmt.format(max)}</>;
    }

    return <>{fmt.format(Number(value))}</>;
}