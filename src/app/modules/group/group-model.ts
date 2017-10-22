import { Availability } from '../shared-model';

export interface Group {
  id: string;
  externalId: string;
  name: string;
  description: string;
  parentId: string;
  availability: Availability;
  enrollment: Enrollment;
}

export interface Enrollment {
  type: string;
  limit: number;
  signupSheet: SignupSheet;
}

export interface SignupSheet {
  name: string;
  description: string;
  showMembers: boolean;
}
