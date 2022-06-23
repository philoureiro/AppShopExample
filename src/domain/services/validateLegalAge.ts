import { ParseDate } from "../../utils/parseDate";

export class ValidateLegalAge {
  legalAge = 18;

  validate = (birthDate: string): boolean => {
    if (!birthDate) {
      return false;
    }
    const born = ParseDate(birthDate)
    const diff_ms = Date.now() - born.getTime();
    const age_dt = new Date(diff_ms);
    const age = Math.abs(age_dt.getUTCFullYear() - 1970);
    return age >= this.legalAge;
  };
}
