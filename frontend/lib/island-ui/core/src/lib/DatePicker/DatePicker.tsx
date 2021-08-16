import * as React from "react";
import { useEffect, useRef, useState, forwardRef } from "react";
import cn from "classnames";
import {
  default as ReactDatePicker,
  registerLocale,
  ReactDatePickerProps,
} from "react-datepicker";
import getYear from "date-fns/getYear";
import is from "date-fns/locale/is";
import en from "date-fns/locale/en-US";
import { VisuallyHidden } from "reakit";
import range from "lodash/range";

import { Icon } from "../IconRC/Icon";
import { Text } from "../Text/Text";

import * as styles from "./DatePicker.treat";
import * as coreStyles from "./react-datepicker.treat";
import { Input } from "../Input/Input";
import { InputProps } from "../Input/types";
import { DatePickerProps, DatePickerCustomHeaderProps } from "./types";

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

export const DatePicker: React.FC<DatePickerProps> = ({
  id,
  label,
  placeholderText,
  locale = "en",
  minDate,
  maxDate,
  excludeDates,
  selected,
  disabled = false,
  hasError = false,
  errorMessage,
  handleChange,
  onInputClick,
  handleCloseCalendar,
  handleOpenCalendar,
  required,
  inputName = "",
  backgroundColor = "white",
  size = "md",
  icon = "calendar",
  iconType = "outline",
  minYear,
  maxYear,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(selected ?? null);
  const [datePickerState, setDatePickerState] = useState<"open" | "closed">(
    "closed"
  );
  const currentLanguage = languageConfig[locale];

  useEffect(() => {
    if (locale === "en") {
      registerLocale("en", en);
    } else {
      registerLocale("is", is);
    }
  }, [locale]);

  useEffect(() => {
    setStartDate(selected ?? null);
  }, [selected]);

  return (
    <div className={coreStyles.root} data-testid="datepicker">
      <div
        className={cn(styles.root, "island-ui-datepicker", {
          [styles.small]: size === "sm",
        })}
      >
        <ReactDatePicker
          id={id}
          disabled={disabled}
          selected={selected ?? startDate}
          locale={currentLanguage.locale}
          minDate={minDate}
          maxDate={maxDate}
          excludeDates={excludeDates}
          dateFormat={currentLanguage.format}
          showPopperArrow={false}
          popperPlacement="bottom-start"
          popperModifiers={{
            flip: {
              enabled: false,
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
            },
          }}
          onCalendarOpen={() => {
            setDatePickerState("open");
            handleOpenCalendar && handleOpenCalendar();
          }}
          onCalendarClose={() => {
            setDatePickerState("closed");
            handleCloseCalendar && handleCloseCalendar(startDate);
          }}
          onChange={(date: Date) => {
            setStartDate(date);
            handleChange && handleChange(date);
          }}
          startDate={startDate}
          required={required}
          autoComplete="off"
          calendarClassName={cn({
            [styles.backgroundBlue]: backgroundColor === "blue",
          })}
          customInput={
            <CustomInput
              name={inputName}
              label={label}
              fixedFocusState={datePickerState === "open"}
              hasError={hasError}
              errorMessage={errorMessage}
              placeholderText={placeholderText}
              onInputClick={onInputClick}
              backgroundColor={backgroundColor}
              icon={icon}
              iconType={iconType}
              size={size}
            />
          }
          renderCustomHeader={(props) => (
            <CustomHeader
              locale={currentLanguage.locale}
              minYear={minYear}
              maxYear={maxYear}
              {...props}
            />
          )}
        />
      </div>
    </div>
  );
};

const CustomInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps & {
    placeholderText?: string;
    onInputClick?: ReactDatePickerProps["onInputClick"];
  }
>(
  (
    {
      className,
      placeholderText,
      onInputClick,
      fixedFocusState,
      icon,
      iconType,
      ...props
    },
    ref
  ) => (
    <Input
      {...props}
      icon={icon}
      iconType={iconType}
      ref={ref}
      fixedFocusState={fixedFocusState}
      placeholder={placeholderText}
    />
  )
);

const monthsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  changeMonth,
  changeYear,
  locale,
  minYear,
  maxYear,
}: DatePickerCustomHeaderProps) => {
  const monthRef = useRef<HTMLSpanElement>(null);
  const month = locale.localize ? locale.localize.month(date.getMonth()) : "";
  const months = monthsIndex.map((i) => {
    if (locale.localize) {
      return locale.localize.month(i);
    }
    return undefined;
  });
  const years =
    minYear && maxYear && minYear < maxYear && range(minYear, maxYear + 1);
  return (
    <div className={styles.customHeaderContainer}>
      <button
        type="button"
        onClick={decreaseMonth}
        className={styles.decreaseButton}
      >
        <Icon icon="chevronBack" type="outline" color="blue400" />
      </button>
      <div>
        <VisuallyHidden>
          <Text variant="h4" as="span" ref={monthRef}>
            {month}
          </Text>
        </VisuallyHidden>
        <select
          className={styles.headerSelect}
          value={month}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
          style={{
            width: monthRef?.current?.offsetWidth ?? "auto",
            marginRight: 8,
          }}
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {years && years.length > 0 ? (
          <select
            className={styles.headerSelect}
            value={date.getFullYear()}
            onChange={({ target: { value } }) => changeYear(parseInt(value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <Text variant="h4" as="span">
            {getYear(date)}
          </Text>
        )}
      </div>
      <button
        data-testid="datepickerIncreaseMonth"
        type="button"
        onClick={increaseMonth}
        className={styles.increaseButton}
      >
        <Icon icon="chevronForward" type="outline" color="blue400" />
      </button>
    </div>
  );
};
