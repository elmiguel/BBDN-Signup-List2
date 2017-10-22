import { Availability, Locale } from '../shared-model';

export interface User {
  id: string;
  uuid: string;
  externalId?: string;
  dataSourceId?: string;
  userName?: string;
  studentId?: string;
  educationLevel?: string;
  gender?: string;
  birthDate?: string;
  created?: string;
  lastLogin?: string;
  systemRoleIds?: string[];
  availability?: Availability;
  name?: Name;
  job?: Job;
  contact?: Contact;
  address?: Address;
  locale?: Locale;
}


export interface Address {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface Contact {
  homePhone?: string;
  mobilePhone?: string;
  businessPhone?: string;
  businessFax?: string;
  email?: string;
  webPage?: string;
}

export interface Job {
  title?: string;
  department?: string;
  company?: string;
}

export interface Name {
  given?: string;
  family?: string;
  middle?: string;
  other?: string;
  suffix?: string;
  title?: string;
}

