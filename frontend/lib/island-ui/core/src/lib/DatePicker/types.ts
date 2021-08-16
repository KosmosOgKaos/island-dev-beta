import { ReactDatePickerProps } from "react-datepicker";
import is from "date-fns/locale/is";
import en from "date-fns/locale/en-US";

import { Icon as IconType, Type } from "../IconRC/iconMap";

// https://en.wikipedia.org/wiki/Date_format_by_country
export const dateFormat = {
  is: "dd.MM.yyyy",
  en: "dd/MM/yyyy",
};

const languageConfig = {
  is: {
    format: dateFormat.is,
    locale: is,
  },
  en: {
    format: dateFormat.en,
    locale: en,
  },
};

type LocaleKeys = keyof typeof languageConfig;

export type DatePickerBackgroundColor = "white" | "blue";
export type DatePickerSize = "md" | "sm";

export interface DatePickerProps {
  label: string;
  placeholderText: ReactDatePickerProps["placeholderText"];
  locale?: LocaleKeys;
  minDate?: ReactDatePickerProps["minDate"];
  maxDate?: ReactDatePickerProps["maxDate"];
  excludeDates?: ReactDatePickerProps["excludeDates"];
  selected?: ReactDatePickerProps["selected"];
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  id?: string;
  handleChange?: (startDate: Date) => void;
  onInputClick?: ReactDatePickerProps["onInputClick"];
  handleCloseCalendar?: (date: Date | null) => void;
  handleOpenCalendar?: () => void;
  required?: boolean;
  inputName?: string;
  size?: DatePickerSize;
  backgroundColor?: DatePickerBackgroundColor;
  icon?: IconType;
  iconType?: Type;
  /**
   * Minimum selectable year inside datepicker
   */
  minYear?: number;
  /**
   * Maximum selectable year inside datepicker
   */
  maxYear?: number;
}

export interface DatePickerCustomHeaderProps {
  date: Date;
  changeYear(year: number): void;
  changeMonth(month: number): void;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  decreaseYear(): void;
  increaseYear(): void;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  locale: Locale;
  minYear?: number;
  maxYear?: number;
}
