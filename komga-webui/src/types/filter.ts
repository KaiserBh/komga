interface FiltersOptions {
  [key: string]: {
    name?: string,
    values?: NameValue[],
    search?: (search: string) => Promise<string[]>,
  },
}

interface NameValue {
  name: string,
  value: string,
}

interface FiltersActive {
  [key: string]: string[],
}
