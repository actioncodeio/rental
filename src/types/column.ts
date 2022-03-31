export type float = number
export type integer = number

export type NumberType = integer | float

export type ColumnType = NumberType | Date | string

export type Column = {
  name: string
  type: ColumnType
}

