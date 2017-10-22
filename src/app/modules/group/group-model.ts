import { Availability, AvailabilityTypes, EnrollmentTypes } from '../shared-model';

export interface GroupState {
  id?: string;
  externalId?: string;
  name?: string;
  description?: string;
  parentId?: string;
  availability?: Availability;
  enrollment?: Enrollment;
}

// TODO: are these properties optional?
export interface Enrollment {
  type?: string;
  limit?: number;
  signupSheet?: SignupSheet;
}

export interface SignupSheet {
  name: string;
  description: string;
  showMembers: boolean;
}


export const INITIAL_GROUP_STATE: GroupState = {
  externalId: '',
  name: '',
  description: '',
  parentId: '',
  availability: { available: AvailabilityTypes.Yes },
  enrollment: { type: EnrollmentTypes.SelfEnrollment }
};
