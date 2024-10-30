function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getFullName(
  firstName?: string,
  lastName?: string
): string | undefined {
  const trimmedFirst = firstName?.trim();
  const trimmedLast = lastName?.trim();

  if (!trimmedFirst && !trimmedLast) {
    return undefined;
  }

  const capitalizedFirst = trimmedFirst ? capitalize(trimmedFirst) : "";
  const capitalizedLast = trimmedLast ? capitalize(trimmedLast) : "";

  if (!capitalizedFirst) {
    return capitalizedLast;
  }

  if (!capitalizedLast) {
    return capitalizedFirst;
  }

  return `${capitalizedFirst} ${capitalizedLast}`;
}
