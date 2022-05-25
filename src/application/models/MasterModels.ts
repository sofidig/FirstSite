export interface Address {
  address?: string;
}

export interface CompanyBasic {
  name?: string;
  description?: string;
  address?: Address;
}

export interface DateDuration {
  startDate?: Date;
  endDate?: Date;
}
