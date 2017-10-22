
export interface Locale {
  id?: string;
  force?: boolean;
}

export interface Enrollment {
  type?:  EnrollmentTypes;
  start?:  string;
  end?:  string;
  accessCode?:  string;
}

export const enum EnrollmentTypes {
  InstructorLed = 'InstructorLed',
  SelfEnrollment = 'SelfEnrollment',
  EmailEnrollment = 'EmailEnrollment'
}

export interface Availability {
  available?:  AvailabilityTypes;
  duration?:  Duration;
}
export const enum AvailabilityTypes {
  Yes = 'Yes',
  No = 'No',
  Disbaled = 'Disabled',
  Term = 'Term'
}

export interface Duration {
  type?: DurationTypes;
  start?: string;
  end?: string;
  daysOfUse?: number;
}


export enum DurationTypes {
  Continuous = 'Continous',
  DateRange = 'DateRange',
  FixedNumDays = 'FixedNumDays',
  Term = 'Term'
}
